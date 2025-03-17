export interface FilmsSpanishDTO {
    results: ResultFilm[];
}

export interface ResultFilm{
    titulo: string;
    id_episodio: number;
    texto_inicial: string;
    director: string;
    productor: string;
    fecha_lanzamiento: string;
    personajes: string[];
    planetas: string[];
    naves_estelares: string[];
    vehiculos: string[];
    especies: string[];
    creado: Date;
    editado: Date;
    url: string;
}
