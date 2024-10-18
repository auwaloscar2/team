prompt("Hi How are you");
function logEvent() {
    let p = event.target;
    if (p.name == "firstname") {
    message("First Name Changed to " + p.value);
    } else {
    message("Last Name Changed to " + p.value);
    }
    }
    function sendInfo() {
    let p = Event.target.parentElement;
    message("Welcome " + p.firstname.value + " " + p.lastname.
    value);
    }
    [ 281 ]
    function message(m) {
    document.getElementById("welcome").innerHTML = m;
    }
    function numCheck() {
        message("Number: " + !isNaN(Event.key));
        return !isNaN(Event.key);
        }
        function numCheck2() {
        message("Not a number: " + isNaN(Event.key));
        return isNaN(Event.key);
        }
        function message(m) {
        document.getElementById('wrapper').innerHTML = m;
        }
      