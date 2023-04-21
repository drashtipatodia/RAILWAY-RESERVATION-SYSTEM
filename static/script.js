// $("#from").val(startid);    <-- this will change the input box value to $startid
var name_stn = "";
// var from_stn="";
// var to_stn="";

$(".stn").click(function (){

    name_stn= $(this).attr("id");
    console.log("global var: "+name_stn);
})



function setFrom() {
    
    //document.getElementById('from').value = name_stn;
    $("#from").val(name_stn);
    console.log("from var: "+name_stn);
    from_stn=name_stn;
}

function setTo() {
    //document.getElementById('from').value = name_stn;
    $("#to").val(name_stn);
    console.log("to var: "+name_stn);
    to_stn=name_stn;
}

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// console.log(to_stn+from_stn);