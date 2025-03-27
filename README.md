# Character-voting-app-project
# Character Voting App

## Overview

The **Character Voting App** is an interactive web application that allows users to vote for their favorite characters, view character details, and add new characters to the list. This app uses HTML, CSS, and JavaScript for the front-end and integrates with a **JSON server** to manage the character data, such as names, images, and votes.

Key features include:
- Displaying a list of characters.
- Viewing detailed information for each character.
- Voting for characters and updating their vote count in real-time.
- Resetting votes for all characters.
- Adding new characters via a form.

## Features

### 1. **Display Characters**
   - The app fetches and displays a list of characters from a JSON server.
   - Each character is clickable, revealing detailed information including their name, image, and vote count.

### 2. **Vote for Characters**
   - Users can vote for characters by entering a number in an input box and submitting it.
   - The vote count is updated in real-time, both on the server and in the UI.

### 3. **Reset Votes**
   - The app provides a button to reset votes for all characters, setting their vote count back to zero.

### 4. **Add New Characters**
   - Users can add new characters by submitting a form with the character's name, image URL, and initial votes.

## Project Structure

anime-characters/
├── assets/                  # Folder for static assets (images, etc.)
│   └── dummy.gif            # Placeholder image for characters
├── src/                     # JavaScript files
│   └── index.js             # Main JavaScript logic to fetch and display characters
├── style.css                # The stylesheet for your project
├── index.html               # The main HTML file
└── package.json             # If you're using Node.js, to handle dependencies

Breakdown of Files and Directories:
1. index.html:
This is the main HTML file where the content of the page is structured.

It contains the layout, including the character bar and character details.

It also links to the external JavaScript file (src/index.js) and the external CSS file (style.css).

2. assets/:
This folder contains static assets like images, icons, etc.

In this case, it has a dummy.gif as a placeholder for character images, which you will dynamically change through JavaScript when character details are displayed.

3. src/index.js:
Contains the JavaScript logic for fetching characters from the server, displaying them on the page, handling the voting functionality, and resetting votes.

Handles the interaction between the frontend and the backend via HTTP requests (using the Fetch API).

This script interacts with the DOM to dynamically update character data and manage vote counts.

4. style.css:
The CSS file defines the visual styles of your project.

Includes styles for the character bar, vote input fields, buttons, and overall page structure.

Also contains styles for hover effects and responsive layout adjustments.

5. package.json (Optional):
If you're using Node.js, this file will manage your dependencies and scripts.

If you're using a local server or any build tools (e.g., Webpack), you would include them in package.json