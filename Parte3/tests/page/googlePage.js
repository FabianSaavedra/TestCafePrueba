import { Selector,t } from 'testcafe'

class GooglePages {
    //Elementos web

    //barra de busqueda google
    get buscadorGoogle() { return Selector("input.gLFyf"); }
    //Boton buscar google
    get btnBustarGoogle() { return Selector("//div[@class='FPdoLc tfB0Bf']//input[@class='gNO89b']"); }
    //sucursal nataniel
    get sucursalNataniel() { return Selector("h3.LC20lb"); }

    //Metodos

    //buscar en google la sucursal y presionar enter
    async buscarEnGoogle(sucur) {

        await t.
            typeText(buscadorGoogle, sucur).pressKey('enter')
    }

    //dar click en la sucursalr tottus nataniel que aparecen en el buscador
    async clickEnSucursalNataniel() {

        await t.
            click(this.sucursalNataniel)
            
    }
}

export default new GooglePages()

