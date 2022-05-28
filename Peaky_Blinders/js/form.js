    // Créditos às functions de máscaras: https://bit.ly/3LGOV2E

    function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function mascaracep(k){
   
   var v = k.value;
   
   if(isNaN(v[v.length-1])){
      k.value = v.substring(0, v.length-1);
      return;
   }
   
   k.setAttribute("maxlength", "10");
   if (v.length == 2) k.value += ".";
   if (v.length == 6) k.value += "-";

}

function mascarac(p){
   
   var v = p.value;
   
   if(isNaN(v[v.length-1])){
      p.value = v.substring(0, v.length-1);
      return;
   }
   
   p.setAttribute("maxlength", "19");
   if (v.length == 4 || v.length == 9 || v.length == 14) p.value += "ㅤ";
}

   // Créditos à function muda: Davi Macedo <3

function muda() {
   var x = document.getElementById('produto').value;

   document.getElementById('total').value = x;
}