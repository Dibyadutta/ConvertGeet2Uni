function Copy(){
   copyText = document.getElementById("result");
   copyText.select();
   document.execCommand("copy");
   alert(copyText,value + "প্ৰতিলিপি কৰা হ'ল।")}
function Result(){
   var str = document.getElementById("myform").elements.item(0).value;
   var result = str.replace(/”|\+/g,"ূ"):
   document.getElementById("result").innerHTML = result;
  }
