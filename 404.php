<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="/css/404.css">
    <script src="/js/theme.js" defer></script>

    <!-- FontAwesome -->
    <script defer src="/assets/fontawesome/js/all.js"></script>
    <link href="/assets/fontawesome/css/all.css"     rel="stylesheet">
    <!-- FontAwesome -->

    <title>404 Not Found</title>
</head>
<body>
    <button id="theme-btn" type="submit" onclick="switchTheme()">
        <!-- On Light Theme --> <i class="fa-regular fa-moon"></i>
        <!-- On Dark Theme --><!-- <i class="fa-regular fa-sun"></i> -->
    </button>

    <div class="content">
        <h1 style="font-size: 1.5rem"><span id="span404">404 | </span>Resource not found</h1>
        <p><i>Cannot find <span id="url"><?php echo $_SERVER["REQUEST_URI"] ?></span></i></p>
        <div class="spooky">
            <p>{\__/}</p>
            <p>(●ᴗ●)</p>
            <p>( >🥕</p>
        </div>
        <p>Return <a href="/" id="return">Home</a></p>
    </div>
    
</body>
</html>

<!-- 
    bg -> rgba(245,245,245,var(--tw-bg-opacity))

 -->