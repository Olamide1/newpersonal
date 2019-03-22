// https://www.linkedin.com/in/olamide-akomolafe-801683147/

function show() {
  var name = document.getElementById("name").value;
  var e = document.getElementById("subject");
  var subject = e.options[e.selectedIndex].value;
  var email = document.getElementById("email").value;
  var message =
    "My name is " +
    name +
    " I need " +
    document.getElementById("message").value +
    ". <br>  My email is: " +
    email;
  var myEmail = "olamideakomolafe1234@gmail.com";
  var host = "smtp.gmail.com";
  var username = "olamideakomolafe1234@gmail.com";
  var password = "Holyjesus2016";
  Email.send(
    myEmail,
    myEmail,
    subject,
    message,
    host,
    username,
    password,
    function done(message) {
      alert("Thank You for reaching out!");
      console.log(message);
    }
  );

  mySubject = "Hi " + name;
  myMessage =
    "Thank you for reaching out, I would get back to you as soon as I can." +
    " In the mean time you can connect with me on Twitter: @theAkomolafe <br><br><br>" +
    "Regards, <br><i>TheAkomolafe</i> Olamide.";
  Email.send(
    myEmail,
    email,
    mySubject,
    myMessage,
    host,
    username,
    password,
    function done(message) {
      console.log(message);
    }
  );
  clear();
}

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
