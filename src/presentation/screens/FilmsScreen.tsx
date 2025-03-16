import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { usePeoples } from '../hooks/usePeople';
import { useFilms } from '../hooks/useFilms';
import FilmsCard from '../components/molecules/FilmCard';
import LayoutScreen from '../components/templates/LayoutScreen';
import Loading from '../components/atoms/Loading';
import TextByNoData from '../components/atoms/TextByNoData';

const FilmsScreen = () => {
    const { filmsQuery: { data, isLoading } } = useFilms();

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
                keyExtractor={(item) => item.episode_id.toString()}
                renderItem={({ item }) => <FilmsCard film={item} />}
                showsVerticalScrollIndicator={false}
            />
        </LayoutScreen>
    )
}

export default FilmsScreen