import { PeopleSpanishDTO } from "../../domain/dto/peoples/PeopleSpanishDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetPeoplesUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<PeopleSpanishDTO> {
        return this.apiRepository.getPeoples();
    }
}