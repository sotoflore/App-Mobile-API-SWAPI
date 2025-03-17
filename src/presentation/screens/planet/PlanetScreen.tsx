import { FlatList } from 'react-native'
import Loading from '../../components/molecules/Loading';
import TextByNoData from '../../components/atoms/TextByNoData';
import LayoutScreen from '../../components/templates/LayoutScreen';
import { usePlanets } from '../../hooks/usePlanets';
import PlanetCard from '../../components/molecules/PlanetCard';


const PlanetScreen = () => {

    const { planetsQuery: { data, isLoading } } = usePlanets();

    if (isLoading) {
        return <Loading />;
    }

    if (!data || data.results.length === 0) {
        return <TextByNoData />;
    }
    return (
        <LayoutScreen>
            <FlatList
                data={data?.results ?? []}
                keyExtractor={(item) => item.nombre}
                renderItem={({ item }) => <PlanetCard planet={item} />}
                showsVerticalScrollIndicator={false}
            />
        </LayoutScreen>
    )
}

export default PlanetScreen