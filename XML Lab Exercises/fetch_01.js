fetch("Sports_Domain_01.xml").then(response=>{
  return response.text()
}).then(xmlString=>{
  const xmlDocument = new DOMParser().parseFromString(xmlString,"text/xml")


  const SportId = [];
  const SName = [];
  const Equipments = [];
  const Guideline = [];

  const Sports = xmlDocument.querySelectorAll("SPORTS_TYPE");
  // console.log(Sports);
  for(const sport of Sports){
    SportId.push(sport.getAttribute("SID"));
    SName.push(sport.querySelector("SNAME").textContent);
    Equipments.push(sport.querySelector("EQUIPMENTS").textContent);
    Guideline.push(sport.querySelector ("GUIDELINES").textContent);
    
    console.log(sport.getAttribute("SID").textContent)
  }

  let text = document.getElementById("sport_unit");
  let table = `<table align="center">
  <thead>
  <tr>
  <th>SID</th>
  <th>SNAME</th>
  <th>EQUIPMENTS</th>
  <th>GUIDELINES</th>

  </tr>
  </thead>
  <tbody>`

  for(let i = 0;i<SportId.length;i++){
    table+= `<tr><td>`+ SportId[i] + `</td><td>` + SName[i] + `</td><td>`+ Equipments[i]+'</td><td>' + Guideline[i] +` </td> </tr>`
  }
  table+='</tbody></table>'

  text.innerHTML = table;





  table = ' '

  // Arrays]
  const fieldID = [];
  const fname = [];
  const mini = [];
  const totalPlayers = [];
  const dimensions = [];
  const basepriceSet = [];
  const locations = [];


  const fields = xmlDocument.querySelectorAll("FIELD_DOMAIN");
  for(const field of fields){

    fieldID.push(field.getAttribute("FID"))
 
    fname.push(field.querySelector("FNAME").textContent);
 
    mini.push(field.querySelector("MINIMUM_PLAYERS").textContent)
 
    totalPlayers.push(field.querySelector("TOTAL_PLAYERS").textContent);
 
    dimensions.push(field.querySelector("DIMENSION").textContent)
 
    basepriceSet.push(field.querySelector("BASE-PRICE").textContent)
 
    locations.push(field.querySelector("LOCATION").textContent)
    // console.log(FieldName,minimum,total,dimension,baseprice,loc)
  }

  text = document.getElementById("field_unit");
  table = `<table align="center">
  <thead>
  <tr>
  <th>FID</th>
  <th>FNAME</th>
  <th>MINIMUM PLAYERS</th>
  <th>Total Players</th>
  <th>Dimension</th>
  <th>Base Price</th>
  <th>Location</th>
  </tr>
  </thead>
  <tbody>\n`

  for(let i = 0;i<fieldID.length;i++){
    table+= `<tr>\n<td>` + fieldID[i] +`</td>\n<td>` + fname[i] + `</td>\n <td>` + mini[i] + `</td>\n<td>` + totalPlayers[i] + `</td>\n<td>` + dimensions[i] + '</td>\n<td>' +basepriceSet[i] + `</td>\n<td>` +locations[i] + `</td>\n</tr>\n`
  }
  table+='\n</tbody></table>'

  text.innerHTML = table;
  console.log(table)
  table = ' '

  const Hname = [];
  const phone = [];
  const HID = []


  const hosts = xmlDocument.querySelectorAll("HOST_TYPE");
  for(const host of hosts){
    HID.push(host.getAttribute("HID"))
    Hname.push(host.querySelector("hostname").textContent);
    phone.push(host.querySelector("phone_number").textContent);
  }
  // console.log(HID,Hname,phone)

  text = document.getElementById("host_unit");
  table = `<table align ="center">
  <thead>
    <tr>
      <th>HID</th>
      <th>Hname</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>`

  for(let i = 0;i<HID.length;i++){
    table+= `<tr><td>` + HID[i] + `</td><td>` + Hname[i] + `</td><td>`+
    phone[i]+`</td></tr>`
  }

  table+='</tbody></table>'
  console.log(table)
  text.innerHTML = table;



  const players = xmlDocument.querySelectorAll("PLAYER_TYPE");
  for(const player of players){
    name = player.querySelector("PNAME").textContent;
    age = player.querySelector("AGE").textContent;
    // console.log(name,age)
  }

  
  const BID = []
  const date = [];
  const start = []
  const end = []
  const base = []
  const amount = []


  const bookings = xmlDocument.querySelectorAll("BOOKING_TYPE");
  for(const booking of bookings){
    BID.push(booking.getAttribute("BID"))
    date.push(booking.querySelector("DATE").textContent);
    start.push(booking.querySelector("STIME").textContent);
    end.push(booking.querySelector("ETIME").textContent);
    base.push(booking.querySelector("BASEPRICE").textContent);
    amount.push(booking.querySelector("AMOUNT").textContent);
  }
  // console.log(date,start,end,base,amount)
  
  text = document.getElementById("booking_unit");
  table = `<table align ="center">
   <thead>
   <tr>
     <th>BID</th>
     <th>DATE</th>
     <th>START TIME</th>
     <th>END TIME</th>
     <th>BASE PRICE</th>
     <th>AMOUNT</th>
   </tr>
   </thead>
   <tbody>`
  
  for(let i = 0;i<BID.length;i++){
    table+= `<tr><td>` + BID[i] + `</td><td>`+ date[i]+ `</td><td>`+start[i]+'</td><td>'+end[i]+'</td><td>'+base[i]+'</td><td>'+ amount[i] +'</td></tr>' 
  }

  table+='\n</tbody></table>'
  text.innerHTML = table
  const exercise_id = [];
  const exercise_name = [];
  const precaution = [];
  const duration = [];
  const set = []

  text = document.getElementById("exercises_unit");

  const selfexercises = xmlDocument.querySelectorAll("SELF_EXERCISE_TYPE");
  for(const self_exercise of selfexercises){
    exercise_id.push(self_exercise.getAttribute("SEID"));
    exercise_name.push(self_exercise.querySelector("EXERCISE_NAME").textContent);
    precaution.push(self_exercise.querySelector("PRECAUTIONS").textContent)
    duration.push(self_exercise.querySelector("DURATION").textContent);
    set.push(self_exercise.querySelector("SET").textContent);
  }
  console.log(exercise_name,precaution,duration,set);

  table = `<table align ="center">
  <thead>
  <tr>
    <th> Self-Exercise ID </th>
    <th> Exercise Name </th>
    <th> Precaution </th>
    <th> Duration </th>
    <th> Set </th>
  </tr>
  </thead>
  <tbody>`

  for(let i = 0;i<exercise_id.length;i++){
    table+= '<tr><td>' + exercise_id[i] + '</td><td>' + exercise_name[i] + '</td><td>'+ precaution[i] + '</td><td>'+ duration[i] +'</td><td>'+set[i]+'</td></tr>'
  }
  table += '</tbody></table>'
  text.innerHTML = table;
  
})