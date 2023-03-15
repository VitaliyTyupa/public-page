describe('main page', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should open login page', () => {
    cy.get('[class="content"]').find('button').contains('Login').click();
    cy.location('pathname').should('eq', '/login');
    cy.get('app-log-in').should('exist');
  });

  it('should navigate to the gallery page', () => {
    cy.get('[class="content"]').find('button').contains('Gallery').click();
    cy.location('pathname').should('eq', '/gallery');
    cy.get('app-gallery').should('exist');
  });

  describe('login form', () => {
    beforeEach(() => {
      cy.visit('/login');
    })
    it('login form should exist jn login page', () => {
      cy.get('form').should('exist');
    });

    it('should login title be Login', () => {
      cy.get('mat-card-title').should('have.text', 'Login');
    })


    it('should get error when UserName is empty', () => {
      cy.get('[formcontrolname="userName"]').type('test@cy.com');
      cy.get('form').find('button').click();
      cy.contains('Username or password invalid');
      cy.get('mat-error').contains('You must enter a value').should('be.visible');
    });

    it('should login with name and password', () => {
      cy.get('[formcontrolname="userName"]').type('test@cy.com');
      cy.get('[formcontrolname="password"]').type('password');
      cy.get('form').find('button').click();
      cy.location('pathname').should('eq', '/gallery');
    });
  });
})
