Feature:Sucursales

@Nataniel
Scenario: Validar que la receta de canela traiga azucar rubia y canela, sucursal nataniel.
Given logueamos desde google
When estamos en google buscamos tottus sucursales nataniel
Then damos click en tottus nataniel
And una vez dentro de la pagina presionamos en recetas y mas
When aparezcan las recetas, seleccionamos dificultad alta
And seleccionamos la receta de rollitos de canela
Then validamos que tenga azúcar rubia
And validamos que tenga canela en polvo