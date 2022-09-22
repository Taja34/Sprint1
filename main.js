const users = [
    {

        CEDULA: 10,
        CONTRASEÑA: 123,
        USUARIO: 1
    }

    ,
    {

        CEDULA: 11,
        CONTRASEÑA: 124,
        USUARIO: 1

    }]
const users2 = [
    {

        CEDULA: 12,
        CONTRASEÑA: 125,
        USUARIO: 2
    },
    {

        CEDULA: 13,
        CONTRASEÑA: 126,
        USUARIO: 2

    },
    {

        CEDULA: 14,
        CONTRASEÑA: 127,
        USUARIO: 2

    }

]


let = billetes =
{

    billetede5: 'de5',
    cantidadd5: 0,
    valorde5: 0,
    billetede10: 'de10',
    cantidadd10: 0,
    valorde10: 0,
    billetede20: 'de20',
    cantidadd20: 0,
    valorde20: 0,
    billetede50: 'de50',
    cantidadd50: 0,
    valorde50: 0,
    billetede100: 'de100',
    cantidadd100: 0,
    valorde100: 0,
    valorFinal: 0,

}
console.log(billetes.billetede5)
let entrada = () => {
    let usuario = Number(prompt('1.Administrar\n2.Retirar'))

    if (usuario === 1) {
        let cedula = Number(prompt('Deme su cedula'))
        let = contraseña = Number(prompt('Deme su contraseña'))
        let resultadoContraseña = users.find(users => users.CONTRASEÑA === contraseña);
        let resultadoCedula = users.find(users => users.CEDULA === cedula);
        if (resultadoContraseña && resultadoCedula) {
            alert('Bienvenido')
            let de5 = Number(prompt('Cuantos billetes de 5 mil'));

            billetes.cantidadd5 = Number(de5 + billetes.cantidadd5)
           
            console.log(billetes)
            billetes.valorde5 = Number(5000 * billetes.cantidadd5)

            let de10 = Number(prompt('Cuantos billetes de 10 mil'));
            billetes.cantidadd10 = de10 + billetes.cantidadd10


            console.log(billetes)
            billetes.valorde10 = Number((10000 * billetes.cantidadd10))

            let de20 = Number(prompt('Cuantos billetes de 20 mil'));
            billetes.cantidadd20 = de20 + billetes.cantidadd20
            billetes.valorde20 = Number((20000 * billetes.cantidadd20))


            let de50 = Number(prompt('Cuantos billetes de 50 mil'));
            billetes.cantidadd50 = de50 + billetes.cantidadd50

            console.log(billetes)
            billetes.valorde50 = Number((50000 * billetes.cantidadd50))

            let de100 = Number(prompt('Cuantos billetes de 100 mil'));
            billetes.cantidadd100 = de100 + billetes.cantidadd100

            billetes.valorde100 = Number((100000 * billetes.cantidadd100))
            console.log(billetes)
            billetes.valorFinal = Number((billetes.valorde5 + billetes.valorde10 + billetes.valorde20 + billetes.valorde50 + billetes.valorde100));


            alert(billetes.valorFinal);

            console.log(billetes.valorFinal)
            entrada()
        }
        else {
            alert('No existe, intente de nuevo')
            entrada()
        }
    }
    else if (usuario === 2) {
        alert("El valor maximo a retirar es : " + billetes.valorFinal)
        let cedula = Number(prompt('Deme su cedula'))
        let = contraseña = Number(prompt('Deme su contraseña'))
        let resultadoContraseña = users2.find(users2 => users2.CONTRASEÑA === contraseña);
        let resultadoCedula = users2.find(users2 => users2.CEDULA === cedula);
        if (resultadoContraseña && resultadoCedula) {
            alert('Bienvenido')
            let valorRetirar = Number(prompt('Cuanto desea retirar'))
            if (valorRetirar > billetes.valorFinal) {
                alert('El valor solicitado no esta disponible, el cajero esta en mantenimiento, vuelva pronto')
                entrada()
            }
            if (valorRetirar <= billetes.valorFinal) {
                if(valorRetirar < 100000  && billetes.cantidadd50 > 0){
                    alert(`Entrego 50000`)
                    billetes.cantidadd50 - 1
                    console.log(billetes.cantidadd50)
                    

                }
                else if(valorRetirar < 200000  && billetes.cantidadd100 > 1){
                    alert(`Entrego 100000`)
                    billetes.cantidadd100 - 1
                    console.log(billetes.cantidadd100)

                   
                }

                else if (valorRetirar >= billetes.valorde100 && valorRetirar < billetes.valorde100 + billetes.valorde50) {
                    alert(`Entrego : ${ billetes.valorde100}`)
                    billetes.valorFinal = billetes.valorFinal - billetes.valorde100
                    billetes.cantidadd100 = 0
                    billetes.valorde100 = 0
                    console.log(`quedan ${billetes.cantidadd100} billetes de 100 Mil con valor total de ${billetes.valorde100}`)
                    console.log('en el cajero queda un total de: ' + billetes.valorFinal)

                }
               else if (valorRetirar >= billetes.valorde100 + billetes.valorde50 && valorRetirar < billetes.valorde100 + billetes.valorde50 + billetes.valorde20) {
                    alert(`Entrego : ${  billetes.valorde100 + billetes.valorde50}`)
                    billetes.valorFinal = billetes.valorFinal - (billetes.valorde100 + billetes.valorde50)
                    billetes.cantidadd100 = 0
                    billetes.valorde100 = 0
                    billetes.cantidadd50 = 0
                    billetes.valorde50 = 0

                    console.log(`quedan ${billetes.cantidadd100} billetes de 100 Mil con valor total de ${billetes.valorde100}`)
                    console.log(`quedan ${billetes.cantidadd50} billetes de 50 Mil con valor total de ${billetes.valorde50}`)

                    console.log('en el cajero queda un total de: ' + billetes.valorFinal)
                }

                else if (valorRetirar >= billetes.valorde100 + billetes.valorde50 + billetes.valorde20 && valorRetirar < billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10) {
                    alert(`Entrego : ${  billetes.valorde100 + billetes.valorde50 + billetes.valorde20}`)
                    billetes.valorFinal = billetes.valorFinal - (billetes.valorde100 + billetes.valorde50 + billetes.valorde20)
                    billetes.cantidadd100 = 0
                    billetes.valorde100 = 0
                    billetes.cantidadd50 = 0
                    billetes.valorde50 = 0
                    billetes.cantidadd20 = 0
                    billetes.valorde20 = 0


                    console.log(`quedan ${billetes.cantidadd100} billetes de 100 Mil con valor total de ${billetes.valorde100}`)
                    console.log(`quedan ${billetes.cantidadd50} billetes de 50 Mil con valor total de ${billetes.valorde50}`)
                    console.log(`quedan ${billetes.cantidadd20} billetes de 20 Mil con valor total de ${billetes.valorde20}`)

                    console.log('en el cajero queda un total de: ' + billetes.valorFinal)

                }
                else if (valorRetirar >= billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10 && valorRetirar < billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10 + billetes.valorde5) {
                    alert(`Entrego : ${  billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10}`)
                    billetes.valorFinal = billetes.valorFinal - (billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10)
                    billetes.cantidadd100 = 0
                    billetes.valorde100 = 0
                    billetes.cantidadd50 = 0
                    billetes.valorde50 = 0
                    billetes.cantidadd20 = 0
                    billetes.valorde20 = 0
                    billetes.cantidadd10 = 0
                    billetes.valorde10 = 0

                    console.log(`quedan ${billetes.cantidadd100} billetes de 100 Mil con valor total de ${billetes.valorde100}`)
                    console.log(`quedan ${billetes.cantidadd50} billetes de 50 Mil con valor total de ${billetes.valorde50}`)
                    console.log(`quedan ${billetes.cantidadd20} billetes de 20 Mil con valor total de ${billetes.valorde20}`)
                    console.log(`quedan ${billetes.cantidadd10} billetes de 10 Mil con valor total de ${billetes.valorde10}`)

                    console.log('en el cajero queda un total de: ' + billetes.valorFinal)

                }
                else if (valorRetirar == billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10 + billetes.valorde5) {
                    alert(`Entrego : ${  billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10 + billetes.valorde5}`)
                    billetes.valorFinal = billetes.valorFinal - (billetes.valorde100 + billetes.valorde50 + billetes.valorde20 + billetes.valorde10 + billetes.valorde5)
                    billetes.cantidadd100 = 0
                    billetes.valorde100 = 0
                    billetes.cantidadd50 = 0
                    billetes.valorde50 = 0
                    billetes.cantidadd20 = 0
                    billetes.valorde20 = 0
                    billetes.cantidadd10 = 0
                    billetes.valorde10 = 0
                    billetes.valorde5 = 0
                    billetes.cantidadd5 = 0

                    console.log(`quedan ${billetes.cantidadd100} billetes de 100 Mil con valor total de ${billetes.valorde100}`)
                    console.log(`quedan ${billetes.cantidadd50} billetes de 50 Mil con valor total de ${billetes.valorde50}`)
                    console.log(`quedan ${billetes.cantidadd20} billetes de 20 Mil con valor total de ${billetes.valorde20}`)
                    console.log(`quedan ${billetes.cantidadd10} billetes de 10 Mil con valor total de ${billetes.valorde10}`)
                    console.log(`quedan ${billetes.cantidadd5} billetes de 5 Mil con valor total de ${billetes.valorde5}`)

                    console.log('en el cajero queda un total de: ' + billetes.valorFinal)

                }
                alert('Tu dinero esta siendo procesado')
                alert('Ten un buen dia ')
                entrada()


            }
            else {
                alert('No existe, intente de nuevo')
                entrada()
            }

        }
        else {alert('No existe, intente de nuevo')
        entrada() 
             }
    }
}
entrada()
entrada()
























