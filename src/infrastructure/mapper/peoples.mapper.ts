import { Gender, PeopleDTO } from "../../domain/dto/peoples/PeopleDTO";
import { GenderPeople, PeopleSpanishDTO } from "../../domain/dto/peoples/PeopleSpanishDTO";


export class PeopleMapper{

    static peopleEnglishToSpanishEntity(peoples: PeopleDTO): PeopleSpanishDTO{
        return {
            results: peoples.results.map(people => ({
                nombre: people.name,
                altura: people.height,
                masa: people.mass,
                color_pelo: people.hair_color,
                color_piel: people.skin_color,
                color_ojos: people.eye_color,
                año_nacimiento: people.birth_year,
                genero: PeopleMapper.mapGender(people.gender),
                mundo_natal: people.homeworld,
                peliculas: people.films,
                especies: people.species,
                vehiculos: people.vehicles,
                naves_estelares: people.starships,
                creado: people.created,
                editado: people.edited,
                url: people.url,
            }))
        }
    }

    private static mapGender(gender: Gender): GenderPeople {
        switch (gender) {
            case Gender.Female:
                return GenderPeople.Femenino;
            case Gender.Male:
                return GenderPeople.Masculino;
            case Gender.NA:
                return GenderPeople.NA;
            default:
                throw new Error(`Género desconocido: ${gender}`);
        }
    }
}