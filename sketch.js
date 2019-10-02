let person = [
  {
      firstName: "Zainib",
      lastName: "Ahmed",
      color: "Blue",
      animal: "Giraffe",
      book: "The Book Thief",
      movie: "Amelie",
      game: "none",
      superhero: "The Hulk",
      randomFact: "I love to eat olives."
    }, {
      firstName: "Camila",
      lastName: "Avina Garcia",
      color: "Green",
      animal: "Dog",
      book: "Match",
      movie: "Lady and the Tramp",
      game: " Guitar Hero",
      superhero: "Spiderman",
      randomFact: "I have a twin",
    }, {
      firstName: "Toni",
      lastName: "Anguiano",
      color: "blue",
      animal: "cat ",
      Book: "The Bell Jar ",
      movie: "Horror",
      superhero: "batman",
      randomFact: "I like to hangout in cemeteries and research dark California history",
    }, {
      firstName: "Eddson",
      lastName: "Jose",
      color: "midnight blue",
      animal: "pig",
      book: "The Dark Forest",
      movie: "The Fountain",
      game: "Halo Reach",
      superhero: "Superman",
      fact: "I am made up of stardust",
    }, {
      firstName: "Lydia",
      lastName: "Lim",
      color: "blue",
      animal: "dog",
      book: "No",
      movie: "me before you",
      game: "No",
      superhero: "Thor",
      randomFact: " birds are tetrapods even though they only walk on two legs",
    }, {
      firstName: "Chi",
      lastName: "Nguyen",
      color: "purple",
      animal: "bird",
      book: "Math Curse",
      movie: "Big Hero 6",
      game: "Checkers",
      superhero: "Big Hero 6 (team)",
      randomFact: "Lately this year, monsters have especially been occupying my mind, among other things."
    }, {
      firstName: "Leon",
      lastName: "Quach",
      color: "silver",
      animal: "penguins",
      book: "Letters to a Young Poet",
      movie: "Kung fu Hustle",
      game: "Pokemon Crystal Version",
      superhero: "Batman",
      randomFact: "I have two pet guinea pigs",
    },{
        firstName: "Hao",
        lastName: "Rong",
        color: "hex(#4285F4)",
        animal: "otter",
        book: "A Brief History of Time",
        movie: "Angry Birds 2",
        game: "Final Fantasy XIV",
        superhero: "Tony Stark",
        randomFact: "I like cats.",
      },{
    firstName: "Kaicong",
    lastname: "Tang",
    color: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superhero : "iron man",
    fact: "love gaming"
  },{
    firstName: "Sumedh",
    lastName: "Vedanthi",
    color:"Blue" ,
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja" ,
    superHero: "Batman" ,
    randomFact: "im a black belt",
  },{
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    animal: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    superhero: "Iron Man",
    randomFact: "I'm vegetarian"
  },{
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    animal:"Kiwi",
    book: "Romance of the Three Kingdoms",
    movie:"Shrek 2",
    game: "Super Mario 64",
    superhero: "Static Shock",
    randomFact:"I've had jaw correction surgery"
  },{
    firstName: "xiaowei",
    lastName: "zheng",
    color:" green",
    animal: "babies",
    book: "the little girl at the window",
    movie: "eat drink man woman",
    game: "none",
    superhero: "none",
    randomFact: "don't drink coke"
  },{
    firstName: "Sierra",
    lastName: "Roe",
    color :"purple",
    animal: "dog",
    book :"phantom tollbooth",
    movie :"Naussica of the Valley of the Wind",
    game :"pokemon heartgold",
    superhero :"captain marvel",
    randomFact: "can run 7 minute mile"
  },{
     firstName: "Hector",
     lastName: "Flores",
     Color: "Blue",
     animal:"Dog",
     book:"Captain Underpants",
     movie:"Ace Ventura pet detective",
     game:"Smash Brothers",
     superhero:"Flash",
     randomFact:"I am a Libra"
   },{
     firstName:"Kevin",
     lastName:"Sagara",
     color:"yellow",
     animal:"cat",
     book:"sherlock holmes",
     movie:"Shaun of the Dead",
     game:"osu!",
     superhero:"batman",
     fact:"learning japanese"
   },{
     firstName: "Rachel",
     lastName: "Centinaje",
     color: "green",
     animal:"dogs",
     book: "none",
     movie:"Drive",
     game: "Dishonored",
     superhero: "Deadpool",
     randomFact:"I went camping this weekend"
     },{
    firstName:"Alicia",
    lastName:"Breinke",
    color: "purple",
    animal: "dog",
    book:"The Art of Racing in the Rain",
    movie: "Spirited Away",
    superhero: "Wonder Woman",
    randomFact: "I want to live in another country someday"
   },
   {
    firstName: "Vanessa",
    lastName: "Blacow-Berggen",
    color: "pink",
    animal:"cat",
    book:"The Heartstriker series",
    superHero:"Spiderman",
    randomFact:"I really like cats, especially my cat",
    game: "Spyro Reignited Trilogy",
    movie: "Cats Don't Dance"
     },{
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie:"The Godfather",
    game: "Witcher 3",
    superHero: "spider man",
    randomFact:"I'm disappointed in GOT season 8",
  },{
    firstName: "Anthony",
    lastName: "Valdovinos",
    color:"purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years"
  },{
    firstName: "asra",
    lastName: "siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "pulp fiction",
    game: "idk",
    superhero: "hate em all",
    randomFact: "im grumpy"
   },
]
let randomIndex;
let animating = false;
let counter = 0
function setup() {
  createCanvas(800,800,);//WEBGL);
  background(200);
  textSize(32);
  text("click to randomize",50,50);
  setTimeout(changeBackground,1000);


}

function draw(){
  if(animating == true){
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height), random(50,200),random(255));

    //sphere(random(40));

  }

}
function changeBackground(){
  if (counter <= 8){
    counter++;
    console.log(counter);
  background(random(255),random(255),random(255));
  setTimeout(changeBackground,1000);
  } else{

    }
}

function randomize(){
  animating = false;
  if (person[0]){
  background(random(255));
  randomIndex = int(random(person.length))
  text(person[randomIndex].firstName, 100,100);
  person.splice(randomIndex,1);

  } else {
  background(random(255));
  text("end of list",100,100);
  }


}

function mousePressed(){
  animating = true;
  setTimeout(randomize,2000);
}
