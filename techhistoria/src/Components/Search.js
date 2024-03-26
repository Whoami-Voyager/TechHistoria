function Search({ setSearchTimeLine }) {
    // just logs search results
    return (
        <input placeholder="Search" onChange={(e) => setSearchTimeLine(e.target.value)} className="w-4/5 text-center text-2xl mx-36 my-20 border-2 rounded-lg hover:border-gray-400"></input>
    )
}

export default Search