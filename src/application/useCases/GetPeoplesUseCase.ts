import { People } from "../../domain/dto/PeopleDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetPeoplesUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<People> {
        return this.apiRepository.getPeoples();
    }
}