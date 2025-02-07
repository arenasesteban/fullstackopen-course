import Country from "./Country";
import CountryOption from "./CountryOption";
import Weather from "./Weather";

const Results = ({ search, setSearch, countries }) => {
    if(search) {
        if(countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if(countries.length > 1 && countries.length <= 10) {
            return (
                <div>
                    {countries.map(country => (
                        <CountryOption key={country.name.common} name={country.name.common} setSearch={setSearch} />
                    ))}
                </div>
            );
        } else if (countries.length == 1) {
            return (
                <div>
                    <Country country={countries[0]} />
                    <Weather country={countries[0]} />
                </div>
            );
        }
    }
}

export default Results;