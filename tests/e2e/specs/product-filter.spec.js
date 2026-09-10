describe('Filtro de productos', () => {
  it('permite filtrar productos por categoría', () => {
    cy.visit('/')

    cy.contains('Productos disponibles')
      .should('be.visible')

    cy.get('.product-card', { timeout: 10000 })
      .should('have.length', 20)

    cy.get('[data-cy="category-filter"]')
      .click()

    cy.contains('.v-list-item', 'electronics')
      .click()

    cy.get('.product-card')
      .should('have.length', 6)

    cy.get('.product-card')
      .each(($card) => {
        cy.wrap($card)
          .should('contain.text', 'electronics')
      })
  })
})