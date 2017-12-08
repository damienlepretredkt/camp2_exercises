const address = `{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "130",
               "short_name" : "130",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Rue Sainte-Catherine",
               "short_name" : "Rue Sainte-Catherine",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Bordeaux",
               "short_name" : "Bordeaux",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gironde",
               "short_name" : "Gironde",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Nouvelle-Aquitaine",
               "short_name" : "Nouvelle-Aquitaine",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "France",
               "short_name" : "FR",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "33000",
               "short_name" : "33000",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "130 Rue Sainte-Catherine, 33000 Bordeaux, France",
         "geometry" : {
            "location" : {
               "lat" : 44.8370232,
               "lng" : -0.5735796
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 44.83837218029149,
                  "lng" : -0.5722306197084979
               },
               "southwest" : {
                  "lat" : 44.83567421970849,
                  "lng" : -0.574928580291502
               }
            }
         },
         "place_id" : "ChIJ_7DZmsUnVQ0Rx0v93cPReSo",
         "types" : [ "establishment", "point_of_interest", "store" ]
      }
   ],
   "status" : "OK"
}
`;


module.exports = address;
