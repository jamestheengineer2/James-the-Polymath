function goAway() {
  const slide1 = document.querySelector('.side-block'); 
  slide1.classList.add("animate");
}

const goaway = document.getElementById("goaway");
goaway.addEventListener("click", goAway);

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const usernameInput = document.getElementById("username_input").value;
  const passwordInput = document.getElementById("password_input").value;
  alert(usernameInput)
  if (usernameInput === "james_the_polymath" && passwordInput === "Ethi7214$dollar") { 
    window.location.href = "admin_page.html";
  } else {
    alert ("Invalid Login");
  }
});
