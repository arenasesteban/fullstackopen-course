import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get(baseUrl);
            setCountries(response.data);
        };

        fetchCountries();
    }, []);

    const filteredCountries = !search ? countries : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <Filter search={search} setSearch={setSearch} />
            <Results search={search} setSearch={setSearch} countries={filteredCountries} />
        </div>
    )
}

export default App;