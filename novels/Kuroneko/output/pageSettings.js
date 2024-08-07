var paragraphs = document.querySelectorAll('p');

document.addEventListener('DOMContentLoaded', function(){
    const fontSizePreference = localStorage.getItem('fontPreference');

    if(fontSizePreference && document.style.width <= 840){
        paragraphs.forEach(paragraph => {
            paragraph.style.fontSize = fontSizePreference;
        })
    }
})

document.getElementById("font-button").addEventListener('click', function() {

    paragraphs.forEach(paragraph => {
        if (paragraph.style.fontSize === "20px") {
            paragraph.style.fontSize = "22px";
            console.log("Changed Font Size to 22px");
        } else if (paragraph.style.fontSize === "22px") {
            paragraph.style.fontSize = "24px";
            console.log("Changed Font Size to 24px");
        } else if (paragraph.style.fontSize === "24px") {
            paragraph.style.fontSize = "20px";
            console.log("Changed Font Size to 20px");
        } else {
            paragraph.style.fontSize = "20px"; // Default font size
            console.log("Changed Font Size to 20px (Default)");
        }
        
        const fontPreference = paragraph.style.fontSize;
        localStorage.setItem('fontPreference', fontPreference);
    });
});