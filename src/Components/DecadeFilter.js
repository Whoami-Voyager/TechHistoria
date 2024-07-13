function DecadeFilter({ setDecade }) {
    // The option menu to select the decade
    return (
        <select
            className="ml-8 border-2 border-gray-400 rounded-lg font-Inter px-2 py-1 hover:border-gray-900 focus:outline-none focus:border-blue-500"
            onChange={(e) => setDecade(e.target.value)}>
            <option>All</option>
            <option>1900</option>
            <option>1910</option>
            <option>1920</option>
            <option>1930</option>
            <option>1940</option>
            <option>1950</option>
            <option>1960</option>
            <option>1970</option>
            <option>1980</option>
            <option>1990</option>
            <option>2000</option>
            <option>2010</option>
            <option>2020</option>
        </select>
    )
}

export default DecadeFilter