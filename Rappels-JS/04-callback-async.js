setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Dans quel ordre s'affichent ces lettres :
// 1 / A B C D E
// 2 / E B A D C
// 3 / B E A D C
