export interface PlanetsSpanishDTO {
    results: ResultPlanet[];
}

export interface ResultPlanet {
    nombre: string;
    periodo_rotacion: string;
    periodo_orbital: string;
    diametro: string;
    clima: string;
    gravedad: string;
    terreno: string;
    agua_superficial: string;
    poblacion: string;
    residentes: string[];
    peliculas: string[];
    creado: Date;
    editado: Date;
    url: string;
}