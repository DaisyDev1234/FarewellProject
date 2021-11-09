
document.getElementById('test').addEventListener('click', function () {
RandNum = Math.floor(Math.random() * (11 - 1) + 1);
switch (RandNum) {
  case 1:
    x = "have a great day!"
    break;
  case 2:
    x = "boo!"
  break;
  case 3:
    x = "how does a ghost unlock a door? With a spoo-key!"
  break;
  case 4:
    x = "why do ghosts love elevators? It lifts their spirits!"
  break;
  case 5:
    x = "42"
  break;
  case 6:
    x = "always read the manual"
  break;
  case 7:
    x = "have you tried unplugging it and plugging it back in?"
  break;
  case 8:
    x = "what is your quest?"
  break;
  case 9:
    x = "what is your favorite color?!"
  break;
  case 10:
    x = "what is the airspeed velocity of an unladen swallow??!"
  break;
  default:
    x = "good luck!"
  break;
  };

Result = "The Ghost of Carl says " + x;
alert(Result);
});

