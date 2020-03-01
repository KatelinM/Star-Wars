import axios from "axios";

class SwapiService {
    baseUrl = 'https://swapi.co/api/';

    getResource = (url) => {
         return axios.get(this.baseUrl + url)
          .then(res => {
              return res.data;
          })
    };

    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return  {
                    ...person,
                    id: this._extractId(person),
                };
    };


    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this._planetFormatted(planet, id);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);
        return {
            ...starship,
            id: this._extractId(starship),
        };
    };


    getPersonImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    };

    getStarshipImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    };

    getPlanetImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    };

    getAllPeople = async () => {
         const result = await this.getResource(`people/`);
         return result.results
             .map((p) => {
                return {
                    id: this._extractId(p),
                    name: p.name,
                    birthYear: p.birth_year,
                }
             });
    };

    getAllPlanets = async () => {
        const result = await this.getResource(`planets/`);
        return result.results;
    };

    getAllStarships = async () => {
        const result = await this.getResource(`starships/`);
         return result.results
             .map((s) => {

                return {
                    id: this._extractId(s),
                    name: s.name,
                    speed: s.max_atmosphering_speed,
                    passengers: s.passengers,
                }
             });
    };

    _planetFormatted = (planet, id) => {
        return {
            ...planet,
            id: this._extractId(planet),
        }
    };

    _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };
}

export default SwapiService;