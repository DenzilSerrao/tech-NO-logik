# tech-NO-logik
Github Repo for Pixel Wizard held by SLIET

# Login Modal Project

This project implements a login modal that allows users to enter their credentials and dynamically updates the UI after successful login. It uses pure HTML, CSS, and JavaScript to achieve modal functionality, user session management, and dynamic content updates. 

## Features

- **Login Modal**: A modal window that appears for user login and closes after successful login.
- **Dynamic Welcome Message**: After login, the welcome message changes to "Welcome, [Username]".
- **Session Management**: User login data is stored in `sessionStorage`, keeping the user logged in across pages until they log out.
- **Modal Display Control**: The modal is shown only when the user is not logged in, preventing unnecessary login prompts.
- **Logout Functionality**: Allows the user to log out, clearing the session and resetting the UI.
- **Expandable Content Section**: Displays a preview of content with an option to "Read More" or "Read Less".

## Technologies Used

- **HTML**: Structure of the modal, form, and other elements.
- **CSS**: Styling for the modal, buttons, and login form, including custom padding, shadows, and responsive design.
- **JavaScript**: Modal control, form submission handling, session management, and dynamic content updates.

## Files

- `index.html`: Contains the main structure of the webpage including the modal, form, and welcome message.
- `styles.css`: Styles for the modal, login form, buttons, and other UI elements.
- `script.js`: Handles the logic for showing/hiding the modal, form submission, session management, and UI updates.

## Setup and Installation

To use this project:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/login-modal-project.git

## Usage

  -  When the page loads, the login modal will appear.
  -  Enter your username and password (you can set up further validation if needed).
  -  After successful login, the modal will close, and the welcome message will be updated to "Welcome, [Username]".
  -  If you navigate to another page within the project, the modal will not appear again unless you log out.
  -  Click the Logout button to reset the session, clearing the username and showing the login modal again upon reload.
  -  The Info page contains Details about the Platform and the College
  -  The Mentor cards con be cycled through using the arrow on either side.
  -  Clicking on the Mentor cards will direct you to the Booking website.
  -  On here you can Enter your details and the Mentor you want to book a Session with.
  -   

## Customization

  -  Modal Design: You can customize the look and feel of the modal by modifying the styles in styles.css.
  -  Form Fields: Add or remove fields from the login form by editing the HTML in index.html.
  -  Session Storage: The project uses sessionStorage to keep the user logged in. If you want the session to persist even after closing the browser, you can switch to localStorage.