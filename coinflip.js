//Function takes an int, flips a coin that many times
//Write to console xHeads, xTails


var prompt = require('prompt');
prompt.start();

var flipper = function (i) {
    var heads = 0;
    var tails = 0;
    while (i > 0) {
        var f = Math.random();
        if (f < .5) {
            heads++;
        } else {
            tails++;
        }
        i--;
    }
    console.log("There were " + heads + " heads and " + tails + " tails!");
};

prompt.get({
    properties: {
      flips: {
        description: ("How many times should the coin be flipped?")
      }
    }
  }, function (err, result) {
    console.log("The coin will be flipped " + result.flips + " times.");
    flipper(result.flips);
  });
