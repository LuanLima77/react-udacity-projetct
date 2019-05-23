export class FourSquareAPI {

  API_URL = "https://api.foursquare.com/v2/venues/";
  CLIENT_ID = "JI2QYYPPDBWLK0QYWMCKLWXTASFNLKDTYNKOJ4HMVIPKUDJP";
  CLIENT_SECRET = "D33X4RVX534N4QJEIXE5CJGVWOPWJ4B1JKPBX0VIB0HNH5JZ";
  V = "20190425";


  static getPicturesByVenueId(venueId) {
    return fetch(`${this.API_URL}${venueId}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=${this.V}`)
      .then(response => response.json())
     .then(data => console.log("CHEGOU",data)
      )
      .catch(error => console.log("Erro ao recuperar imagens do local!"))
  }
}

