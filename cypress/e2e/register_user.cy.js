describe("Registro de usuario", () => {
  it("completa el formulario de registro correctamente", () => {
    cy.viewport(1200, 800);

    cy.visit("http://localhost:3000/register");

    cy.get("#name").type("Usuario de Prueba");
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#password").type("12345678");
    cy.get("#password_confirmation").type("12345678");
    cy.get("#position").type("Cargo de Prueba");
    cy.get('#profile_type').invoke('val', 'Empresa');

    cy.get("#country").type("Nombre del país");
    cy.get("#business_name").type("Nombre de la empresa");
    cy.get("#type_subscription").invoke('val', 'profesional');

    cy.get("#agree").check();

    cy.get('button[type="submit"]').click();
  });
});
