const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
// input a color
const myTextInput = document.getElementById("myTextInput");
const myDarkMode = document.getElementById("myDarkMode");
const body = document.getElementsByTagName("body");
const resetButton = document.getElementById("ResetButton");

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

resetButton.addEventListener('click', () => {
  myHeading.style.color = "";
});

// button turn on dark mde https://www.colorbox.io/
myDarkMode.addEventListener('click', () => {

  if (myDarkMode.textContent === "Dark Mode") {
    body[0].style.color = "#9796A3";
    body[0].style.background = "#0C004B";
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
      document.querySelectorAll("button")[i].style.background = "#00BFA9";
      document.getElementsByTagName("button")[i].style.color = "#E8D210";
    }
    for (let i = 0; i < document.querySelectorAll("input").length; i++) {
      document.getElementsByTagName("input")[i].style.background = "#292300";
      document.getElementsByTagName("input")[i].style.color = "#9796A3";
      document.getElementsByTagName("input")[0].style.border = "black";
    }
    myDarkMode.textContent = "Light Mode";
  } else {
    body[0].style.color = "";
    body[0].style.background = "";
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
      document.querySelectorAll("button")[i].style.background = "";
      document.getElementsByTagName("button")[i].style.color = "";
    }
    for (let i = 0; i < document.querySelectorAll("input").length; i++) {
      document.getElementsByTagName("input")[i].style.background = "";
      document.getElementsByTagName("input")[i].style.color = "";
      document.getElementsByTagName("input")[0].style.border = "";
    }
    myDarkMode.textContent = "Dark Mode";
  }
});

// create another text field that sets different background color or border