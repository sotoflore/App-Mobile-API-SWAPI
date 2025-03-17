export interface PeopleSpanishDTO {
    results: ResultPeople[];
}

export interface ResultPeople {
    nombre: string;
    altura: string;
    masa: string;
    color_pelo: string;
    color_piel: string;
    color_ojos: string;
    año_nacimiento: string;
    genero: GenderPeople;
    mundo_natal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    naves_estelares: string[];
    creado: Date;
    editado: Date;
    url: string;
}

export enum GenderPeople {
    Femenino = "female",
    Masculino = "male",
    NA = "n/a",
}