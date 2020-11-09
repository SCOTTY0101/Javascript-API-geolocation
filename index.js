/* javascrpit code to run an API on gps location. Non handling of errors.
Running on ES6.
 */

 getLocation = () => {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(position => {
             console.log(`Longitude: ${position.coords.longitude}`);
             console.log(`Latitude: ${position.coords.latitude}`);
         });
     }
     else {
         console.log("Geolocation is not supported by this browser.");
     }
 }
 getLocation();
