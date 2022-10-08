
var Theme = "light";
let dark_theme = `:root {
    --background-color: #000;
    --text-color-default: #fff;
    --text-color-link: #9900ff;
    --text-current-url: #c0c0c0;
    --text-error-code: #666;

    --theme-btn-bg-color: rgb(0, 0, 0);
    --theme-btn-hover-bg-color: rgb(100, 100, 100);
    --theme-btn-color: #fff;
    --theme-btn-shadow-color: #fff;
}`;
let light_theme = `:root {
    --background-color:   #e5e5e5;
    --text-color-default: #000;
    --text-color-link:    rebeccapurple;
    --text-current-url:   #666;
    --text-error-code:    gray;

    --theme-btn-bg-color: rgb(255, 255, 255);
    --theme-btn-hover-bg-color: rgb(200, 200, 200);
    --theme-btn-color: #000;
    --theme-btn-shadow-color: #000;
}`;


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




function switchTheme() {
    const headTag = document.getElementsByTagName('head')[0];
    const styleTag = document.createElement("style");
    
    if (Theme == "light") { // switch to dark
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`;
        
        styleTag.innerHTML = dark_theme;
        headTag.appendChild(styleTag);

        Theme = "dark"
        createCookie("theme", Theme, 30);    
    }
    else { // swith to light
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`;
        document.getElementById("theme-btn").style = `background-color: `;

        styleTag.innerHTML = light_theme;
        headTag.appendChild(styleTag);

        Theme = "light"
        createCookie("theme", Theme, 30);
    }
}


(() => {
    const headTag = document.getElementsByTagName('head')[0];
    const styleTag = document.createElement("style");


    if (readCookie("theme") == "") {
        createCookie("theme", Theme, 30);
    } else {
        Theme = readCookie("theme");
    }

    if (Theme == "dark") {
        styleTag.innerHTML = dark_theme;
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
    else {
        styleTag.innerHTML = light_theme;
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }
    headTag.appendChild(styleTag);
})();
