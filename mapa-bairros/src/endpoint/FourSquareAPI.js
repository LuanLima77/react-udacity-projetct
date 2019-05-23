export class FourSquareAPI {

  static API_URL = "https://api.foursquare.com/v2/venues/";
  static CLIENT_ID = "JI2QYYPPDBWLK0QYWMCKLWXTASFNLKDTYNKOJ4HMVIPKUDJP";
  static CLIENT_SECRET = "D33X4RVX534N4QJEIXE5CJGVWOPWJ4B1JKPBX0VIB0HNH5JZ";
  static V = "20190425";


  static getPicturesByVenueId(venueId) {
console.log("API URL",this.API_URL);
console.log("CLIENT ID", this.CLIENT_ID);
    return fetch(`${this.API_URL}${venueId}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=${this.V}`)
      .then(response => response.json())
      .catch(error => console.log("Erro ao recuperar imagens do local!"))
  }
}

