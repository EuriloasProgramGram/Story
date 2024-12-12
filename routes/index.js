var express = require('express');
const res = require("express/lib/response");
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
});

function generateRandomStory(getStory) {
  let storyLine = "#"
  while (storyLine.length < 7){
    storyLine += (Math.round(Math.random()* 15)).toString(16)
  }
  return storyLine;
}
router.post('/random', function(req, res){
  res.render('story',{
    color: generateRandomStory(),
    newStory: generateRandomStory()
  })
});

function checkStory(formData) {
  let temp = formData.split("");
  temp = temp.reverse();
  temp= temp.join("")
  if (phrase.toLowerCase().replace(" ", "NOUN").replace(" ", "VERB").replace(" ", "ADJECTIVE") === temp.toLowerCase().replace(" ", "NOUN").replace(" ", "VERB").replace(" ", "ADJECTIVE")) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = router;

function getStory(formData){
  if(formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if(formData.storyChoice === "2"){
   return generateStory2(formData);
  } else if(formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid"
  }
}

function generateStory1(formData){
  return `There was a day where ${formData.noun1} was suffering from the cold. The ${formData.adjective1} people tried their best to stay warm. Things were becoming desperate for ${formData.noun2}, they ${formData.verb1} and ${formData.verb1}. It was getting ${formData.adjective2} and they were about to ${formData.verb2} until they saw ${formData.noun3}. Immediately their ${formData.adjective3} were up so they ${formData.verb3}, they lived in a warm area in this winter night.`;
}

function generateStory2(formData){
  return `There was a dream, where there was a ${formData.noun1} who was ${formData.adjective1}. Everywhere they ${formData.verb1}, the fog became thicker and the ${formData.noun2} became longer. Things were getting ${formData.adjective2} around them. They kept going ${formData.verb2} until they saw something, a ${formData.noun3}. From desperation, they ${formData.verb3} reaching to their destination, however the ${formData.adjective3} faded as soon they found out they were back in the fog.`;
}

function generateStory3(formData){
  return `It a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkin started to ${formData.verb1}. The pumpkin didn't knew where it was, so it ${formData.verb2}. Where it was, was a ${formData.noun2} so what did the pumpkin to do? Well, it ${formData.verb3} of course where it spend it ${formData.noun3} being a ${formData.adjective2} pumpkin in this ${formData.adjective3} ${formData.noun2}.`;
}
