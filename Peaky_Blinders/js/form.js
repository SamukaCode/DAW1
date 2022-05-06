    // Créditos: https://bit.ly/3LGOV2E

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

function mascarac(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){
      i.value = v.substring(0, i.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "19");
   if (v.length == 4 || v.length == 9 || v.length == 14) i.value += " ";
}

function tt() {

   String valor = document.getElementById("total");
   String select = document.getElementById("produto");
   
   if (select.equals("premium"))
   {
      valor = "R$199,90";
   } 
   else if(select.equals("deluxe"))
   {
      valor ="R$149,90";
   }
   else if (select.equals("standard"))
   {
      valor = "R$99,00";
   } 
   else 
   {
      valor = "R$00,00";
   }

   document.getElementById("total").setAttribute("value","valor")
}