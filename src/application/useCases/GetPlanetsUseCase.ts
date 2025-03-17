import { PlanetsSpanishDTO } from "../../domain/dto/planets/PlanetsSpanishDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetPlanetsUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<PlanetsSpanishDTO> {
        return this.apiRepository.getPlanets();
    }
}