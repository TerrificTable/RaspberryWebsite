var Theme = "light";

function switchTheme() {
    const headTag = document.getElementsByTagName('head')[0];
    const styleTag = document.createElement("style");
    
    if (Theme == "light") { // switch to dark
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`;
        
        styleTag.innerHTML = `
        :root {
            --background-color: #2e2e2e;
            --text-color-default: #fff;
            --text-color-link: #9900ff;
            --text-current-url: #c0c0c0;
            --text-error-code: #666;

            --theme-btn-bg-color: rgb(0, 0, 0);
            --theme-btn-hover-bg-color: rgb(100, 100, 100);
            --theme-btn-color: #fff;
            --theme-btn-shadow-color: #fff;
        }`;
        headTag.appendChild(styleTag);

        Theme = "dark"
        console.log("light -> " + Theme)
    }
    else { // swith to light
        document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`;
        document.getElementById("theme-btn").style = `background-color: `;

        styleTag.innerHTML = `
        :root {
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
        headTag.appendChild(styleTag);

        Theme = "light"
        console.log("dark -> " + Theme)

    }
}


(() => {
    document.getElementById("theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`;
        document.getElementById("theme-btn").style = `background-color: `;

        styleTag.innerHTML = `
        :root {
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
        headTag.appendChild(styleTag);

        Theme = "light"
})();
