let Dark = "Dark"
let Light = "Light"
let Pink = "Pink"

function pinkMode(ModoActual){
    document.documentElement.style.setProperty('--background-projects', ' #b49992');
    document.documentElement.style.setProperty('--background', ' #e5dbce');
    document.documentElement.style.setProperty("--card-background", " #cbada5");
    document.documentElement.style.setProperty("--text", "#583F39");
    document.documentElement.style.setProperty("--profile", " #684047");
    document.documentElement.style.setProperty("--profile-secondary", " #684047ab");
    document.documentElement.style.setProperty("--box-shadow", " #a3867f");
    document.documentElement.style.setProperty("--box-shadow-img", " #a3867f");
    ModoActual === Light
    document.getElementById("theme").textContent = ModoActual;
    console.log(ModoActual)
}


function lightMode(ModoActual){
    document.documentElement.style.setProperty('--background-projects', ' #C1BAA1');
    document.documentElement.style.setProperty('--background', ' #ECEBDE');
    document.documentElement.style.setProperty("--card-background", " #D7D3BF");
    document.documentElement.style.setProperty("--text", "rgb(97, 97, 97)");
    document.documentElement.style.setProperty("--profile", " #A59D84");
    document.documentElement.style.setProperty("--profile-secondary", "rgba(165, 157, 132, 0.71)");
    document.documentElement.style.setProperty("--box-shadow", " #A59D84");
    document.documentElement.style.setProperty("--box-shadow-img", " #A59D84");
    ModoActual === Light
    document.getElementById("theme").textContent = ModoActual;
    console.log(ModoActual)
}

function darkMode(ModoActual){
    document.documentElement.style.setProperty('--background-projects', ' #181D23');
    document.documentElement.style.setProperty('--background', ' #15191E');
    document.documentElement.style.setProperty("--card-background", " #1D232A");
    document.documentElement.style.setProperty("--text", " #7D848F");
    document.documentElement.style.setProperty("--profile", " #504ece");
    document.documentElement.style.setProperty("--profile-secondary", " #504ece6b");
    document.documentElement.style.setProperty("--box-shadow", " #13171C");
    document.documentElement.style.setProperty("--box-shadow-img", " #504ece1a");
    ModoActual === Dark
    document.getElementById("theme").textContent = ModoActual;
    console.log(ModoActual)
}
