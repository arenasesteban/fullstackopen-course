const Results = ({ search, countries }) => {
    if(search) {
        if(countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if(countries.length > 1 && countries.length <= 10) {
            console.log(countries);
            return (
                <div>
                    {countries.map(country => (
                        <p key={country.name.common}>{country.name.common}</p>
                    ))}
                </div>
            );
        } else {
            
            const country = countries[0];
            console.log(country);
            return (
                <div>
                    <h1>{country.name.common}</h1>
                    <p>Capital: {country.capital[0]}</p>
                    <p>Area: {country.area}</p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.values(country.languages).map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                    <img src={country.flags.svg} height={200} />
                </div>
            );
        }
    }
}

export default Results;