
// TMDb "Mark as Favorite" Testing using Cypress

describe('TMDb - Mark as Favorite', () => {

  // Scenario 1: Change language to Indonesian
  it('Should change the interface language to Indonesian', () => {
    cy.visit('https://www.themoviedb.org');
    cy.get('button[aria-label="Change Language"]').click();
    cy.contains('Bahasa Indonesia').click();
    cy.contains('Tandai sebagai Favorit').should('exist');
  });

  // Scenario 2: Prevent marking a movie as favorite when not logged in
  it('Should not allow marking as favorite when not logged in', () => {
    cy.visit('https://www.themoviedb.org');
    cy.get('.movie-card').first().find('.mark-favorite-button').click();
    cy.contains('Please login to mark as favorite').should('exist');
  });

  // Scenario 3: Allow marking a movie as favorite when logged in
  it('Should allow marking a movie as favorite when logged in', () => {
    cy.visit('https://www.themoviedb.org');
    cy.login(); // Assuming there's a custom command for logging in
    cy.get('.movie-card').first().find('.mark-favorite-button').click();
    cy.get('.favorite-movies').should('contain', 'Selected Movie Title');
  });

  // Scenario 4: User can mark more than one movie as favorite
  it('Should allow marking multiple movies as favorite', () => {
    cy.visit('https://www.themoviedb.org');
    cy.login();
    cy.get('.movie-card').eq(0).find('.mark-favorite-button').click();
    cy.get('.movie-card').eq(1).find('.mark-favorite-button').click();
    cy.get('.favorite-movies').should('contain', 'First Movie Title');
    cy.get('.favorite-movies').should('contain', 'Second Movie Title');
  });

  // Scenario 5: User can remove a movie from the favorite list
  it('Should allow removing a movie from the favorite list', () => {
    cy.visit('https://www.themoviedb.org');
    cy.login();
    cy.get('.movie-card').first().find('.mark-favorite-button').click();
    cy.get('.favorite-movies').find('.remove-button').click();
    cy.get('.favorite-movies').should('not.contain', 'Selected Movie Title');
  });

  // Scenario 6: User can sort their favorite movies
  it('Should allow sorting favorite movies', () => {
    cy.visit('https://www.themoviedb.org');
    cy.login();
    cy.get('.movie-card').eq(0).find('.mark-favorite-button').click();
    cy.get('.movie-card').eq(1).find('.mark-favorite-button').click();
    cy.get('.sort-options').select('By Release Date');
    cy.get('.favorite-movies').first().should('contain', 'Most Recent Movie');
  });

  // Scenario 7: Change language back to English and perform regression tests
  it('Should change the interface language back to English', () => {
    cy.visit('https://www.themoviedb.org');
    cy.get('button[aria-label="Change Language"]').click();
    cy.contains('English').click();
    cy.contains('Mark as Favorite').should('exist');
  });

  it('Should pass regression tests after language change', () => {
    cy.visit('https://www.themoviedb.org');
    cy.login();
    cy.get('.movie-card').first().find('.mark-favorite-button').click();
    cy.get('.favorite-movies').should('contain', 'Selected Movie Title');
    cy.get('.favorite-movies').find('.remove-button').click();
    cy.get('.favorite-movies').should('not.contain', 'Selected Movie Title');
  });

});
