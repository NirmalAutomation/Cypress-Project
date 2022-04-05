describe("Login into application", () => {
    it("login testing", () => {
        cy.visit('https://amazon.in');

        cy.get('#twotabsearchtextbox').type('gopro').then(() => {

            cy.wait(1000);

            cy.get('#nav-search-submit-button').click();    
        })
        
    })
})