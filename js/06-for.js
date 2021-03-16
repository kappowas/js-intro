

/* zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
*/
//
for (let i = 3; i <= 7; i++) {
    console.log(i);
}
console.log('Ciklo pabaiga');
console.log('------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
for (let i = abc.length; i < 0; i++) {
     zodis += abc[i];
}
console.log(zodis)
