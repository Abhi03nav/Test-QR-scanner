
function read(a)
{
    $("#qr-value").text(a);

    if($("#qr-value:contains(upi)"))
    {
        $("#final").text(a);
        $("#camsource").remove();
        $("#qr-canvas").remove();
        $("#qr-value").remove();
        localstream.getVideoTracks()[0].stop();
    }
}
    
qrcode.callback = read;