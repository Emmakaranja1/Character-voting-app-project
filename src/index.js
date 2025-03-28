//fetch and display list of characters
const renderCharacters = async () => {
    const url = 'http://localhost:3001/characters'; // URL of your JSON server
    try {
      const response = await fetch(url);
      const characters = await response.json();
      
      // Select the character bar div
      const characterBar = document.getElementById('character-bar');
      
      // Clear any existing characters before appending new ones
      characterBar.innerHTML = '';
  
      // Loop through the characters and create a span for each one
      characters.forEach(character => {
        const span = document.createElement('span');
        span.textContent = character.name;
        span.classList.add('character-name');
        
        // Add an event listener to handle clicking on a character's name
        span.addEventListener('click', () => {
          displayCharacterDetails(character.id);
        });
  
        // Append the span to the character-bar div
        characterBar.appendChild(span);
      });
    } catch (error) {
      console.error('Failed to fetch characters:', error);
    }
  };
  // Display detailed character info when a name is clicked
const displayCharacterDetails = async (id) => {
    const url = `http://localhost:3001/characters/${id}`;
    try {
      const response = await fetch(url);
      const character = await response.json();
      
      // Display detailed information about the character
      const detailedInfo = document.getElementById('detailed-info');
      detailedInfo.innerHTML = `
        <p id="name">${character.name}</p>
        <img id="image" src="${character.image}" alt="${character.name}" />
        <h4>Total Votes: <span id="vote-count">${character.votes}</span></h4>
        <form id="votes-form">
          <input type="text" placeholder="Enter Votes" id="votes" name="votes" />
          <input type="submit" value="Add Votes" />
        </form>
        <button id="reset-btn">Reset Votes</button>
      `;
  
      // Handle the add votes form submission
      const voteForm = document.getElementById('votes-form');
      voteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const votesToAdd = parseInt(document.getElementById('votes').value, 10);
        character.votes += votesToAdd;
        
        // Update the vote count on the server
        try {
          await fetch(`http://localhost:3001/characters/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ votes: character.votes }),
          });
          
          // Update the vote count on the page
          document.getElementById('vote-count').textContent = character.votes;
        } catch (error) {
          console.error('Error updating votes:', error);
        }
      });
    } catch (error) {
      console.error('Failed to fetch character details:', error);
    }
  };
// Handle the reset votes button click
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', async () => {
    try {
        // Reset votes to 0
        character.votes = 0;
        
        // Update the vote count on the server
        await fetch(`http://localhost:3001/characters/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ votes: 0 }), // Reset votes to 0
        });
        
        // Update the vote count on the page
        document.getElementById('vote-count').textContent = '0';
    } catch (error) {
        console.error('Error resetting votes:', error);
    }
});
   // Add New Character
const addNewCharacter = async (newCharacter) => {
  const url = 'http://localhost:3001/characters'; // URL of your JSON server
  try {
      await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCharacter),
      });
      renderCharacters(); // Refresh the character list
  } catch (error) {
      console.error('Error adding new character:', error);
  }
};

// New Character Form Submission
const newCharacterForm = document.getElementById('new-character-form');
newCharacterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('new-character-name').value;
  const image = document.getElementById('new-character-image').value;

  // Create a new character object
  const newCharacter = {
      name,
      image,
      votes: 0, // Initialize votes to 0
  };

  await addNewCharacter(newCharacter);
  
  // Clear the form fields
  newCharacterForm.reset();
});


  
  // Initialize the app by rendering the characters
  renderCharacters();