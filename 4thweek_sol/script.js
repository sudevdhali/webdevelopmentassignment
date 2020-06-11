(function() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i=0;i<names.length;i++) {

  var firstLetterpre =names[i].charAt(0);

var firstletter=firstLetterpre.toLowerCase();

  if (firstletter=="j" ) {

    byeSpeaker.speak(names[i]);

  } 

  else {

    helloSpeaker.speak(names[i]) ;

  }

}

}) (); 

console.log(I am Sudev);
