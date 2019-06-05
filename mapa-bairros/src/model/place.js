export default class Place
{
     latitude;
     longitude;
     foursquareVenueId;
     category;
     label;
     pictureUrl;
     formatedAddress;
     facebookUsername;
     contact;

     constructor(foursquareVenueId,latitude, longitude, label)
     {
      this.foursquareVenueId = foursquareVenueId
       this.latitude = latitude;
       this.longitude = longitude;
       this.label = label;  
     }

}