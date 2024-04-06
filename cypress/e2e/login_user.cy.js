describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('zohra@mail.com')
    cy.get('#password').type('12345678')
    cy.get('#agree').check()
    cy.get('button[type="submit"]').click();
    cy.get('form').submit();

  })
})