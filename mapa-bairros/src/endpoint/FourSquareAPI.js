export class FourSquareAPI {

  //Parâmetros globais a serem passados para a API do Foursquare
  static API_URL = "https://api.foursquare.com/v2/venues/";
  static CLIENT_ID = "JI2QYYPPDBWLK0QYWMCKLWXTASFNLKDTYNKOJ4HMVIPKUDJP";
  static CLIENT_SECRET = "D33X4RVX534N4QJEIXE5CJGVWOPWJ4B1JKPBX0VIB0HNH5JZ";
  static V = "20190425";

/**
 * Recupera as imagens de um local no Foursquare a partir do seu ID
 * @param {Id do local no Foursquare} venueId 
 */
  static getPicturesByVenueId(venueId) {

    var requestUrl =`${this.API_URL}${venueId}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=${this.V}`;

    return fetch(requestUrl)
      .then(response => response.json())
  }
/**
 * Recebe um objeto retornado da API do Foursquare e monta a URL de sua miniatura
 * @param {*Local retornado da API do Foursquare} venue 
 */
  static buildPictureUrl(venue)
  {
    if(venue)
    return `${venue.bestPhoto.prefix}300x300${venue.bestPhoto.suffix}`;


  }
}

