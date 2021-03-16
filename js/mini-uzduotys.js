// Kintamuju inicijavimas
// 1.
const pirmasSkaicius = 2;
console.log(pirmasSkaicius);
const antrasSkaicius = 5;
console.log(antrasSkaicius);
const treciasSkaicius = 55;
console.log(treciasSkaicius);

// 2.
const vardas = "Audrius";
console.log(vardas);
const horoskopas = "Vezys";
console.log(horoskopas);
const miestas = "Alytus";
console.log(miestas);

// 3.
const pirmas_skaiciu_sarasas = [1, 3, 6, 7, 8];
console.log(pirmas_skaiciu_sarasas);
const antras_skaiciu_sarasas = [5, 6, 2, 11, 1];
console.log(antras_skaiciu_sarasas);
const trecias_skaiciu_sarasas = [55, 43, 22, 23, 55];
console.log(trecias_skaiciu_sarasas);

// 4.
const pirmas_sarasas = ['Labas', 'kaip', 'tau', 'sekasi', '?'];
console.log(pirmas_sarasas);
const antras_sarasas = ['Labas', 'man', 'gerai', 'o kaip', 'tau?'];
console.log(antras_sarasas);
const trecias_sarasas = ['Lietuva!', 'Labas', 'rytas', 'tau', 'sakau!'];
console.log(trecias_sarasas);

//Veiksmai su kintamaisiais
// 1.
const suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log(suma)

// 2.
const zodziuJunginys = vardas + ' ' + horoskopas + ' ' + miestas;
console.log(zodziuJunginys);
 
// 3.
const pirmo_saraso_verte = pirmas_skaiciu_sarasas[0] - pirmas_skaiciu_sarasas[1] + pirmas_skaiciu_sarasas[2] - pirmas_skaiciu_sarasas[3] + pirmas_skaiciu_sarasas[4];
console.log(pirmo_saraso_verte);
const antro_saraso_verte = antras_skaiciu_sarasas[0] - antras_skaiciu_sarasas[1] + antras_skaiciu_sarasas[2] - antras_skaiciu_sarasas[3] + antras_skaiciu_sarasas[4];
console.log(antro_saraso_verte);
const trecio_saraso_verte = trecias_skaiciu_sarasas[0] - trecias_skaiciu_sarasas[1] + trecias_skaiciu_sarasas[2] - trecias_skaiciu_sarasas[3] + trecias_skaiciu_sarasas[4];
console.log(trecio_saraso_verte);
console.log('------');
//ciklo for panaudojimas

//a
const nuoa = 0;
const ikia = 0;
let skaiciusa = 0;
for (let i = nuoa; i <= ikia ; i++) {
    skaiciusa += i;
}
const atsa = `Intervale nuo ${nuoa} iki ${ikia} atsakymas yra ${skaiciusa}`;
console.log(atsa);
//b
const nuob = 0;
const ikib = 4;
let skaiciusb = 0;
for (let i = nuob; i <= ikib ; i++) {
    skaiciusb += i;
}
const atsb = `Intervale nuo ${nuob} iki ${ikib} atsakymas yra ${skaiciusb}`;
console.log(atsb);
//c
const nuoc = 0;
const ikic = 100;
let skaiciusc = 0;
for (let i = nuoc; i <= ikic ; i++) {
    skaiciusc += i;
}
const atsc = `Intervale nuo ${nuoc} iki ${ikic} atsakymas yra ${skaiciusc}`;
console.log(atsc);
//d
const nuod = 574;
const ikid = 815;
let skaiciusd = 0;
for (let i = nuod; i <= ikid ; i++) {
    skaiciusd += i;
}
const atsd = `Intervale nuo ${nuod} iki ${ikid} atsakymas yra ${skaiciusd}`;
console.log(atsd);
//e
const nuoe = -50;
const ikie = 50;
let skaiciuse = 0;
for (let i = nuoe; i <= ikie ; i++) {
    skaiciuse += i;
}
const atse = `Intervale nuo ${nuoe} iki ${ikie} atsakymas yra ${skaiciuse}`;
console.log(atse);
//f
const nuof = -70;
const ikif = 30;
let skaiciusf = 0;
for (let i = nuof; i <= ikif ; i++) {
    skaiciusf += i;
}
const atsf = `Intervale nuo ${nuof} iki ${ikif} atsakymas yra ${skaiciusf}`;
console.log(atsf);
console.log('------');

let tekstasABCDEF = '';
let abcdef = 'abcdef';

for (let i = abcdef.length-1; i >= 0 ; i--) {
    tekstasABCDEF += abcdef[i];    
}
console.log(`${abcdef} --> ${tekstasABCDEF}`);
///////////////////////////////////////////////////
const nuo = 1;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0){
        kiekis++;
    }
}
const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`
console.log(ats);



