import { Injectable, EventEmitter } from "@angular/core";

import { CurrencyPrice } from "../CurrencyPrice";
import { SecureStorage } from "nativescript-secure-storage";

import { PlatformService } from "./platform.service";
import { PlatformFactory } from "nativescript-angular/platform-common";

@Injectable()
export class CurrencyPriceService {
    currencyPrices: Array<CurrencyPrice> = [];
    private secureStorage: SecureStorage = new SecureStorage();
    public currencyPricesChanged = new EventEmitter<Object>();

    constructor(private readonly platformService: PlatformService) { }

    addCurrencyPrice(currencyPrice) {
        this.currencyPrices.push(currencyPrice);
    }


    createCurrencyPrice(codeFrom: string, codeTo: string, description, platform): CurrencyPrice {
        let newCurrencyPrice = new CurrencyPrice(codeFrom, codeTo, platform);
        newCurrencyPrice.setDescription(description);

        this.currencyPrices.push(newCurrencyPrice);

        this.currencyPricesChanged.emit({
            data: null, 
            message: null, 
            notification: null
        });

        return newCurrencyPrice;
    }

    deleteCurrencyPrice(currencyPrice: CurrencyPrice) {
        for(var i=0; i<this.currencyPrices.length; i++) {
            let currentCurrencyPrice = this.currencyPrices[i];
            if(currentCurrencyPrice.platform === currencyPrice.platform &&
                currentCurrencyPrice.currencyCodeFrom === currencyPrice.currencyCodeFrom &&
                currentCurrencyPrice.currencyCodeTo === currencyPrice.currencyCodeTo) {
                    this.currencyPrices.splice(i,1);
                    this.currencyPricesChanged.emit({
                        data: null, 
                        message: null, 
                        notification: null
                    });
            }
        }
    }


    getAllCurrencyPrices(platform?: string): Array<CurrencyPrice> {
        let currencyPrices;

        if (platform) {
            currencyPrices = [];
            for (var i = 0; i < this.currencyPrices.length; i++) {
                if (this.currencyPrices[i].platform === platform && this.currencyPrices[i].getDescription()) {
                    currencyPrices.push(this.currencyPrices[i]);
                }
            }
        } else {
            currencyPrices = this.currencyPrices;
        }

        return currencyPrices;
    }


    getAllCurrencyPricesIgnoringDisplaySetting(platform?: string): Array<CurrencyPrice> {
        let currencyPrices;

        if (platform) {
            currencyPrices = [];
            for (var i = 0; i < this.currencyPrices.length; i++) {
                if (this.currencyPrices[i].platform === platform) {
                    currencyPrices.push(this.currencyPrices[i]);
                }
            }
        } else {
            currencyPrices = this.currencyPrices;
        }

        return currencyPrices;
    }


    getCurrencyPriceAmount(codeFrom: string, codeTo: string, platform: string): number {
        for (var i = 0; i < this.currencyPrices.length; i++) {
            if (this.currencyPrices[i].currencyCodeFrom === codeFrom &&
                this.currencyPrices[i].currencyCodeTo === codeTo &&
                this.currencyPrices[i].platform === platform) {
                return this.currencyPrices[i].price;
            }
        }
    }


    getCurrencyPrice(codeFrom: string, codeTo: string, platform: string): CurrencyPrice {
        for(var i=0; i<this.currencyPrices.length; i++) {
            if((this.currencyPrices[i].currencyCodeFrom === codeFrom &&
                this.currencyPrices[i].currencyCodeTo === codeTo) || 
                (this.currencyPrices[i].currencyCodeFrom === codeTo &&
                this.currencyPrices[i].currencyCodeTo === codeFrom) &&
                this.currencyPrices[i].platform === platform) {
                    return this.currencyPrices[i];
                }
        }
    }


    getCurrencyPriceForDisplay(codeFrom, codeTo, platform) {
        let currencyPrice = this.getCurrencyPrice(codeFrom, codeTo, platform);

        if(!currencyPrice) {
            return null;
        }
        if(currencyPrice.getDescription() != undefined) {
            return currencyPrice;
        } else {
            return null;
        }
    }


    saveCurrencyPrices() {
        this.secureStorage.setSync({
            key: "cryptoCoinCalcPriceInformationData",
            value: JSON.stringify(this.currencyPrices)
        });
    }

    loadCurrencyPrices(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.loadCurrencyPricesFromPlatform().then((allCurrencyPrices) => {
                //buffer loaded currency prices
                this.currencyPrices = allCurrencyPrices;

                //load display currency prices from secure storage
                let storedPriceInformationString = this.secureStorage.getSync({
                    key: "cryptoCoinCalcPriceInformationData",
                });

                console.log("Currency Price Information:" + storedPriceInformationString);
        
                if (storedPriceInformationString) {
                    let storedPriceInformations = JSON.parse(storedPriceInformationString);
        
                    for (var i = 0; i < storedPriceInformations.length; i++) {
                        let storedPriceInformation = storedPriceInformations[i];
        
                        let currencyPrice = this.getCurrencyPrice(storedPriceInformation.currencyCodeFrom,
                                                                    storedPriceInformation.currencyCodeTo,
                                                                    storedPriceInformation.platform);
                        
                        if(!currencyPrice) {
                            //should not happen because then the server does not support this pair
                            console.log("Stored Symbol Pair does not exist in server API");
                            console.log("Currency Code From: " + storedPriceInformation.currencyCodeFrom);
                            console.log("Currency Code To: " + storedPriceInformation.currencyCodeTo);
                            console.log("Platform: " + storedPriceInformation.platform);
                        } else {
                            currencyPrice.setDescription(storedPriceInformation.currencyPriceDescription);
                        }
                    }
                }

                resolve(true);
            });
        });
    }


    private loadCurrencyPricesFromPlatform(): Promise<CurrencyPrice[]> {
        return new Promise<CurrencyPrice[]>((resolve, reject) => {
            var bitstampSymbols: CurrencyPrice[];
            var bitfinexSymbols: CurrencyPrice[];

            let promiseBitstamp = this.platformService.readAllBitstampSymbols().then((result) => {
                bitstampSymbols = result;
            });
            let promiseBitfinex = this.platformService.readAllBitfinexSymbols().then((result) => {
                bitfinexSymbols = result;
            });

            Promise.all([promiseBitfinex, promiseBitstamp]).then(() => {
                resolve(bitstampSymbols.concat(bitfinexSymbols));
            });
        });
        
    }

    public getDistinctCurrencySymbols(platform: string): Array<string> {
        let allCurrencyPrices = this.getAllCurrencyPricesIgnoringDisplaySetting(platform);
        let allSymbols = [];

        for(var i=0; i<allCurrencyPrices.length; i++) {
            let currencyPrice = allCurrencyPrices[i];
            let symbolFromFound = false;
            let symbolToFound = false;

            for(var j=0; j<allSymbols.length; j++) {
                if(allSymbols[j] === currencyPrice.currencyCodeFrom) {
                    symbolFromFound = true;
                }

                if(allSymbols[j] === currencyPrice.currencyCodeTo) {
                    symbolToFound = true;
                }
            }

            if(!symbolFromFound) {
                allSymbols.push(currencyPrice.currencyCodeFrom);
            }

            if(!symbolToFound) {
                allSymbols.push(currencyPrice.currencyCodeTo);
            }
        }

        return allSymbols;
    }
    
}