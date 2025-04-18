describe('Trello Automation', () => {
  beforeEach(() => {
    cy.viewport(1200, 760);
    cy.visit('https://trello.com/login');

    // Log in using environment variables for credentials
    cy.get('#username').type(Cypress.env('username'));
    cy.get('button[type="submit"]').click();
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();

    cy.wait(20000);
    cy.contains(Cypress.env('boardName')).should('be.visible').click();
  });

  it('Add and verify a new card', () => {
    cy.visit('https://trello.com/b/6MQxpoEl/my-trello-board');

    // Add a new card
    cy.get('[data-list-id="6800bfae3ab9931e60298988"] [data-testid="list-add-card-button"]')
      .should('be.visible')
      .click();

    cy.get('[data-testid="list-card-composer-textarea"]')
      .should('be.visible')
      .type(Cypress.env('cardTitle'));

    cy.get('[data-testid="list-card-composer-add-card-button"]').click();

    // Verify the card is added
    cy.contains(Cypress.env('cardTitle')).should('exist');

    // Open the card modal
    cy.get('.amUfYqLTZOvGsn').should('be.visible');
    cy.get('.WC6fBZ3Z4IYlvP').click();
    cy.get('.FOAGIKgFwAdtpQ.xY6NBEQos8kXPJ').click();
    cy.get('[data-testid="quick-card-editor-button"]').click();
    cy.wait(1000);
    cy.get('[data-testid="quick-card-editor-open-card"]').click();

    // Wait for the modal to open  
    cy.get('.xjFudI2rOfHcKY', { timeout: 10000 })
      .should('be.visible')
      .and('contain', Cypress.env('cardTitle'));

    //Take screenshot of the empty new card modal
    cy.screenshot();
    cy.log('Card Modal opened successfully'); 

    cy.get('.X8WOA764yXoFYj', { timeout: 10000 })
      .invoke('text')
      .should('include', 'Sasikumar B added this card to Today');

    // Add description text
    cy.get('#ak-editor-textarea').type('Test description');
    cy.get('[data-testid="description-save-button"]').click();
    cy.get('p[data-renderer-start-pos="1"]').should('contain', 'Test description');

    // Add member deom the dropdown
    cy.get('[data-testid="card-back-members-button"]').click();
    cy.get('[data-testid="choose-member-item-add-member-button"]').click();

    // Select the from date picker 
    cy.get('[data-testid="card-back-due-date-button"]').click();
    cy.get('[data-testid="save-date-button"]').click();

    // Fill Priority custom field
    cy.get('[data-testid="card-back-custom-field-badge-select--control"]').eq(0).click();
    cy.get('div.customFieldSelect__menu-portal div:nth-of-type(2) li').click({ force: true });

    // Add status
    cy.get('[data-testid="card-back-custom-field-badge-select--control"]').eq(1).click();
    cy.get('[data-testid="card-back-custom-field-badge-select--option-1"] > li').click();

    //check Archive buttion
    cy.get('[data-testid="card-back-archive-button"]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Check the Delete button visible 
    cy.get('[data-testid="card-back-delete-card-button"]').should('be.visible')  

    //Add comment to the card
    cy.get('input[placeholder="Write a comment…"]').click().type('Test comment');
    cy.get('[data-testid="card-back-comment-save-button"]').click();
    cy.get('p[data-renderer-start-pos="1"]').should('contain', 'Test comment');

     //Take screenshot of the empty new card modal
     cy.screenshot();
     cy.log('Card updaed successfully'); 
     cy.get('button[aria-label="Close dialog"]').click();
  
    //Archive card using quick action
    cy.get('.FOAGIKgFwAdtpQ.xY6NBEQos8kXPJ').click();
    cy.get('[data-testid="quick-card-editor-button"]').click();
    cy.wait(1000);
    cy.get('[button[data-testid="quick-card-editor-archive"]').click();
    cy.contains(Cypress.env('cardTitle')).should('not.exist');
  });
});

// Ignore any uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err.message);
  return false;
});
