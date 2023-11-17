function updateColor(light, classN) {
    var elements = document.getElementsByClassName(classN)

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = light ? "var(--text-light)" : "var(--text-dark)";
    }
}

function updateCSSVariables(newValues) {
    for (const key in newValues) {
        document.documentElement.style.setProperty(key, newValues[key]);
    }
}

function themeOne() {
    document.getElementById('toggle-round').style = "left: 9px";
    updateCSSVariables({
        '--main-bg': 'hsl(222, 26%, 31%)',
        '--toggle-bg': 'hsl(223, 31%, 20%)',
        '--screen-bg': 'hsl(224, 36%, 15%)',
        '--key-bg-text': 'hsl(225, 21%, 49%)',
        '--key-bg-text-hover': 'hsl(225, 21%, 59%)',
        '--key-shadow-text': 'hsl(225, 28%, 35%)',
        '--key-bg-equal': 'hsl(6, 63%, 50%)',
        '--key-bg-equal-hover': 'hsl(6, 63%, 60%)',
        '--key-shadow-equal': 'hsl(6, 70%, 34%)',
        '--key-bg-num': 'hsl(30, 25%, 89%)',
        '--key-bg-num-hover': 'hsl(30, 25%, 99%)',
        '--key-shadow-num': 'hsl(28, 16%, 65%)',
        '--text-dark': 'hsl(0, 0%, 100%)',
        '--text-light': 'hsl(221, 14%, 31%)',
        '--border': '2px solid green'
    });

    updateColor(true, "number")
    updateColor(false, "text")
    updateColor(false, "equal")
}

function themeTwo() {
    document.getElementById('toggle-round').style = "left: 31px";
    updateCSSVariables({
        '--main-bg': 'hsl(0, 0%, 90%)',
        '--toggle-bg': 'hsl(0, 5%, 81%)',
        '--screen-bg': 'hsl(0, 0%, 93%)',
        '--key-bg-text': 'hsl(185, 42%, 37%)',
        '--key-bg-text-hover': 'hsl(185, 42%, 47%)',
        '--key-shadow-text': 'hsl(185, 58%, 25%)',
        '--key-bg-equal': 'hsl(25, 98%, 40%)',
        '--key-bg-equal-hover': 'hsl(25, 98%, 50%)',
        '--key-shadow-equal': 'hsl(25, 99%, 27%)',
        '--key-bg-num': 'hsl(45, 7%, 89%)',
        '--key-bg-num-hover': 'hsl(45, 7%, 99%)',
        '--key-shadow-num': 'hsl(35, 11%, 61%)',
        '--text-dark': 'hsl(60, 10%, 19%)',
        '--text-light': 'hsl(0, 0%, 100%)',
        '--border': '2px solid red'
    });    
 
    updateColor(false, "number")
    updateColor(true, "text")
    updateColor(true, "equal")
}

function themeThree() {
    document.getElementById('toggle-round').style = "left: 55px";
    updateCSSVariables({
        '--main-bg': 'hsl(268, 75%, 9%)',
        '--toggle-bg': 'hsl(268, 71%, 12%)',
        '--screen-bg': 'hsl(268, 71%, 12%)',
        '--key-bg-text': 'hsl(281, 89%, 26%)',
        '--key-bg-text-hover': 'hsl(281, 89%, 36%)',
        '--key-shadow-text': 'hsl(285, 91%, 52%)',
        '--key-bg-equal': 'hsl(176, 100%, 44%)',
        '--key-bg-equal-hover': 'hsl(176, 100%, 54%)',
        '--key-shadow-equal': 'hsl(177, 92%, 70%)',
        '--key-bg-num': 'hsl(268, 47%, 21%)',
        '--key-bg-num-hover': 'hsl(268, 47%, 31%)',
        '--key-shadow-num': 'hsl(290, 70%, 36%)',
        '--text-dark': 'hsl(52, 100%, 62%)',
        '--text-light': 'hsl(0, 0%, 100%)',
        '--border': '2px solid blue'
    });

    updateColor(false, "number")
    updateColor(true, "text")
    updateColor(true, "equal")
}

document.getElementById('select-1').addEventListener('click', themeOne);
document.getElementById('select-2').addEventListener('click', themeTwo);
document.getElementById('select-3').addEventListener('click', themeThree);