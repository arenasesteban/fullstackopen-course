const Filter = ({ search, setSearch }) => {
    return (
        <div>
            Find country: <input value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    );
};

export default Filter;