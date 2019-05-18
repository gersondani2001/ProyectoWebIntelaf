/*codigo logico de la pagina web*/

//trabajar fuente de codigo aqui en el script principal


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBF-Ve0c9TfK1UvRIyq5H9iqol-zdU-2Y",
  authDomain: "intelaf-980a0.firebaseapp.com",
  databaseURL: "https://intelaf-980a0.firebaseio.com",
  projectId: "intelaf-980a0",
  storageBucket: "intelaf-980a0.appspot.com",
  messagingSenderId: "179333723652",
  appId: "1:179333723652:web:9f9781f70690dc00"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


var App=angular.module("App",[]);
  App.controller("control",function($scope){
 console.log("Entra inicio");

 $scope.variableP;
 $scope.cargar;




    $scope.producto = {};


    $scope.cargar = function(producto){
        console.log(producto)
        database.ref('Mercaderia/').push(producto);
    }





  function handleFileSelect(evt) {
   var files = evt.target.files; // FileList object
   console.log(files[0].name);
   $scope.variableP = files;
   console.log($scope.variableP);
   $scope.cargar = files[0].name;
   // Loop through the FileList and render image files as thumbnails.
   for (var i = 0, f; f = files[i]; i++) {

     // Only process image files.
     if (!f.type.match('image.*')) {
       continue;
     }

     var reader = new FileReader();

     // Closure to capture the file information.
     reader.onload = (function(theFile) {
       return function(e) {
         // Render thumbnail.
         var span = document.createElement('span');
         span.innerHTML = ['<img class="thumb" src="', e.target.result,
                           '" title="', escape(theFile.name), '"/>'].join('');
         document.getElementById('list').insertBefore(span, null);
       };
     })(f);

     // Read in the image file as a data URL.
     reader.readAsDataURL(f);
   }
 }

 
 $scope.img = function(){

   /*    var storageRef = storage.ref();
   var file = files; // use the Blob or File API
   ref.put(file).then(function(snapshot) {
     console.log('Uploaded a blob or file!');
   })*/

   //console.log($scope.cargar);

   var myImage = new Image();
   myImage.src = $scope.cargar;
   var cargarImagen = myImage

   
   var storage = firebase.storage();
   var storageRef = storage.ref();
   var file = cargarImagen; // use the Blob or File API
   storageRef.put(file).then(function(snapshot) {
     console.log('Uploaded a blob or file!');
   })


 }

 document.getElementById('files').addEventListener('change', handleFileSelect, false);
});