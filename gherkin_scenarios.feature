
# Gherkin Scenarios for "Mark as Favorite" Feature

## Skenario 1: Ubah Bahasa Menjadi Bahasa Indonesia
Feature: Change language to Indonesian
  Scenario: Change the interface language to Indonesian
    Given the user is on the TMDb website
    When the user navigates to language settings
    And the user selects "Bahasa Indonesia" from the list
    Then the interface should change to Indonesian
    And all buttons, menus, and labels should be displayed in Indonesian

## Skenario 2: User Hanya Bisa Melakukan "Mark as Favorite" Ketika Dia Sudah Login
Feature: Restrict marking as favorite to logged-in users
  Scenario: Prevent marking a movie as favorite without login
    Given the user is not logged in
    When the user tries to mark a movie as favorite
    Then the system should prompt the user to log in

  Scenario: Allow marking a movie as favorite when logged in
    Given the user is logged in
    When the user marks a movie as favorite
    Then the movie should be added to the user's favorite list

## Skenario 3: Film Tersimpan di Bagian "Favorite Movies" Setelah Diberi Tanda "Mark as Favorite"
Feature: Mark a movie as favorite
  Scenario: Movie should appear in favorite list after marking
    Given the user is logged in
    When the user marks a movie as favorite
    Then the movie should appear in the user's favorite movies section

## Skenario 4: User Bisa Memfavoritkan Lebih dari 1 Movie dan Validasi Hasilnya
Feature: Mark multiple movies as favorite
  Scenario: User should be able to add multiple movies to favorites
    Given the user is logged in
    When the user marks two or more movies as favorite
    Then all selected movies should appear in the user's favorite list

## Skenario 5: User Bisa Menghapus Movie dari Daftar Favorite Movies di Favorite List
Feature: Remove a movie from the favorite list
  Scenario: User can remove a movie from their favorite list
    Given the user has a movie in their favorite list
    When the user removes the movie from the favorite list
    Then the movie should no longer appear in the favorite list

## Skenario 6: User Bisa Mengurutkan / Ordering Daftar Favorite Movies
Feature: Sort favorite movies
  Scenario: Sort favorite movies by release date
    Given the user has multiple favorite movies
    When the user sorts the favorite movies by release date
    Then the movies should be displayed in ascending or descending order by date

  Scenario: Sort favorite movies alphabetically
    Given the user has multiple favorite movies
    When the user sorts the favorite movies alphabetically
    Then the movies should be displayed in alphabetical order

## Skenario 7: Ubah Kembali ke Bahasa Inggris dan Lakukan Regresi Test
Feature: Change language back to English and perform regression testing
  Scenario: Switch interface back to English
    Given the interface is in Indonesian
    When the user navigates to language settings
    And the user selects "English" from the list
    Then the interface should change back to English

  Scenario: Perform regression tests after language change
    Given the interface is in English
    When the user performs actions related to marking a movie as favorite, removing a movie from the favorite list, and sorting
    Then all actions should behave as expected without any errors

## Tambahan Pengujian untuk Regresi
Feature: Regression testing after language change
  Scenario: Ensure all functionalities work correctly after changing language
    Given the user has switched the language back to English
    When the user marks a movie as favorite
    And the user removes a movie from the favorite list
    And the user sorts the favorite list
    Then all functionalities should behave as expected without errors
