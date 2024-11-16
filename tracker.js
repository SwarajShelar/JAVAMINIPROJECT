
const plantationForm = document.getElementById('plantation-form');
const plantationRecords = document.getElementById('plantation-records');
const totalTreesElement = document.getElementById('total-trees');

// Array to hold the plantations (could be replaced with database logic)
let plantations = [];

// Function to add a plantation and update the displayed list
function addPlantation(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get form values
    const location = document.getElementById('location').value;
    const species = document.getElementById('species').value;
    const date = document.getElementById('date').value;

    // Debugging - Log values to check if they're being correctly captured
    console.log(`Location: ${location}, Species: ${species}, Date: ${date}`);

    // Validate form inputs
    if (!location || !species || !date) {
        alert("Please fill all fields.");
        return;
    }

    // Create a new plantation object
    const newPlantation = {
        location,
        species,
        date,
    };

    // Add the new plantation to the array
    plantations.push(newPlantation);

    // Debugging - Log plantations array to check if it's getting updated
    console.log('Updated Plantations Array:', plantations);

    // Clear the form inputs
    plantationForm.reset();

    // Update the plantation list display
    updatePlantationList();

    // Update the total trees count
    updateTotalTrees();
}

// Function to update the plantation list
function updatePlantationList() {
    // Debugging - Log to ensure this function is called
    console.log('Updating Plantation List');

    // Clear the existing plantation list
    plantationRecords.innerHTML = '';

    // Loop through each plantation and create a list item
    plantations.forEach(plantation => {
        const li = document.createElement('li');
        li.textContent = `${plantation.species} planted at ${plantation.location} on ${plantation.date}`;
        plantationRecords.appendChild(li);
    });
}

// Function to update the total trees count
function updateTotalTrees() {
    // Debugging - Log total trees count
    console.log('Total Trees:', plantations.length);

    totalTreesElement.textContent = plantations.length;
}

// Add an event listener to the form submit
plantationForm.addEventListener('submit', addPlantation);
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/plantations/all')
        .then(response => response.json())
        .then(data => {
            plantations = data;
            updatePlantationList();
            updateTotalTrees();
        })
        .catch(error => console.error('Error:', error));
});