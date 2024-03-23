function Search({ setSearchTimeLine }) {
    // just logs search results
    return (
        <input placeholder="Search" onChange={(e) => setSearchTimeLine(e.target.value)}></input>
    )
}

export default Search