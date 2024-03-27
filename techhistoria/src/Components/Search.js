function Search({ setSearchTimeLine }) {
    // just logs search results
    return (
        <input 
        placeholder="Search" 
        onChange={(e) => setSearchTimeLine(e.target.value)} 
        className="search w-4/5 text-center m-9 mb-20 sm:m-12 sm:text-sm lg:m-14 lg:text-xl xl:mx-36 xl:mb-20 xl:mb-20 xl:text-2xl"/>
    )
}

export default Search