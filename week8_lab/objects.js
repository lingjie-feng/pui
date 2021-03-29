
function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a cat";
    this.image = "https://thumbnails.production.thenounproject.com/_XdZAzj4bT5SJDHRavJEWG67bhA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/F0DEB8BE-1EDE-4747-B1EA-082ED9EE25B3.jpg";
  }

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a dog";
    this.image = "https://thumbnails.production.thenounproject.com/HLIInlTrJJGXQNTyFHUhvcs2UR8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/ADE9549B-6C28-4B7E-B7C5-D60A4308AADD.jpg";
}

function Lamb(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a lamb";
    this.image = "https://thumbnails.production.thenounproject.com/w1rsEMVkWNM3SVQTeWBuyLjW__Q=/fit-in/1000x1000/photos.production.thenounproject.com/photos/41C240E6-8D4B-4A05-98FA-6C521CFB5B7E.jpg";
} 

var animals = [new Cat(), new Dog(), new Lamb()];
var names = ["Anna", "Bob", "Catherine"];

function generateRandomIndex(maxIndex) {
    return (Math.floor(Math.random() * maxIndex))
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(3);
    return (names[randomIndex])
}

function generateRandomAge() {
   return (generateRandomIndex(10))
}

function generateRandomAnimal() {
    var randomIndex = generateRandomIndex(3);
    var randomAnimal = animals[randomIndex];
    var type;
    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Dog) {
        return new Dog(generateRandomName(), generateRandomAge());
    } else {
        return new Lamb(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    var animal = generateRandomAnimal();
    var image = document.getElementById("animal");
    image.setAttribute("src", animal.image);
    image.setAttribute("name", animal.name);
    image.setAttribute("age", animal.age);
    image.setAttribute("alt", animal.image_alt);

    var name = document.getElementById("name");
    var age = document.getElementById("age");

    name.innerText = "name: " +  animal.name;
    age.innerText = "age: " + animal.age;

    document.getElementById("saved-animal-btn").addEventListener("click", function() {
          // save the animal to the local storage
          localStorage.setItem("savedAnimal", JSON.stringify(animal));
    
          // if this button was clicked, hide button and show message to user
          document.getElementById("button-storage").style.display = "none";
          document.getElementById("button-action-text").textContent = "Saved!";
          document.getElementById("button-action-text").style.display = "block";
  }


    