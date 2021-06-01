// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB0VELYfoQyLuQIUSmLCSKS7T7BC1i4Sus",
      authDomain: "kwitter-b07fa.firebaseapp.com",
      databaseURL:"https://kwitter-b07fa-default-rtdb.firebaseio.com/",
      projectId: "kwitter-b07fa",
      storageBucket: "kwitter-b07fa.appspot.com",
      messagingSenderId: "404662139772",
      appId: "1:404662139772:web:560fc58b19416d699182f9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("name");
document.getElementById("user_name").innerHTML = "welcome-" + user_name;
function add_room(){
var room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"add room name"
});  
localStorage.setItem("room_name" , room_name)
window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect_to_room_name(this.id)'>"+Room_names+"</div>";
document.getElementById("output").innerHTML = row
      //End code
      });});}
getData();
function redirect_to_room_name(name){
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"
}
function logout(){
localStorage.removeItem("name");
localStorage.removeItem("room_name")
window.location = "index.html"      
}