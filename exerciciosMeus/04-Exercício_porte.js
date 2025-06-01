/*const peso = 10;
switch (true) {
    case peso <= 10:
        console.log('P');
        break;
    case peso <= 20:
        console.log('M');
        break;
    case peso <= 30:
        console.log('G');
        break;
    default:
        console.log('ND');
}
*/
/*
Classificador de porte automático
Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- Até 10kg -> Pequeno; acima disso -> Médio
Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado
Extra: transforme a lógica em uma função (da forma que conseguir)
*/

const nome = `Filo`
const peso = 5.5
const porte = peso <= 10 ? `pequeno` : `médio`

console.log (`-------------------`)
console.log(`Nome: ${ nome }`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log(`-----------`)

//ou
function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? `pequeno` : `médio`

console.log (`-------------------`)
console.log(`Nome: ${ nome }`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log(`-----------`)
}
