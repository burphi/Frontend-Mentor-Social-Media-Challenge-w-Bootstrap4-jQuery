const switchButton = document.getElementById("customSwitch1");

switchButton.addEventListener("click", clickHandler);

function clickHandler() {
  if (switchButton.checked === true) {
    console.log("dark");
    document.body.style.backgroundColor = "#1e202a";
    document.body.style.color= "#8b97c6";
    $(".light").removeClass("light").addClass("dark");
    $(".card-light").removeClass("card-light").addClass("card-dark");
    $(".instagram-light").removeClass("instagram-light").addClass("instagram-dark");

  } else if (switchButton.checked === false) {
    console.log("light");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color= "#63687e";
    $(".dark").removeClass("dark").addClass("light");
    $(".card-dark").removeClass("card-dark").addClass("card-light");
    $(".instagram-dark").removeClass("instagram-dark").addClass("instagram-light");
}
}
