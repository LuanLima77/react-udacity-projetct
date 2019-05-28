export default class Place
{
     latitude;
     longitude;
     foursquareVenueId;
     label;

     constructor(foursquareVenueId,latitude, longitude, label)
     {
      this.foursquareVenueId = foursquareVenueId
       this.latitude = latitude;
       this.longitude = longitude;
       this.label = label;  
     }

}