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

    getPlanet(id) {
        return this.getResource(`planets/${id}/`);
    }
    async getAllPlanets() {
        const result = await this.getResource(`planets/`);
        return result.results;
    }

}

export default SwapiService;