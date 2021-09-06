const list = [
  {
    id: 1,
    name: "snary pilton",
    position: "sløver",
    image:
      "https://www.adobe.com/express/create/profile-picture/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem fugiat, quam praesentium commodi officiis enim ducimus est ea temporibus,",
  },
  {
    id: 2,
    name: "pary dilton",
    position: "røver",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "sed laborum beatae? Architecto sint eveniet ipsum facilis aut expedita tempora magni asperiores vel dolores, doloribus temporibus ea modi omnis fugit,",
  },
  {
    id: 3,
    name: "hans-clemet",
    position: "øver",
    image:
      "https://image.freepik.com/free-photo/portrait-oktoberfest-man-wearing-traditional-bavarian-clothes_155003-30003.jpg",
    text: "quaerat voluptatum! Maiores nulla nihil rerum hic, velit deleniti nostrum voluptatibus nemo eveniet dicta, fugiat ipsa dolorem minus eos necessitatibus",
  },
];

const container = document.querySelector(".container");

let counter = 0;

const id = list[counter].id;
const personName = list[counter].name;
const position = list[counter].position;
const image = list[counter].image;
const text = list[counter].text;


function displayPerson() {
  container.innerHTML = `<div class="image-container">
    <img
      src="${image}"
      alt="random-image"
    />
  </div>
  <div class="name-and-position">
    <h2>${personName}</h2>
    <h3>${position}</h3>
  </div>
  <p class="text">
    ${text}
  </p>
  <div class="control-btns">
    <button class="prev-btn">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="next-btn">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
  <button class="random-btn">Random</button>
</div>`;

  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const randomBtn = document.querySelector(".random-btn");

  nextBtn.addEventListener("click", function () {
      counter++;
      displayPerson()
  });
}
displayPerson()

// function increment() {
//     counter++;
    
// }