
import axios from "axios";

let noteBtn = document.getElementById('createNoteButton')

let noteListRootElement = document.querySelector(".noteList");

let notes = []

 
let updatingID= null;

noteBtn.addEventListener('click', async()=> {
  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const role = document.getElementById('role').value;
  const available = document.querySelector('input[name="available"]:checked')? 
  document.querySelector('input[name="available"]:checked').value : "";


 if(!first_name || !last_name || !email || !phone || !role){
  document.getElementById('warning-msg').innerHTML = "All fields are required";
 }


  let body = {first_name,last_name,email,phone,role,available}

  if(updatingID){
    let result = await axios.put(`http://localhost:3000/api/v1/players/update-player/${updatingID}`, body)
    updatingID= null;
    noteBtn.innerText = 'Sumbit'
  } else{
    let res = await axios.post('http://localhost:3000/api/v1/players/add-players', body)
    document.getElementById('warning-msg').innerHTML = "";
  }

 

  renderElementsToSceen()
})





async function renderElementsToSceen() {

  noteListRootElement.innerHTML = '';
 let players = await axios.get('http://localhost:3000/api/v1/players/get-players');

 notes = players.data.data
 
 if(Array.isArray(notes)){
  notes.forEach(note => {
    renderNoteToList(note, note._id);
  })
}
}



function renderNoteToList(note,uniqueId){
  
     let noteDiv = document.createElement("div")
     noteDiv.classList.add('note',`note${uniqueId}`)
     let noteTitle = document.createElement("h4")
     let noteContent = document.createElement("p")
     let playermoblie = document.createElement('p')
     let playeravailability = document.createElement('p')
     let playerrole = document.createElement('p')
     let noteDeleteButton = document.createElement("button")
     let updateButton = document.createElement('button')

    updateButton.style.marginLeft="10px";
 
     noteTitle.innerText = `Name: ${note.first_name} ${note.last_name}`
     noteContent.innerText = `Email: ${note.email}`
     playermoblie.innerText= `Phone: ${note.phone}`
     playerrole.innerText= `Role: ${note.role}`
     playeravailability.innerText= `Availability: ${note.available ? 'Yes': 'No'}`;                           
     noteDeleteButton.innerText = "Delete"
     updateButton.innerText = 'Update'
 
     noteDiv.appendChild(noteTitle)
     noteDiv.appendChild(noteContent)
     noteDiv.appendChild(playermoblie)
     noteDiv.appendChild(playerrole)
     noteDiv.appendChild(playeravailability)
     noteDiv.appendChild(noteDeleteButton)
     noteDiv.appendChild(updateButton)
     noteListRootElement.appendChild(noteDiv)


    document.getElementById('first_name').value = "";
    document.getElementById('last_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('role').value = "";
    
    noteDeleteButton.addEventListener("click", ()=>{
        removeElementFromNotesList(uniqueId)
    })

    updateButton.addEventListener('click', ()=> {
      updatePlayers(uniqueId,note)
    })
    
 }

async function removeElementFromNotesList(id){
 

  let res = await axios.delete(`http://localhost:3000/api/v1/players/delete-player/${id}`)
  
   document.querySelector(`.note${id}`).remove();
   renderElementsToSceen();
 }

 async function updatePlayers(uniqueId, note) {
  //console.log(note)
  document.getElementById('first_name').value = note.first_name;
  document.getElementById('last_name').value = note.last_name;
  document.getElementById('email').value = note.email;
  document.getElementById('phone').value = note.phone;
  document.getElementById('role').value = note.role;
  note.available ? document.getElementById('role_yes').checked = true:
  document.getElementById('role_no').checked =true;

  updatingID = uniqueId
  
  noteBtn.innerHTML = 'Update'
 }

 renderElementsToSceen();
 































