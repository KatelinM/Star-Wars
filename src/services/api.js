import axios from "axios";

class SwapiService {
    baseUrl = 'https://swapi.co/api/';

    getResource = (url) => {
         return axios.get(this.baseUrl + url)
          .then(res => {
              return res.data;
          })
    }

    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this._planetFormatted(planet, id);
    }

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
    }

    getAllPlanets = async () => {
        const result = await this.getResource(`planets/`);
        return result.results;
    }

    getAllStarships = async () => {
        const result = await this.getResource(`starships/`);
         console.log(result.results)
         return result.results
             .map((s) => {

                return {
                    id: this._extractId(s),
                    name: s.name,
                    speed: s.max_atmosphering_speed,
                    passengers: s.passengers,
                }
             });
    }

    _planetFormatted = (planet, id) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };
}

export default SwapiService;