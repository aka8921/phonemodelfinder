// Initialize Firebase
var config = {
    apiKey: "AIzaSyD8O1IdoX51Dx6uncOX9g9sXq7mBRGxu6Y",
    authDomain: "findphonemodel.firebaseapp.com",
    databaseURL: "https://findphonemodel.firebaseio.com",
    projectId: "findphonemodel",
    storageBucket: "findphonemodel.appspot.com",
    messagingSenderId: "722347611992"
  };
  firebase.initializeApp(config);


  //initialise a database
  var database = firebase.database().ref('phonemodel')
  
  //function yo submit the data
  var submitModel = function(){
    
    var newData = database.push();
    newData.set({
        useragent: navigator.userAgent
    })

    alert('sent');
  }