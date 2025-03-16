import { FlatList} from 'react-native'
import { usePeoples } from '../hooks/usePeople'
import PersonCard from '../components/molecules/PersonCard';
import LayoutScreen from '../components/templates/LayoutScreen';
import Loading from '../components/atoms/Loading';
import TextByNoData from '../components/atoms/TextByNoData';
import { useSearch } from '../hooks/useSearch';
import SearchCharacter from '../components/molecules/SearchCharacter';

const PeopleScreen = () => {

    const {
        peopleQuery: { data, isLoading }
    } = usePeoples();

    const {
        searchQuery,
        searchCharacters,
        handleSearchCharacters,
        handleTextChange
    } = useSearch()

    if (isLoading) {
        return <Loading />;
    }

    if (!data || data.results.length === 0) {
        return <TextByNoData />;
    }

    const filteredPeople = data.results.filter(person =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <LayoutScreen>
            <SearchCharacter
                searchCharacters={searchCharacters}
                handleTextChange={handleTextChange}
                handleSearchCharacters={handleSearchCharacters}
            />
            {searchQuery.length > 0 && filteredPeople.length === 0 ? (
                <TextByNoData text='No se encontraron resultados...' />
            ) : (
                <FlatList
                    data={filteredPeople}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <PersonCard person={item} />}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </LayoutScreen>
    )
}

export default PeopleScreen