import { PlanetsDTO } from "../../domain/dto/planets/PlanetsDTO";
import { PlanetsSpanishDTO } from "../../domain/dto/planets/PlanetsSpanishDTO";

export class PlanetsMapper{

    static planetsEnglishToSpanishEntity(planets:PlanetsDTO): PlanetsSpanishDTO{
        return {
            results: planets.results.map(planet => ({
                nombre: planet.name,
                periodo_rotacion: planet.rotation_period,
                periodo_orbital: planet.orbital_period,
                diametro: planet.diameter,
                clima: planet.climate,
                gravedad: planet.gravity,
                terreno: planet.terrain,
                agua_superficial: planet.surface_water,
                poblacion: planet.population,
                residentes: planet.residents,
                peliculas: planet.films,
                creado: planet.created,
                editado: planet.edited,
                url: planet.url,
            }))
        }
    }
}