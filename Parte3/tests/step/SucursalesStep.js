import GooglePage from '../tests/page/GooglePage'
import RecetasPage from '../tests/page/RecetasPage'
import SucursalesPage from '../tests/page/SucursalesPage'
import { When, Given, Then } from 'cucumber'
const createTestCafe = require('testcafe');
var t = require('testcafe').t;



    Given('logueamos desde google', function () {

        
        async function navigateURL() {
           
            t.navigateTo('www.google.com')

        };

        

    })

    When('estamos en google buscamos tottus sucursales nataniel', function () {

        
        GooglePage.buscarEnGoogle('sucursal tottus nataniel')

    })

    Then('damos click en tottus nataniel', function (string) {

       
        GooglePage.clickEnSucursalNataniel()

    })

    And('una vez dentro de la pagina presionamos en recetas y mas', function () {

        
        SucursalesPage.ClickEnRecetas()

    })

    When('aparezcan las recetas, seleccionamos dificultad alta', function () {

        
        RecetasPage.clickDificil()

    })

    And('seleccionamos la receta de rollitos de canela', function () {
       
        RecetasPage.clickRecetaCanela()

    })

    Then('validamos que tenga az�car rubia', function () {
        
        RecetasPage.validaAzucar()
    })


    And('validamos que tenga canela en polvo', function () {
        
        RecetasPage.validarCanela()

    })
