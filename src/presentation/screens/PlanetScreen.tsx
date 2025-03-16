import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { usePlanets } from '../hooks/usePlanets';
import PlanetCard from '../components/molecules/PlanetCard';
import Loading from '../components/atoms/Loading';
import TextByNoData from '../components/atoms/TextByNoData';
import LayoutScreen from '../components/templates/LayoutScreen';

const PlanetScreen = () => {
    
    const { planetsQuery: { data, isLoading } } = usePlanets();

    if (isLoading) {
        return <Loading/>;
    }

    if (!data || data.results.length === 0) {
        return <TextByNoData/>;
    }
    return (
        <LayoutScreen>
            <FlatList
                data={data?.results ?? []}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <PlanetCard planet={item} />}
                showsVerticalScrollIndicator={false}
            />
        </LayoutScreen>
    )
}

export default PlanetScreen