function Search({ setSearchTimeLine }) {
    // just logs search results
    return (
        <input 
        placeholder="Search 🔎" 
        onChange={(e) => setSearchTimeLine(e.target.value)} 
        className="search sm:m-12 sm:text-sm lg:m-14 lg:text-xl xl:mx-36 xl:mb-20 xl:mb-40 xl:text-2xl 2xl:mb-30"/>
    )
}

export default Search