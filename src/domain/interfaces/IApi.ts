import { FilmsSpanishDTO } from "../dto/films/FilmsSpanishDTO";
import { PeopleSpanishDTO } from "../dto/peoples/PeopleSpanishDTO";
import { PlanetsSpanishDTO } from "../dto/planets/PlanetsSpanishDTO";

export interface IApi {
    getPeoples(): Promise<PeopleSpanishDTO>;
    getPlanets(): Promise<PlanetsSpanishDTO>;
    getFilms(): Promise<FilmsSpanishDTO>;
}