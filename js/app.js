function show() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message =
    " I want to join your reading list " +
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
    " In the mean time you can connect with me on Twitter: <a href='https://twitter.com/theAkomolafe'>@theAkomolafe </a> <br><br><br>" +
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
window.onscroll = function () {
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
