import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Result } from '../../../domain/dto/FilmsDTO';

interface FilmsCardProps {
    film: Result;
}

const FilmsCard = ({ film }: FilmsCardProps) => {
  return (
      <View style={styles.itemContainer}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.detail}>Episode: {film.episode_id}</Text>
          <Text style={styles.detail}>Director: {film.director}</Text>
          <Text style={styles.detail}>Release Date: {film.planets}</Text>
          <Text style={styles.detail}>Opening Crawl: {film.opening_crawl}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    detail: {
        fontSize: 14,
        marginBottom: 4,
    },
});
export default FilmsCard;