function Copy(){
   copyText = document.getElementById("result");
   copyText.select();
   document.execCommand("copy");
   alert(copyText,value + "প্ৰতিলিপি কৰা হ'ল।")}
function Result(){
   var text = document.getElementById("myform").elements.item(0).value;
   var esult = text.replace(/h/g,"ূ");
   document.getElementById("result").innerHTML = esult;
  }
