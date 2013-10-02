//Twitter Bot Boringifier by Brian McRae
//do what you want with it, I don't care
var restclient = require('node-restclient');
var Twit = require('twit');
var polyfill = require('polyfill-string');
var ent = require('ent');
var app = require('express').createServer();

var T = new Twit({
  consumer_key:         '__', 
  consumer_secret:      '__',
  access_token:         '__',
  access_token_secret:  '__'
});

function makeMessi() {
  var Messi = {q: "Messi", count: 1, result_type: "mixed"};
  var Messis = [];
  var tweet = "";
  T.get('search/tweets', Messi, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    textMessi = results.text
	//var word = (text.supplant({"Messi":"an athlete"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' Messi ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' Messi ') > 20) {
          Messis.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"an athlete":"Messi"}));
	 T.post('statuses/update', {
        status: textMessi
      }, function (err, reply) {});
  });
}  
makeMessi();

function makeBreakingBad() {
  var BreakingBad = {q: "BreakingBad", count: 1, result_type: "mixed"};
  var BreakingBads = [];
  var tweet = "";
  T.get('search/tweets', BreakingBad, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textBreakingBad = results.text
	//var word = (text.supplant({"BreakingBad":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' BreakingBad ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' BreakingBad ') > 20) {
          BreakingBads.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"someone":"BreakingBad"}));
	 T.post('statuses/update', {
        status: textBreakingBad
      }, function (err, reply) {});
  });
}  

function makeAvengers() {
  var Avengers = {q: "Avengers", count: 1, result_type: "mixed"};
  var Avengerss = [];
  var tweet = "";
  T.get('search/tweets', Avengers, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textAvengers = results.text
	//var word = (text.supplant({"Avengers":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' Avengers ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' Avengers ') > 20) {
          Avengerss.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"Avengers"}));
	 T.post('statuses/update', {
        status: textAvengers
      }, function (err, reply) {});
  });
}  
makeAvengers();

function makeDespicableMe() {
  var DespicableMe = {q: "DespicableMe", count: 1, result_type: "mixed"};
  var DespicableMes = [];
  var tweet = "";
  T.get('search/tweets', DespicableMe, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textDespicableMe = results.text
	//var word = (text.supplant({"DespicableMe":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' DespicableMe ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' DespicableMe ') > 20) {
          DespicableMes.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"DespicableMe"}));
	 T.post('statuses/update', {
        status: textDespicableMe
      }, function (err, reply) {});
  });
}  
makeDespicableMe();

function makeStarTrek() {
  var StarTrek = {q: "StarTrek", count: 1, result_type: "mixed"};
  var StarTreks = [];
  var tweet = "";
  T.get('search/tweets', StarTrek, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textStarTrek = results.text
	//var word = (text.supplant({"StarTrek":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' StarTrek ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' StarTrek ') > 20) {
          StarTreks.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"StarTrek"}));
	 T.post('statuses/update', {
        status: textStarTrek
      }, function (err, reply) {});
  });
}  
makeStarTrek();

function makeRiddick() {
  var Riddick = {q: "Riddick", count: 1, result_type: "mixed"};
  var Riddicks = [];
  var tweet = "";
  T.get('search/tweets', Riddick, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textRiddick = results.text
	//var word = (text.supplant({"Riddick":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' Riddick ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' Riddick ') > 20) {
          Riddicks.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"Riddick"}));
	 T.post('statuses/update', {
        status: textRiddick
      }, function (err, reply) {});
  });
}  
makeRiddick();

function makeWolverine() {
  var Wolverine = {q: "Wolverine", count: 1, result_type: "mixed"};
  var Wolverines = [];
  var tweet = "";
  T.get('search/tweets', Wolverine, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textWolverine = results.text
	//var word = (text.supplant({"Wolverine":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' Wolverine ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' Wolverine ') > 20) {
          Wolverines.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"Wolverine"}));
	 T.post('statuses/update', {
        status: textWolverine
      }, function (err, reply) {});
  });
}  
makeWolverine();

function makePlanes() {
  var Planes = {q: "Planes", count: 1, result_type: "mixed"};
  var Planess = [];
  var tweet = "";
  T.get('search/tweets', Planes, function(err, data) {
    if (err) throw err
    var results = data.statuses;
    var textPlanes = results.text
	//var word = (text.supplant({"Planes":"some guy"}));
    for (var i = 0; i < results.length; i++) {
       var text = results[i].text;
       if (text.indexOf(' Planes ') !== -1 && text.indexOf('RT') == -1 && text.indexOf(' Planes ') > 20) {
          Planess.push(text);	  	  
		} 
	 }	
     console.log(text.supplant({"a movie":"Planes"}));
	 T.post('statuses/update', {
        status: textPlanes
      }, function (err, reply) {});
  });
}  
makePlanes();

function makeBoring() {
  var text = textMessi
  switch (Math.floor(Math.random()*10)) {
    case 0:
	  text = textMessi;
	break;
    case 1:
       text = textBreakingBad;
    break;
    case 2:
       text = textAvengers;
	break;
	case 3:
       text = textDespicableMe;
    break;
	case 4:
       text = textStarTrek;
    break;
	case 5:
       text = textRiddick;
    break;
	case 6:
       text = textWolverine;
    break;
	case 7:
       text = textPlanes;
    break;
    }
    T.post('statuses/updates', { status: text}, function(err, reply) {
      console.log("error: " + err);
      console.log("reply: " + reply);
    });
  }

setInterval(function() {
  try {
    makeBoring();
  }
  catch (e) {
    console.log(e);
  }
},120000);  
