# jscrudon

A simple Node.js module for performing CRUD operations on JSON files.

## Installation

You can install `jscrudon` via npm:

```bash
npm install jscrudon
```

## Usage

```javascript
const jscrudon = require('jscrudon');

const filePath = 'data.json';

// Create a new entry
jscrudon.createEntry(filePath, { id: 1, name: 'John Doe', age: 30 });

// Read all entries
console.log(jscrudon.readAllEntries(filePath));

// Read a specific entry
console.log(jscrudon.readEntry(filePath, 1));

// Update an entry
jscrudon.updateEntry(filePath, 1, { age: 31 });

// Delete an entry
jscrudon.deleteEntry(filePath, 1);
```

## API

### `createEntry(filePath, newData)`

Creates a new entry in the JSON file specified by `filePath` with the data provided in `newData`.

### `readAllEntries(filePath)`

Reads all entries from the JSON file specified by `filePath`.

### `readEntry(filePath, identifier)`

Reads a specific entry from the JSON file specified by `filePath` based on the `identifier`.

### `updateEntry(filePath, identifier, updatedData)`

Updates a specific entry in the JSON file specified by `filePath` based on the `identifier` with the data provided in `updatedData`.

### `deleteEntry(filePath, identifier)`

Deletes a specific entry from the JSON file specified by `filePath` based on the `identifier`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
