import { Films } from "../dto/FilmsDTO";
import { People } from "../dto/PeopleDTO";
import { Planets } from "../dto/PlanetsDTO";

export interface IApi{
    getPeoples(): Promise<People>;
    getPlanets(): Promise<Planets>;
    getFilms(): Promise<Films>;
}