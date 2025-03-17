import { FilmsSpanishDTO } from "../../domain/dto/films/FilmsSpanishDTO";
import { IApi } from "../../domain/interfaces/IApi";

export class GetFilmsUseCase {
    constructor(private apiRepository: IApi) { }

    async execute(): Promise<FilmsSpanishDTO> {
        return this.apiRepository.getFilms();
    }
}