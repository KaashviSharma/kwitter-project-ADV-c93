//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBsiQeNm1A0Tk2qN-DZHnLbMYZaww9GJHA",
      authDomain: "kwitter-28bac.firebaseapp.com",
      projectId: "kwitter-28bac",
      storageBucket: "kwitter-28bac.appspot.com",
      messagingSenderId: "259548832559",
      appId: "1:259548832559:web:54308d9512de955a42f7da"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
