function login_user(){
    var phone_no=document.getElementById("number");
    location .replace("http://127.0.0.1:5500/makepayments.html")    
}

var count=0;

$("#scanbtn").on("click",function(){
    if(count % 2 == 0 )
    {
        $("#qr-div").show();
        startinit();
        startscan();
        count++;
    }
    else{
        $("#qr-div").hide();
        localstream.getVideoTracks()[0].stop();
        count++;
    }
    
    
});