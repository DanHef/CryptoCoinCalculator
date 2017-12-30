"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoinPortfolioItem = (function () {
    function CoinPortfolioItem() {
        this.quantity = 0;
    }
    CoinPortfolioItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    CoinPortfolioItem.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    CoinPortfolioItem.prototype.getPortfolioName = function () {
        return this.portfolioName;
    };
    CoinPortfolioItem.prototype.setPortfolioName = function (portfolioName) {
        this.portfolioName = portfolioName;
    };
    CoinPortfolioItem.prototype.getPortfolioItemName = function () {
        return this.portfolioItemName;
    };
    CoinPortfolioItem.prototype.setPortfolioItemName = function (portfolioItemName) {
        this.portfolioItemName = portfolioItemName;
    };
    CoinPortfolioItem.prototype.getPortfolioItemDescription = function () {
        return this.portfolioItemDescription;
    };
    CoinPortfolioItem.prototype.setPortfolioItemDescription = function (portfolioItemDescription) {
        this.portfolioItemDescription = portfolioItemDescription;
    };
    return CoinPortfolioItem;
}());
exports.CoinPortfolioItem = CoinPortfolioItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29pblBvcnRmb2xpb0l0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb2luUG9ydGZvbGlvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBTUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUdELDRDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELGdEQUFvQixHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVELGdEQUFvQixHQUFwQixVQUFxQixpQkFBeUI7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7SUFFRCx1REFBMkIsR0FBM0I7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3pDLENBQUM7SUFFRCx1REFBMkIsR0FBM0IsVUFBNEIsd0JBQWdDO1FBQ3hELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2luUG9ydGZvbGlvSXRlbSB7XG4gICAgcHJpdmF0ZSBwb3J0Zm9saW9OYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3J0Zm9saW9JdGVtTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9ydGZvbGlvSXRlbURlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBxdWFudGl0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgIH1cblxuICAgIGdldFF1YW50aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWFudGl0eTtcbiAgICB9XG5cbiAgICBzZXRRdWFudGl0eShxdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICB9XG5cblxuICAgIGdldFBvcnRmb2xpb05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcnRmb2xpb05hbWU7XG4gICAgfVxuXG4gICAgc2V0UG9ydGZvbGlvTmFtZShwb3J0Zm9saW9OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3J0Zm9saW9OYW1lID0gcG9ydGZvbGlvTmFtZTtcbiAgICB9XG5cbiAgICBnZXRQb3J0Zm9saW9JdGVtTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9ydGZvbGlvSXRlbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0UG9ydGZvbGlvSXRlbU5hbWUocG9ydGZvbGlvSXRlbU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvcnRmb2xpb0l0ZW1OYW1lID0gcG9ydGZvbGlvSXRlbU5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UG9ydGZvbGlvSXRlbURlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3J0Zm9saW9JdGVtRGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0UG9ydGZvbGlvSXRlbURlc2NyaXB0aW9uKHBvcnRmb2xpb0l0ZW1EZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9ydGZvbGlvSXRlbURlc2NyaXB0aW9uID0gcG9ydGZvbGlvSXRlbURlc2NyaXB0aW9uO1xuICAgIH1cbn0iXX0=