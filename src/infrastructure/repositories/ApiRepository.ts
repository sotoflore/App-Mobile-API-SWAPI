import axios from "axios";
import { People } from "../../domain/dto/PeopleDTO";
import { IApi } from "../../domain/interfaces/IApi";
import { EntpointEnum } from "../../domain/enums/EnpointEnum";
import { Films } from "../../domain/dto/FilmsDTO";
import { Planets } from "../../domain/dto/PlanetsDTO";

export class ApiRepository implements IApi{

    async getPeoples(): Promise<People> {
        const response = await axios.get(EntpointEnum.URL_PEOPLE);
        return response.data;
    }

    async getPlanets(): Promise<Planets> {
        const response = await axios.get(EntpointEnum.URL_PLANETS);
        return response.data;
    }

    async getFilms(): Promise<Films> {
        const response = await axios.get(EntpointEnum.URL_FILMS);
        return response.data;
    }
}