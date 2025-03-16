import { Planets } from "../../domain/dto/PlanetsDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetPlanetsUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<Planets> {
        return this.apiRepository.getPlanets();
    }
}