Webcam.set({
    width: 350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });

}
 console.log("ml5 version; ", ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nSqRQ21YR/model.json",modelLoaded);

 function modelLoaded()
 {
     console.log('Model Loaded!')
 }

 function speak()
 {
     var synth= window.speechSynthesis;
  speak_data1 ="The first prediction is "+ prediction1;
  speak_data2 ="The second prediction is "+ prediction2;
  var utter_this= new SpeechSynthesisUtterance(speak_data1+speak_data2);
  synth.speak(utter_this);
 }
 function check()
 {
     img= document.getElementById("captured_image");
     classifier.classify(img, gotResult);
 }
 function gotResult(error, results)
 {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
     document.getElementById("result_emo_name1").innerHTML=results[0].label;
     document.getElementById("result_emo_name2").innerHTML=results[1].label;
     prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label == "Peace")
    {
        document.getElementById("result_emoji1").innerHTML= "&#9996;";
    } 
    if(results[0].label == "Yo")
    {
        document.getElementById("result_emoji1").innerHTML= "&#129304;";
    } 
    if(results[0].label == "Thumbs up")
    {
        document.getElementById("result_emoji1").innerHTML= "&#128077;";
    } 
    if(results[0].label == "Thumbs down")
    {
        document.getElementById("result_emoji1").innerHTML= "&#128078;";
    } 
    if(results[0].label == "Super")
    {
        document.getElementById("result_emoji1").innerHTML= "&#128076;";
    } 
    if(results[1].label == "Peace")
    {
        document.getElementById("result_emoji2").innerHTML= "&#9996;";
    } 
    if(results[1].label == "Yo")
    {
        document.getElementById("result_emoji2").innerHTML= "&#129304;";
    } 
    if(results[1].label == "Thumbs up")
    {
        document.getElementById("result_emoji2").innerHTML= "&#128077;";
    } 
    if(results[1].label == "Thumbs down")
    {
        document.getElementById("result_emoji2").innerHTML= "&#128078;";
    } 
    if(results[1].label == "Super")
    {
        document.getElementById("result_emoji2").innerHTML= "&#128076;";
    } 
    }
 }