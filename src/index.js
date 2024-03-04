const fs = require('fs');

// Function to read data from a JSON file
function readDataFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data from file:', error);
        return [];
    }
}

// Function to write data to a JSON file
function writeDataToFile(filePath, newData) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf8');
        console.log('Data has been written to file successfully.');
    } catch (error) {
        console.error('Error writing data to file:', error);
    }
}

// Function to create a new entry in the JSON file
function createEntry(filePath, newData) {
    const existingData = readDataFromFile(filePath);
    existingData.push(newData);
    writeDataToFile(filePath, existingData);
}

// Function to read all entries from the JSON file
function readAllEntries(filePath) {
    return readDataFromFile(filePath);
}

// Function to read a specific entry from the JSON file based on an identifier
function readEntry(filePath, identifier) {
    const allEntries = readDataFromFile(filePath);
    return allEntries.find(entry => entry.id === identifier);
}

// Function to update a specific entry in the JSON file
function updateEntry(filePath, identifier, updatedData) {
    const allEntries = readDataFromFile(filePath);
    const index = allEntries.findIndex(entry => entry.id === identifier);
    if (index !== -1) {
        allEntries[index] = { ...allEntries[index], ...updatedData };
        writeDataToFile(filePath, allEntries);
        console.log('Entry has been updated successfully.');
    } else {
        console.error('Entry not found.');
    }
}

// Function to delete a specific entry from the JSON file
function deleteEntry(filePath, identifier) {
    let allEntries = readDataFromFile(filePath);
    allEntries = allEntries.filter(entry => entry.id !== identifier);
    writeDataToFile(filePath, allEntries);
    console.log('Entry has been deleted successfully.');
}

module.exports = {
    createEntry,
    readAllEntries,
    readEntry,
    updateEntry,
    deleteEntry
};
