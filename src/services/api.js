import axios from "axios";

class SwapiService {
    baseUrl = 'https://swapi.co/api/';
    baseImageUrl = 'https://starwars-visualguide.com/assets/img/';

    getResource = (url) => {
         return axios.get(this.baseUrl + url)
          .then(res => {
              return res.data;
          })
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return  {
                    ...person,
                    id: this._extractId(person),
                    image: `${this.baseImageUrl}/characters/${id}.jpg`,
                };
    };


    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return {
            ...planet,
            id: this._extractId(planet),
            image: `${this.baseImageUrl}/planets/${id}.jpg`,

        };
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);
        return {
            ...starship,
            id: this._extractId(starship),
            image: `${this.baseImageUrl}/starships/${id}.jpg`,
        };
    };

    getAllPeople = async () => {
         const result = await this.getResource(`people/`);
         return result.results
             .map((person) => {
                return {
                    ...person,
                    id: this._extractId(person),
                }
             });
    };

    getAllPlanets = async () => {
        const result = await this.getResource(`planets/`);
         return result.results
             .map((planet) => {
                return {
                    ...planet,
                    id: this._extractId(planet),
                }
             });
    };

    getAllStarships = async () => {
        const result = await this.getResource(`starships/`);
         return result.results
             .map((starship) => {
                return {
                    ...starship,
                    id: this._extractId(starship),
                }
             });
    };
}

export default SwapiService;