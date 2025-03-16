import { Films } from "../../domain/dto/FilmsDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetFilmsUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<Films> {
        return this.apiRepository.getFilms();
    }
}