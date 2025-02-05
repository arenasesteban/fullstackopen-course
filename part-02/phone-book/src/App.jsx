import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import personService from "./services/personService";

const App = () => {
    const [persons, setPersons] = useState([]); 
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => { 
        const fetchPersons = async () => {
            const response = await personService.getAll();
            setPersons(response);
        };
        
        fetchPersons();
    }, []);

    const addPerson = async (e) => {
        e.preventDefault();
        const personObject =  { name: newName, number: newNumber }

        if(!persons.some(person => person.name === newName)) {
            const response = await personService.create(personObject);
            setPersons([...persons, response]);
        } else {
            const confirm = window.confirm(`${newName} is alreay added to phonebook, replace the old number with new one?`);

            if(confirm) {
                const id = persons.find(person => person.name === newName).id;
                const response = await personService.update(id, personObject);
                setPersons(persons.map(person => person.id !== id ? person : response));
            }
        }

        setNewName('');
        setNewNumber('');
    }

    const personsToShow = !search ? persons : persons.filter(person => person.name.toLowerCase().includes(search));

    const handleRemovePerson = async (id) => {
        const person = persons.find(person => person.id === id);
        const confirm = window.confirm(`Delete ${person.name}?`);

        if(confirm) {
            await personService.remove(id);
            setPersons(persons.filter(person => person.id !== id));
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter search={search} setSearch={setSearch} />
            <h2>Add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} handleRemovePerson={handleRemovePerson} />
        </div>
    );
}

export default App;