import { FlatList } from 'react-native'
import { usePeoples } from '../../hooks/usePeople'
import LayoutScreen from '../../components/templates/LayoutScreen';
import Loading from '../../components/molecules/Loading';
import TextByNoData from '../../components/atoms/TextByNoData';
import { useSearch } from '../../hooks/useSearch';
import SearchCharacter from '../../components/molecules/SearchCharacter';
import PeopleCard from '../../components/molecules/PeopleCard';

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
        person.nombre.toLowerCase().includes(searchQuery.toLowerCase())
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
                    keyExtractor={(item) => item.nombre}
                    renderItem={({ item }) => <PeopleCard people={item} />}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </LayoutScreen>
    )
}

export default PeopleScreen