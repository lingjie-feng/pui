/*** Object Constructors ***/
function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image = "cat.jpg";
    this.type = "Cat";
  }
  
  function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image = "dog.jpg"
    this.type = "Dog";
  }
  
  function Bird(name, age) {
    this.name = name;
    this.age = age;
    this.image = "bird.jpg"
    this.type = "Bird";
  }
  
  /*** Global Variables ***/
  var animals = [new Cat(), new Dog(), new Bird()];
  var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];
  
  /*** Functions ***/
  // get a random index for an array from 0 to maxIndex (not inclusive)
  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  
  // generates either a Cat, Dog, or Bird with a random name and random age
  function generateRandomAnimal() {
    var randomIdx = getRandomIndex(animals.length);
    var randomAnimal = animals[randomIdx];
  
    if (randomAnimal instanceof Cat) 
    {
      return new Cat(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Dog) 
    {
      return new Dog(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Bird) 
    {
      return new Bird(generateRandomName(), generateRandomAge());
    }
  }
  
  // generates a random name from list of names
  function generateRandomName() {
    var randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
  }
  
  // generates a random age from 0 to 5
  function generateRandomAge() {
    var randomIdx = getRandomIndex(5);
    return randomIdx;
  }
  
  /*** Document Load ****/
  function onLoad () {
  
    // get the savedAnimal in local storage if one exists
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  
    //use a boolean to keep track of whether you have saved an animal
    var hasSavedAnimal = false;
  
    //check if the saved animal exists in local storage
    if (animal === null) 
    {
      //if there is no saved animal, the button should display the Save Animal text
      document.getElementById("button-storage").textContent = "Save Animal";
  
      //if there is no saved animal, we generate one
      animal = generateRandomAnimal();
    } 
    else 
    {
      //if there is a saved animal, the button should display Clear Animal text
      document.getElementById("button-storage").textContent = "Clear Animal";
  
      //change the boolean to note that this animal has been saved
      hasSavedAnimal = true;
    }
  
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);
  
  
    document.getElementById("button-storage").addEventListener("click", function() {
      //when we are clearing the animal
      if (hasSavedAnimal) 
      {
        // clear the animal from the local storage
        localStorage.removeItem("savedAnimal");
  
        // if this button was clicked, hide button and show message to user
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-action-text").textContent = "Cleared!";
        document.getElementById("button-action-text").style.display = "block";
      }
      //when we are saving the animal
      else 
      {
        // save the animal to the local storage
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
  
        // if this button was clicked, hide button and show message to user
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-action-text").textContent = "Saved!";
        document.getElementById("button-action-text").style.display = "block";
      }
    });
  
  };