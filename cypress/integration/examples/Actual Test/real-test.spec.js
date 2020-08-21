describe('Pizza Delivery Website', () => {
    describe('Inputs and Submit button', () => {
        it('can navigate to http://localhost:3000/order', () => {
            cy.visit('http://localhost:3000/order')
            cy.url().should('include', 'localhost')
        })
        it("Can put something in the 'Username' input", () => {
            cy.get('input[name="name"]')
                .type("Big Time Barry")
                .should('have.value', "Big Time Barry")
        })
        it("Can check multiple toppings", () => {
            cy.get('input[type="checkbox"]').check()
            cy.get('input[type="checkbox"]').check()

        })

        it('Can fill out size form', () => {
            cy.get('select[name="size"]')
                .select('Large')
        })

        it('Can submit form', () => {
            cy.get('#submitBtn').click()
        })

    })
})