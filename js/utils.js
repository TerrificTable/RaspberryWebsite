function createCookie(fieldname, fieldvalue, expiry_Months) {
    var date = new Date();
    date.setTime(date.getTime()+ (expiry_Months*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = fieldname + "=" + fieldvalue + 
                      ";" + expires + ";path=/";
}

function readCookie(cname) {
    var name = cname + "=";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var carr = decoded_cookie.split(';');
    for(var i=0; i<carr.length;i++) {
        var c = carr[i];
        while(c.charAt(0)==' ') {
            c=c.substring(1);
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
