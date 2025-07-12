import { useState, useEffect } from "react";

const Debounce = () => {
    const [query, setQuery] = useState('');
    const [debounced, setDebounced] = useState[query];

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(query);
        }, 500);

        return clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        
    })

}

export Debounce();