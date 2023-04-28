var name_stn = "";


$(".stn").click(function (){

    name_stn= $(this).attr("id");
    // console.log("global var: "+name_stn); <-- for debugging
})



function setFrom() {
    
    $("#from").val(name_stn);
    // console.log("from var: "+name_stn);  <-- for debugging
  
}

function setTo() {
   
    $("#to").val(name_stn);
    // console.log("to var: "+name_stn);  <-- for debugging
   
}

