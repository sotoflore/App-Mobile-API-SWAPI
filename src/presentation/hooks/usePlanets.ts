import { useQuery } from "@tanstack/react-query";
import { GetPlanetsUseCase } from "../../application/useCases/GetPlanetsUseCase";
import { ApiRepository } from "../../infrastructure/repositories/ApiRepository";

const apiRepository = new ApiRepository();
const getPlanetsUseCase = new GetPlanetsUseCase(apiRepository);

export const usePlanets = () => {

    const planetsQuery = useQuery({
        queryKey: ['planets'],
        queryFn: () => getPlanetsUseCase.execute(),
        staleTime: 100 * 60 * 60 * 24
    })

    return { planetsQuery }
};