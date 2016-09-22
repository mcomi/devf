var squareIt = function (rect) {
    if (rect === void 0) { rect = { h: number, w: number }; }
    return number;
};
var rectA = { h: 7 };
var rectB = { h: 7, w: 12 };
squareIt = function (rect) {
    if (rect.w !== undefined) {
        return rect.h * rect.w;
    }
    return rect.h * rect.h;
};
console.log(squareIt(rectA));
console.log(squareIt(rectB));
// objects
var rectangle = {
    h: 10,
    w: 20,
    calcArea: function () {
        return this.h * this.w;
    }
};
console.log('Rect area: ' + rectangle.calcArea());
var p = {
    favoriteMovie: "Lord of the Rings",
    name: "Uriel",
    age: 40,
    kids: 1,
    makeYounger: function (years) {
        this.age -= years;
    },
    greet: function (msg) {
        return msg + ', ' + this.name;
    }
};
p.makeYounger(10);
var newAge = p.age;
console.log(newAge);
var msg = p.greet('Good day to you');
console.log(msg);
