console.log('Hello world');
var names = ['Romain', 'Julien', 'Eric', 'Jean'];
/**
 *
 * @param {string} name
 * @returns
 */
function hello(name) {
    return "hello ".concat(name.toUpperCase());
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(hello(n));
}
