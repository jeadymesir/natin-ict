
var messageArray = ["Welkom op de website van NATIN ICT! Hier duiken wij in de boeiende<br> wereld van informatietechnologie. Ontdek wat ons richting te bieden<br>heeft en laten wij samen op weg naar een innovatieve en tech-savvy toekomst!"];
var textPosition = 0;
var speed = 45;

typewriter = () =>  {
    document.querySelector("#welkom").
    innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>"

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load",typewriter);