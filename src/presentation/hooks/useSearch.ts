import { useState } from 'react'

export const useSearch = () => {

    const [searchCharacters, setSearchCharacters] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchCharacters = () => {
        setSearchQuery(searchCharacters);
    };

    const handleTextChange = (text: string) => {
        setSearchCharacters(text);
        if (text === '') {
            setSearchQuery('');
        }
    };

    return {
        searchQuery,
        searchCharacters,
        handleSearchCharacters,
        handleTextChange
    }
}