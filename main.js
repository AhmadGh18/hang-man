let lettercont = document.querySelector(".letters");
let letters = "abcdefghijklmnopqrstuvwxyz";
let audio = document.querySelector(".audio");
let lett = Array.from(letters);
let press = document.querySelector(".press");
let happy = document.querySelector(".happy");
let sad = document.querySelector(".sad");
lett.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter-holder";
  let txt = document.createTextNode(letter);
  span.appendChild(txt);
  lettercont.appendChild(span);
});
const words = {
  countries: [
    "Algeria",
    "Afghanistan",
    "Albania",
    "Andorra",
    "Angola",
    "Austria",
    "Bahrain",
    "Belarus",
    "Bhutan",
    "Bolivia",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Croatia",
    "Cyprus",
    "Denmark",
    "Dominica",
    "Egypt",
    "Estonia",
    "Fiji",
    "France",
    "Georgia",
    "Greece",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Italy",
    "Iraq",
    "Iran",
    "Japan",
    "lebanon",
    "syria",
    "jordan",
    "Libya",
    "Malta",
    "Morocco",
    "Mexico",
    "Netherlands",
    "Pakistan",
    "Russia",
    "Serbia",
  ],
  names: [
    "ahmad",
    "Mohammad",
    "Ali",
    "hassan",
    "karim",
    "Omar",
    "hussein",
    "khaled",
    "ziad",
    "Abed",
    "Mark",
    "jamal",
  ],
  FootballTeam: [
    "Barcelona",
    "Real Madrid",
    "Liverpool",
    "Milan",
    "Manchester United",
    "Bayern Munich",
    "Everton",
    "Atletico Madrid",
    "Ajax",
    "Napoli",
    "Inter Milan",
    "Sevillia",
    "Arsenal",
  ],

  Singers: [
    "selena gomez",
    "juice wrld",
    "billie elish",
    "xxxtentaction",
    "eva max",
    "Taylor swift",
    "charlie puth",
    "beyonce",
    "Lady gaga",
    "Ariana Grande",
    "Katy perry",
    "Adele",
    "Ed sheran",
    "Bruno Mars",
    "Rihanna",
    "Justin Bieber",
    "Harry Styles",
    "Dua Lipa",
    "Miley Cyrus",
    "Drake",
    "Shawn Mendes",
    "Nicki Minaj",
    "The Weeknd",
    "Camila Cabello",
    "Jennifer Lopez",
  ],
  Football_player: [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Andres Iniesta",
    "Zlatan Ibrahimovic",
    "Radamel Falcao",
    "Neymar",
    "Thiago Silva",
    "kyllian Mbappe",
    "lewandowaski",
    "Haaland",
    "pele",
    "harry kane",
    "karim benzema",
    "sadio Mane",
    "Ronaldinho",
    "Ramos",
    "luka modric",
  ],
};

let allkey = Object.keys(words);

let rand = Math.floor(Math.random() * allkey.length);
let randname = allkey[rand];
let randomnamevalue = words[randname];

let randomvaluenum = Math.floor(Math.random() * randomnamevalue.length);

let finalvalue = randomnamevalue[randomvaluenum];
document.querySelector(".type").innerHTML = randname;

let cor = 0;
let wordtobegussed = Array.from(finalvalue);

let lettercontainer = document.querySelector(".guesscont");
let status = false;
wordtobegussed.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.className = "space";
    cor++;
  }
  lettercontainer.appendChild(emptyspan);
});

let wrongattemp = 0;
/******************* */
let thedraw = document.querySelector(".all");
let guesspan = document.querySelectorAll(".guesscont span");
document.addEventListener("click", (e) => {
  let status = false;
  if (e.target.className == "letter-holder") {
    e.target.classList.add("clicked");

    let counter = 0;
    let choosenword = Array.from(finalvalue.toLowerCase());
    let clickletter = e.target.innerHTML.toLowerCase();
    choosenword.forEach((llett, woindex) => {
      if (llett == clickletter) {
        press.play();
        status = true;
        guesspan.forEach((span, index) => {
          if (woindex == index) {
            span.innerHTML = llett;
            cor++;
            span.className = "trueletterr";
          }

          if (cor == wordtobegussed.length) {
            Swal.fire("CONGRADULATUION!!");
            happy.play();
            rel();
          }
        });
      }
    });
    console.log(cor);
    let trueword = "";
    if (status != true) {
      wrongattemp++;
      thedraw.classList.add(`wrong-${wrongattemp}`);

      if (wrongattemp == 11) {
        //  endGame();
        audio.play();
        Swal.fire("you lose the world was " + finalvalue);
        rel(); //functon down

        lettercont.classList.add("finshed");
      }
      if (counter == finalvalue.length) {
        Swal.fire("you won");
      }
    }
  }
});
function rel() {
  setTimeout(() => {
    location.reload();
  }, 3000);
}

let yesorno = [true, false];
let valof = yesorno[Math.floor(Math.random() * 2)];
if (valof == true) {
  setTimeout(() => {
    let btn = document.createElement("button");
    btn.innerText = "Hint";
    btn.className = "hint";
    let pressOnhint = 0;
    document.body.append(btn);
    btn.onclick = () => {
      if (finalvalue == "Egypt") {
        Swal.fire("Country have pyramid");
      } else if (finalvalue == "Fiji") {
        Swal.fire("flow of tizi");
      } else if (finalvalue == "Camila Cabello") {
        Swal.fire("only have 1 famous song");
      } else if (finalvalue == "beyonce") {
        Swal.fire("All of her song are bad");
      } else if (finalvalue == "luka modric") {
        Swal.fire("Look like faizor");
      } else if (finalvalue == "lewandowaski") {
        Swal.fire("poland player , just move to barecelona");
      } else if (finalvalue == "Drake") {
        Swal.fire("She say do you love me i say iam only..");
      } else if (finalvalue == "billie elish") {
        Swal.fire("born in 2002");
      } else if (finalvalue == "Pakistan") {
        Swal.fire("... Zindabaaad");
      } else if (finalvalue == "syria") {
        Swal.fire("");
      }
    };
  }, 3000);
}
