/* 
Switch statement
switch() {cas, break, default}
*/
const gyvunai = 'suo';


switch (gyvunai) {
    case 'suo':
        console.log('Au Au');
        break;
    case 'cat':
        console.log('Miau Miau');
        break;
    default:
        console.log('Nezinomas gyvunas');
        break;
}

const day = 2;
const lygine = [2, 4, 6];
const nelygine = [1, 3, 5];
switch (day) {
    case lygine:
        console.log('lygine diena');
        break;
    case nelygine:
        console.log('nelygine');
        break;
}
