Feature: Browserstack test

  Scenario: Poder agregar un producto al carro
    Given Dirigirse a bstackdemo website
    When Añadir producto al carrito
    Then Verificar que vemos el producto en el carro
