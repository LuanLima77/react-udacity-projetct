export class FourSquareAPI {

  static API_URL = "https://api.foursquare.com/v2/venues/";
  static CLIENT_ID = "JI2QYYPPDBWLK0QYWMCKLWXTASFNLKDTYNKOJ4HMVIPKUDJP";
  static CLIENT_SECRET = "D33X4RVX534N4QJEIXE5CJGVWOPWJ4B1JKPBX0VIB0HNH5JZ";
  static V = "20190425";


  static getPicturesByVenueId(venueId) {

    var requestUrl =`${this.API_URL}${venueId}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=${this.V}`;

    return fetch(requestUrl)
      .then(response => response.json())
      .catch(error => console.log("Erro ao recuperar imagens do local!"))
  }

  static buildPictureUrl(venue)
  {
    var pictureUrl = `${venue.bestPhoto.prefix}300x300${venue.bestPhoto.suffix}`;


    console.log("URL GERADA", pictureUrl);

    if(venue)
    return `${venue.bestPhoto.prefix}300x300${venue.bestPhoto.suffix}`;


  }
}

