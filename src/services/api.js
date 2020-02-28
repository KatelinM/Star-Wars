import axios from "axios";

class SwapiService {
    baseUrl = 'https://swapi.co/api/'

    getResource(url) {
         return axios.get(this.baseUrl + url)
          .then(res => {
              return res.data;
          })
    }

    getPerson(id) {
        return this.getResource(`people/${id}/`);
    }

    async getAllPeople() {
         const result = await this.getResource(`people/`);
         return result.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`);
        return this._planetFormatted(planet, id);
    }
    async getAllPlanets() {
        const result = await this.getResource(`planets/`);
        return result.results;
    }

    _planetFormatted (planet, id) {
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
          }
    }
}

export default SwapiService;