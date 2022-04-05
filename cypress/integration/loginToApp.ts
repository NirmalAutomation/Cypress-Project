describe("Login into application", () => {
    it("login testing", () => {
        cy.visit('https://amazon.in');

        cy.get('#twotabsearchtextbox').type('gopro').then(() => {

            cy.get('#nav-search-submit-button').click();    
        })

        cy.wait(1000);
        
    })
})