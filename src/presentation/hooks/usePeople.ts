import { useQuery } from "@tanstack/react-query";
import { GetPeoplesUseCase } from "../../application/useCases/GetPeoplesUseCase";
import { ApiRepository } from "../../infrastructure/repositories/ApiRepository";

const apiRepository = new ApiRepository();
const getPeoplesUseCase = new GetPeoplesUseCase(apiRepository);

export const usePeoples = () => {
    
    const peopleQuery = useQuery({
        queryKey: ['peoples'],
        queryFn: () => getPeoplesUseCase.execute(),
        staleTime: 100 * 60 * 60 * 24
    })

    return { peopleQuery }
};