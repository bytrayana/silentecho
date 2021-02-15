var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

let theta = 0.0; // Start angle at 0
let amplitude = 150.0; // Height of wave

myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
  // graphics stuff:
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  // instructions:
  textSize(16);
  textAlign(CENTER);
  text("say something", width / 2, height / 2);
  myRec.onResult = showResult;
  myRec.start();
  
  myVoice.speak("say something");
  
}

function draw() {
  // why draw when you can talk?
  //background();
  showResult();
}

function showResult() {
  theta += 0.02;
   let magnitude = 100;
  if (myRec.resultValue === true) {
    background(0);
      for(let i = 0;i < (myRec.resultString).length;i++) {
        let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
        let wave2 = sin(radians(i + (i * frameCount * 0.009))) * magnitude;
        push();
        translate(wave1, wave2);
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();
    }
    //text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
    //myVoice.speak(myRec.resultString); // debug printer for voice options
    console.log(myRec.resultString);
  }

}


