export default class Place
{
     latitude;
     longitude;
     foursquareVenueId;
     category;
     label;
     pictureUrl;
     formatedAddress;
     facebookUserName;
     contact;

     constructor(foursquareVenueId,latitude, longitude, label, description)
     {
      this.foursquareVenueId = foursquareVenueId
       this.latitude = latitude;
       this.longitude = longitude;
       this.label = label;  
       this.description = description;
     }

}