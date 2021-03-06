db.createCollection("authorization", {
  validator: {
     $jsonSchema: {
       bsonType: "object",
        required: ["name"],
        properties: {
           name: {
              bsonType: "string",
              description: "The User Name"
           },
           slides: {
              bsonType: "array",
              description: "slides user has access to"
           }
         }
     }
 }
});

db.createCollection("slide", {
   validator: {
      $jsonSchema: {
        bsonType: "object",
         required: ["name", "location", "mpp"],
         properties: {
            name: {
               bsonType: "string",
               description: "Slide display name"
            },
            location: {
               bsonType: "string",
               description: "Slide location, used for opening"
            },
            mpp: {
               bsonType: "number",
               minimum: 0,
               description: "Microns per pixel for scalebar"
            }
          }
      }
  }
});

db.createCollection("heatmap", {
  validator: {
     $jsonSchema: {
       bsonType: "object",
        required: [ "slide", "name", "width", "height", "key", "values" ],
        properties: {
           name: {
              bsonType: "string",
              description: "Hetamap identifier"
           },
           slide: {
              bsonType: "string",
              description: "The associated slide"
           },
           height: {
              bsonType: "number",
              minimum: 0,
              description: "Height of the heatmap in its coordinates"
           },
           width: {
              bsonType: "number",
              minimum: 0,
              description: "Width of the heatmap in its coordinates"
           },
           key: {
              bsonType: "string",
              description: "What the heatmap values mean"
           },
           values: {
              bsonType: "array",
              description: "array of values, in form of [x,y,value]"
           }
         }
     }
 }
});

db.createCollection("mark", {
  validator: {
     $jsonSchema: {
       bsonType: "object",
        required: [ "provenance" ],
        properties: {
          marktype: {
            bsonType: "object",
            required: ["image", "analysis"],
            properties: {
             image: {
               bsonType: "object",
               required: ["slide"],
             },
             analysis: {
               bsonType: "object",
               required: ["execution_id"],
             }
           }
         }
       }
     }
 }
});

db.createCollection("template", {
  validator: {
     $jsonSchema: {
       bsonType: "object",
        required: [ "id", "name", "properties"],
        properties: {
           id: {
              bsonType: "string",
              description: "template identifier"
           },
           name: {
              bsonType: "string",
              description: "template display name"
           },
           properties: {
              bsonType: "object",
              description: "pure-form questions object",
              additionalProperties: {
                bsonType: "object",
                required: ["title", "type"]
              }
           },
         }
     }
 }
});

db.createCollection("overlay", {
  validator: {
     $jsonSchema: {
       bsonType: "object",
        required: [ "name", "location", "slide"],
        properties: {
           name: {
              bsonType: "string",
              description: "Overlay identifier"
           },
           location: {
              bsonType: "string",
              description: "Location of the overlay, for open"
           },
           slide: {
              bsonType: "string",
              description: "associated slide"
           }
         }
     }
 }
});

//db.mark.createIndex({"geometries.features.geometry":"2dsphere"})
