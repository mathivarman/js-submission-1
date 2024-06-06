function applyDiscount(price, discountPercentage = 10) {
    const discount = (price * discountPercentage) / 100;
    return price - discount;
}
console.log(applyDiscount(100, 30));
