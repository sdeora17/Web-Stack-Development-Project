if(!navigator.geolocation){
  throw new Error("No Geo Location Available");
}

function success(pos){
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  console.log(pos.coords.latitude)
  console.log(pos.coords.longitude)
// <button class="button button-primary">...</button>
  const markup = `<button class="location"><a target="_blank" href="https://www.openstreetmap.org/#map=16/${lat}/${lon}"> Company's Location </a></button>`
  console.log(markup)
  document.getElementById('output').innerHTML = markup;

  // navigator.geolocation.clearWatch(id) 
}
function error(err){
  if(err.code == 1)
    alert("Please allow access to geo-location")
  // else
    // alert("Position Unavailable")
}

const options = {
  enableHighAccuracy:true,
  timeout: 5000,
  maximumAge:0,
}

const  id = navigator.geolocation.watchPosition(success,error,options)