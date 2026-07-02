const text = "Python | SQL | Excel | Power BI | Data Analyst";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}

window.onload = typingEffect;