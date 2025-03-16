import { useQuery } from "@tanstack/react-query";
import { GetFilmsUseCase } from "../../application/useCases/GetFilmsUseCase";
import { ApiRepository } from "../../infrastructure/repositories/ApiRepository";

const apiRepository = new ApiRepository();
const getFilmsUseCase = new GetFilmsUseCase(apiRepository);

export const useFilms = () => {

    const filmsQuery = useQuery({
        queryKey: ['films'],
        queryFn: () => getFilmsUseCase.execute(),
        staleTime: 100 * 60 * 60 * 24
    })

    return { filmsQuery }
};