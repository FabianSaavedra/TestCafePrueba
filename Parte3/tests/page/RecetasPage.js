import { Selector , t } from 'testcafe'

class RecetasPages {

    //boton de dificultad alta
    get dificultadAlta { return Selector("//div[@id='myDIV']//button[@value='3']"); }
    //receta de canela
    get recetaRollitosCanela { return Selector("//*[@id='divRecipes']/section/div/div[2]/div[2]"); }
    //atributos de la receta
    get azucar { return Selector("//*[@id='hero']/div/div/div[3]/div[2]/div[2]/p[3]"); }
    get canela { return Selector("//*[@id='hero']/div/div/div[3]/div[2]/div[2]/p[4]"); }


    async validaAzucar() {
        await t.
            this.azucar.textContent().
            contains("azúcar rubia")
    }

    async validarCanela() {
        await t.
            this.canela.textContent().contains('canela')
    }

    async clickDificil() {
        await t.
            click(this.dificultadAlta)

    }

    async clickRecetaCanela() {
        await t.
            click(this.recetaRollitosCanela)

    }
}


export default new RecetasPages();



