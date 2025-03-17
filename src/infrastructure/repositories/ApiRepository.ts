import axios from "axios";
import { IApi } from "../../domain/interfaces/IApi";
import { EntpointEnum } from "../../domain/enums/EntpointEnum";
import { PeopleSpanishDTO } from "../../domain/dto/peoples/PeopleSpanishDTO";
import { PeopleMapper } from "../mapper/peoples.mapper";
import { PlanetsMapper } from "../mapper/planets.mapper";
import { PlanetsSpanishDTO } from "../../domain/dto/planets/PlanetsSpanishDTO";
import { FilmsMapper } from "../mapper/fillms.mapper";
import { FilmsSpanishDTO } from "../../domain/dto/films/FilmsSpanishDTO";

export class ApiRepository implements IApi {

    async getPeoples(): Promise<PeopleSpanishDTO> {
        const response = await axios.get(EntpointEnum.URL_PEOPLE);
        return PeopleMapper.peopleEnglishToSpanishEntity(response.data);
    }

    async getPlanets(): Promise<PlanetsSpanishDTO> {
        const response = await axios.get(EntpointEnum.URL_PLANETS);
        return PlanetsMapper.planetsEnglishToSpanishEntity(response.data);
    }

    async getFilms(): Promise<FilmsSpanishDTO> {
        const response = await axios.get(EntpointEnum.URL_FILMS);
        return FilmsMapper.filmsEnglishToSpanishEntity(response.data);
    }
}