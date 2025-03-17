import { FilmsDTO} from "../../domain/dto/films/FilmsDTO";
import { FilmsSpanishDTO} from "../../domain/dto/films/FilmsSpanishDTO";

export class FilmsMapper{

    static filmsEnglishToSpanishEntity(films: FilmsDTO): FilmsSpanishDTO{
        return {
            results: films.results.map((film) => ({
                titulo: film.title,
                id_episodio: film.episode_id,
                texto_inicial: film.opening_crawl,
                director: film.director,
                productor: film.producer,
                fecha_lanzamiento: film.release_date,
                personajes: film.characters,
                planetas: film.planets,
                naves_estelares: film.starships,
                vehiculos: film.vehicles,
                especies: film.species,
                creado: film.created,
                editado: film.edited,
                url: film.url,
            }))
        }
    }
}