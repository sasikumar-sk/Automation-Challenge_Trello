describe('Trello Automation', () => {
  beforeEach(() => {

    cy.viewport(1200, 760);
    cy.visit('https://trello.com/login'); // Landing the Trello login page

    // Log in using environment variables for credentials
    cy.get('#username').type(Cypress.env('username'));
    cy.get('button[type="submit"]').click();
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();
    cy.wait(20000);
    cy.get('.EGjNp3D4jt2GM7').contains(Cypress.env('boardName')).should('be.visible').click();
  });

  it('Add and verify a new card', () => {
    cy.visit('https://trello.com/b/6MQxpoEl/my-trello-board'); 
    //add a card button
    cy.get('[data-list-id="6800bfae3ab9931e60298988"] > [data-testid="list"] > [data-testid="list-footer"] > [data-testid="list-add-card-button"]')
      .should('be.visible').click();

    // Enter the card title
    cy.get('[data-testid="list-card-composer-textarea"]')
      .should('be.visible')
      .type(Cypress.env('cardTitle'));

    // Assert the value was typed correctly
    cy.get('textarea[placeholder="Enter a title or paste a link"]')
      .should('have.value', (Cypress.env('cardTitle')));
    cy.get('[data-testid="list-card-composer-add-card-button"]').click();
 
    // Assert that the card was added
    cy.contains(Cypress.env('cardTitle')).should('exist');
    cy.get('.amUfYqLTZOvGsn').should('be.visible');

    cy.contains('a', 'Test card event-1').click();

    //cy.get('.amUfYqLTZOvGsn.FOAGIKgFwAdtpQ.xY6NBEQos8kXPJ').eq(0).click();

   // Verify the card modal is open
   cy.wait(20000);
   cy.get("textarea[aria-label='Test card event-1']").should('contain',Cypress.env('cardTitle'));
   
    cy.get('.xjFudI2rOfHcKY', { timeout: 10000 })
      .should('be.visible')
      .and('contain', Cypress.env('cardTitle'));
    cy.get('.xjFudI2rOfHcKY').should('have.class', 'xjFudI2rOfHcKY'); 
    cy.get('.xjFudI2rOfHcKY').should('contain', Cypress.env('cardTitle'));
    cy.screenshot();
    cy.log('Card Modal opened successfully');

    cy.get('.X8WOA764yXoFYj', { timeout: 10000 })
      .invoke('text')
      .should('include', 'Sasikumar B added this card to Today')


    // Archive
    cy.get('[data-testid="card-back-archive-button"]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    //Delete the card by using delete button on card detail
    cy.get('[data-testid="card-back-delete-card-button"]').click();
    cy.get('button[data-testid="popover-confirm-button"]').click({ force: true });


    cy.contains(Cypress.env('cardTitle')).should('not.exist');

  });
});


Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the error message for debugging purposes
  console.error('Uncaught exception:', err.message);

  // Return false to prevent Cypress from failing the test
  return false;
});
