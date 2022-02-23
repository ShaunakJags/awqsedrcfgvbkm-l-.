var SpeechRecognition = window.webkitSpeechRecognition;    // API to convert speech to text
 var recognition = new SpeechRecognition();                 // creating new API to use it
function start()
{
    document.getElementById("textbox").innerHTML=" "
    recognition.start()
    
}

recognition.onresult = function(event) {
 
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
     document.getElementById("textbox").innerHTML = Content;  
    speak()
  }
  
  function speak()
  {
      var synth=window.speechSynthesis;
      var speak_data=document.getElementById("textbox").value;
      var utter_this=new SpeechSynthesisUtterance(speak_data);

      synth.speak(utter_this);

      Webcam.attach("#camera")

  }

  Webcam.set({
      width:400,
      height:300,
      image_format:"jpeg",
      jpeg_quality:200
  })