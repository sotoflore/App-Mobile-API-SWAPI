import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Result } from '../../../domain/dto/PlanetsDTO'

interface PlanetsCardPros{
    planet:Result
}

const PlanetCard = ({ planet }: PlanetsCardPros) => {
  return (
      <View style={styles.card}>
          <Text style={styles.name}>{planet.name}</Text>
          <Text>Climate: {planet.climate}</Text>
          <Text>Terrain: {planet.terrain}</Text>
          <Text>Population: {planet.population}</Text>
          <Text>Population: {planet.diameter}</Text>

          <Text>Population: {planet.orbital_period}</Text>
          <Text>Population: {planet.rotation_period}</Text>
          <Text>Population: {planet.gravity}</Text>
          <Text>Population: {planet.terrain}</Text>
          <Text>Population: {planet.surface_water}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f9a825',
    }
});

export default PlanetCard