const CountryOption = ({ name, setSearch }) => {
    return (
        <div>
            {name} <button onClick={() => setSearch(name)}>Show</button>
        </div>
    );
}

export default CountryOption;