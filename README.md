# APLICACION MOBILE API SWAPI

## Crear el proyecto
Comando utilizado para crear el proyecto en React Native CLI

```sh
npx @react-native-community/cli@latest init app-swapi
```

Estructura de carpetas

```txt
src/
├── application/                  
│   └── useCases/
│      │── GetFilmsUseCase.ts 
│      │── GetPeopleUseCase.ts 
│      └── GetPlanetsUseCase.ts        
│   
├── Domain/ 
│   │── constants/
│   │   └── colors.style.ts 
│   │── dtos/
│   │   ├── films/
│   │   │   │── FilmsDTO.ts
│   │   │   └── FilmsSpanishDTO.ts
│   │   │
│   │   ├── people/
│   │   │   ├── PeopleDTO.ts
│   │   │   └── PeopleSpanishDTO.ts  
│   │   │  
│   │   └── planet/
│   │       ├── PeopleDTO.ts
│   │       └── PlanetSpanishDTO.ts   
│   │── enums/
│   │   └── EntPointEnum.ts 
│   └── interfaces/
│       └── IApi.ts
│    
├── infrastructure/                  
│   │── repositories/
│   │   │── ApiRepository.ts
│   └── mappers/
│       │── films.mapper.ts
│       │── people.mapper.ts
│       └── planets.mapper.ts 
│   
├── Presentation/
│   ├── components/
│   │   ├── atoms/         
│   │   │   ├── TextByNoData.tsx 
│   │   │   └── ThemeToggleButton.tsx          
│   │   │
│   │   ├── molecules/
│   │   │   ├── Loading.tsx  
│   │   │   ├── FilmCard.tsx          
│   │   │   ├── HeaderView.tsx          
│   │   │   ├── PeopleCard.tsx  
│   │   │   ├── PlanetCard.tsx         
│   │   │   ├── SearchCharacter.tsx         
│   │   │   └── TextDetail.tsx 
│   │   ├── organisms/
│   │   └── templates/         
│   │         └── LayoutScreen.tsx 
│   │
│   ├── context/
│   │   └── ThemeContext.tsx 
│   │
│   ├── hooks/
│   │   ├── useFilm.ts         
│   │   ├── usePeople.ts          
│   │   ├── usePlanet.ts  
│   │   └── useSearch.ts
│   │
│   ├── navigation/
│   │   ├── BottomTabNavigator.tsx        
│   │   └── StackNavigator.tsx           
│   │
│   └── screens/
│       ├── film/
│       │   └── FilmsScreen.tsx
│       │
│       ├── people/
│       │   ├── PeopleDetailScreen.tsx 
│       │   └── PeopleScreen.tsx  
│       │  
│       └── planet/
│           └── PlanetScreen.tsx           
│ 
└── App.tsx              # Punto de entrada de la aplicación
```

## Ejecutar el proyecto

### Clonar el Repositorio
Clona el repositorio de GitHub en tu máquina local.
```sh
git clone https://github.com/sotoflore/App-Mobile-API-SWAPI.git
```
### Navegar al Directorio del Proyecto
Navega al directorio del proyecto clonado.
```sh
cd App-Mobile-API-SWAPI
```
### Instalar Dependencias
Instala las dependencias del proyecto utilizando **`npm`**.
```sh
npm install
```
### Reconstruir el Proyecto
- **IOS**
```sh
pod install
```
- **Android**: No es necesario.
### Ejecutar el proyecto

#### start Metro
En primer lugar, tendrás que ejecutar **Metro**, la herramienta de compilación de JavaScript para React Native.

```sh
# Using npm
npm start
```
#### Cree y ejecute su aplicación
Con **Metro** en ejecución, abre una nueva terminal desde la raíz de tu proyecto React Native, y utiliza uno de los siguientes comandos para compilar y ejecutar tu aplicación Android o iOS:

- **Android**
    ```sh
    # Using npm
    npm run android
    ```

- **iOS**
    Para iOS, recuerda instalar las dependencias de CocoaPods (esto sólo necesita ejecutarse en el primer clon o después de actualizar las deps nativas).

    ```sh
    bundle install
    ```
    A continuación, y cada vez que actualice sus dependencias nativas, ejecute:
    ```sh
    bundle exec pod install
    ```

    Finalmente ejecute.
    ```sh
    # Using npm
    npm run ios
    ```

## Uso de la App Mobile

### Pantalla de inicio - Peoples

![screen-people](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-people.png)

Para buscar un personaje solo tienes que escribir el nombre en la barra de búsqueda y luego presionar en buscar.
Si el personaje existe se mostrarán los resultados:

![screen-people-search](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-people-search.png)

de lo contrario te saldrá un mensaje como esto:

![screen-people-search-no-data](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-people-search-no-data.png)

Si deseas ver el detalle del personaje, solo presiona en **"ver mas detalles"**, esta pantalla te mostrará mas detalles del personaje:
![screen-people-details](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-people-details.png)

Para navegar entre pantallas, solo tienes que seleccionar en la barra de menú el que deseas ver.

### Pantalla de inicio - Peoples
![screen-film](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-films.png)

### Pantalla de inicio - Peoples
![screen-planets](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-planets.png)

## Modo dark
Para cambiar el tema de claro a oscuro, selecciona el ícono de la parte superior derecha.
Este te mostrará un alert donde te pedirá elegir el modo de la aplicación, elige el modo oscuro.
![screen-mode-theme](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-mode-theme.png)

Cuando selecciones el modo oscuro se mostrará de esta manera las pantallas:
Screen Peoples
![screen-people-dark](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-people-dark.png)

Screen Films
![screen-films-dark](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-films-dark.png)

Screen Planets
![screen-planets-dark](https://github.com/sotoflore/App-Mobile-API-SWAPI/blob/main/screenImg/screen-planets-dark.png)

## Mapper de los Atributos de inglés a español

### Peoples: Atributos en español
```json
{
    "results": [
        {
            "nombre": "Luke Skywalker",
            "altura": "172",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojos": "blue",
            "año_nacimiento": "19BBY",
            "genero": "male",
            "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/",
                "https://swapi.py4e.com/api/films/7/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/14/",
                "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/22/"
            ],
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/"
        },
        {
          ...  
        }
    ]
}
```

### Peoples: Atributos en inglés original
```json
{
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.py4e.com/api/planets/1/",
            "films": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/",
                "https://swapi.py4e.com/api/films/7/"
            ],
            "species": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.py4e.com/api/vehicles/14/",
                "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/"
        },
        {
           ...
        }
    ]
}
```

### Films: Atributos en español
```json
{
    "results": [
        {
            "titulo": "A New Hope",
            "id_episodio": 4,
            "texto_inicial": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "director": "George Lucas",
            "productor": "Gary Kurtz, Rick McCallum",
            "fecha_lanzamiento": "1977-05-25",
            "personajes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/3/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/10/",
                "https://swapi.py4e.com/api/people/12/",
                "https://swapi.py4e.com/api/people/13/",
                "https://swapi.py4e.com/api/people/14/",
                "https://swapi.py4e.com/api/people/15/",
                "https://swapi.py4e.com/api/people/16/",
                "https://swapi.py4e.com/api/people/18/",
                "https://swapi.py4e.com/api/people/19/",
                "https://swapi.py4e.com/api/people/81/"
            ],
            "planetas": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/2/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/3/",
                "https://swapi.py4e.com/api/starships/5/",
                "https://swapi.py4e.com/api/starships/9/",
                "https://swapi.py4e.com/api/starships/10/",
                "https://swapi.py4e.com/api/starships/11/",
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/13/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/4/",
                "https://swapi.py4e.com/api/vehicles/6/",
                "https://swapi.py4e.com/api/vehicles/7/",
                "https://swapi.py4e.com/api/vehicles/8/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/",
                "https://swapi.py4e.com/api/species/2/",
                "https://swapi.py4e.com/api/species/3/",
                "https://swapi.py4e.com/api/species/4/",
                "https://swapi.py4e.com/api/species/5/"
            ],
            "creado": "2014-12-10T14:23:31.880000Z",
            "editado": "2014-12-20T19:49:45.256000Z",
            "url": "https://swapi.py4e.com/api/films/1/"
        },
        {
            ...
        }
    ]
}

```
### Films: Atributos en inglés original
```json
{
    "results": [
        {
            "title": "A New Hope",
            "episode_id": 4,
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "director": "George Lucas",
            "producer": "Gary Kurtz, Rick McCallum",
            "release_date": "1977-05-25",
            "characters": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/3/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/10/",
                "https://swapi.py4e.com/api/people/12/",
                "https://swapi.py4e.com/api/people/13/",
                "https://swapi.py4e.com/api/people/14/",
                "https://swapi.py4e.com/api/people/15/",
                "https://swapi.py4e.com/api/people/16/",
                "https://swapi.py4e.com/api/people/18/",
                "https://swapi.py4e.com/api/people/19/",
                "https://swapi.py4e.com/api/people/81/"
            ],
            "planets": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/2/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "starships": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/3/",
                "https://swapi.py4e.com/api/starships/5/",
                "https://swapi.py4e.com/api/starships/9/",
                "https://swapi.py4e.com/api/starships/10/",
                "https://swapi.py4e.com/api/starships/11/",
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/13/"
            ],
            "vehicles": [
                "https://swapi.py4e.com/api/vehicles/4/",
                "https://swapi.py4e.com/api/vehicles/6/",
                "https://swapi.py4e.com/api/vehicles/7/",
                "https://swapi.py4e.com/api/vehicles/8/"
            ],
            "species": [
                "https://swapi.py4e.com/api/species/1/",
                "https://swapi.py4e.com/api/species/2/",
                "https://swapi.py4e.com/api/species/3/",
                "https://swapi.py4e.com/api/species/4/",
                "https://swapi.py4e.com/api/species/5/"
            ],
            "created": "2014-12-10T14:23:31.880000Z",
            "edited": "2014-12-20T19:49:45.256000Z",
            "url": "https://swapi.py4e.com/api/films/1/"
        },
        {
            ...
        }
    ]
}
```

### Planets: Atributos en español
```json
{
    "results": [
        {
            "nombre": "Tatooine",
            "periodo_rotacion": "23",
            "periodo_orbital": "304",
            "diametro": "10465",
            "clima": "arid",
            "gravedad": "1 standard",
            "terreno": "desert",
            "agua_superficial": "1",
            "poblacion": "200000",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "creado": "2014-12-09T13:50:49.641000Z",
            "editado": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.py4e.com/api/planets/1/"
        },
        {
            ...
        }
    ]
}
```
### Planets: Atributos en inglés original
```json
{
    "results": [
        {
            "name": "Tatooine",
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": "10465",
            "climate": "arid",
            "gravity": "1 standard",
            "terrain": "desert",
            "surface_water": "1",
            "population": "200000",
            "residents": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "films": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "created": "2014-12-09T13:50:49.641000Z",
            "edited": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.py4e.com/api/planets/1/"
        },
        {
            ...
        }
    ]
}
```
