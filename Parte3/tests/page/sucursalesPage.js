import { Selector, t } from 'testcafe'

class SucursalesPages {

    //boton recetas y mas
    get recetasYMas { return Selector("//*[@id='new_tottus_nav_cliente_recetas']") }


    async ClickEnRecetas() {

        await t.
            click(this.recetasYMas);

    }

}

export default new SucursalesPages();