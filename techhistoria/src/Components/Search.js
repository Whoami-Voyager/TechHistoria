function Search({ setSearchTimeLine }) {
    // just logs search results
    return (
        <input placeholder="Search" onChange={(e) => setSearchTimeLine(e.target.value)} className="w-4/5 text-center text-2xl mx-36 mb-40 border-2 rounded-lg shadow-xl hover:border-gray-400 transition duration-300 transform hover:-translate-y-1"></input>
    )
}

export default Search