import {  useState } from "react"
import useDebounce from "../hooks/useDebounce"
import { DEBOUNCE_DELAY } from "../constants"

export default () => {
    const [searchTerm, setSearchTerm] = useState()
    const debouncedValue = useDebounce(searchTerm, DEBOUNCE_DELAY)
    console.log("Debounced value: ", debouncedValue)

    return <div>
        <h1>Search for users</h1>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    </div>
}