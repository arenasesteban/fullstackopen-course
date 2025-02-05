import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]); 
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const addPerson = (e) => {
        e.preventDefault();

        if(!persons.some(person => person.name === newName)) {
            setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
        } else {
            alert(`${newName} is alreay added to phonebook`);
        }

        setNewName('');
        setNewNumber('');
    }

    const personsToShow = !search ? persons : persons.filter(person => person.name.toLowerCase().includes(search));

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter search={search} setSearch={setSearch} />
            <h2>Add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} />
        </div>
    );
}

export default App;