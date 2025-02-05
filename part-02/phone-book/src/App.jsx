import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]); 
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data);
            });
    }, []);

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