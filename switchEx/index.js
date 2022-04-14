let distance = prompt('Qual a distância em anos-luz?')
let SI = prompt('Escolha a sigla da unidade de conversão: \n Parsec (pc) \n Unidade Astronômica (AU) \n Quilômetros (km)')

alert('Distância em Anos-luz: ' + distance + '\nConversão desejada: ' + SI)

switch(SI) {
    case 'pc':
        alert(distance * 0.306601 + ' pc')
    break
    case 'AU':
        alert(distance * 63241.1 + ' AU')
    break
    case 'km':
        alert(distance * 9.5 * Math.pow(10,12) + ' km')
    break
    default:
    alert('Não identificado')
}