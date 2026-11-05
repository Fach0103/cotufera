const axios = require('axios');

class TmdbService {
  static get baseURL() {
    return 'https://api.themoviedb.org/3';
  }

  static get headers() {
    return {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      'Content-Type': 'application/json'
    };
  }

  static async fetchMovieDetails(tmdbId) {
    try {
      const response = await axios.get(`${this.baseURL}/movie/${tmdbId}?language=es-ES&append_to_response=credits`, {
        headers: this.headers
      });
      return response.data;
    } catch (error) {
      throw new Error('No se pudo encontrar la pelicula en TMDB');
    }
  }
}

module.exports = TmdbService;