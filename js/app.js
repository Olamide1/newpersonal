

function show () {
    var name = document.getElementById("name").value;
    var e = document.getElementById("subject");
    var subject = e.options [e.selectedIndex] .value;
    var email = document.getElementById("email").value;
    var message =  'My name is ' + name + '' +  document.getElementById("message").value + ' My email is: ' + email;
    var myEmail = "olamideakomolafe1234@gmail.com";
    var host = "smtp.gmail.com";
    var username = "olamideakomolafe1234@gmail.com";
    var password = "Holyjesus2016";
    Email.send (myEmail, myEmail, subject, message ,host, username, password, function done(message){
                alert("Thank You for reaching out!");
                console.log(message);
    });

    mySubject = "Hi " + name  + " Thanks For Reaching Out";
    myMessage = "Thank you for reaching out, I would get back to you as soon as I can.";
    Email.send(myEmail, email, mySubject, myMessage, host, username, password, function(message){
        console.log(message);
    });
    clear();
}

function clear (){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
}
