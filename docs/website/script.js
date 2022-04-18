window.onload = () => {
    setScene();
    changePlanet();
};

var models = [ //array of the planets and their attributes
    {    
        url: 'assets/models/sun.gltf',
        scale: '0.5 0.5 0.5',
        name: 'The Sun',
        value: "The Sun is the center of our solar system. From planets to astroids, everything in our solar system revolves around the Sun. Being the only star in our solar system, the Sun is an important source for life on Earth.",
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/mercury.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Mercury',
        value: "Mercury is the closest planet from the Sun and the smallest planet in our solar system. It's a rocky planet with a solid surface and a thin atmosphere.",
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/venus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Venus',
        value: 'Venus is the second closest planet from the Sun. It has a toxic atmosphere and a very hot surface.',
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/earth.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Earth',
        value: "Earth is the third planet that orbits the Sun and is the fifth largest planet in the solar system. It has liquid on its surface.",
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/mars.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Mars',
        value: "Mars is the fourth planet from the Sun. It's a dusty, cold, desert world with a very thin atmosphere. ",
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/jupiter.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Jupiter',
        value: 'The fifth planet from the Sun is Jupiter and the largest planet in the solar system. It is a gas giant with an atmosphere made up of hydrogen and helium that contain clouds of ammonia and water.',
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/saturn.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Saturn',
        value: 'Saturn is the second largest planet and the sixth planet from the Sun. Saturn is another gaseous giant, famous for its large rings.',
        position: "-0.90 0 1.2",
    },
    {
        url: 'assets/models/uranus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Uranus',
        value: "Uranus is the seventh planet from the Sun. It's an ice giant four times larger than Earth with 13 known rings.",
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/neptune.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Neptune',
        value: 'Neptune is the furthest planet from the Sun. Like Uranus, Neptune is an ice giant that is dark and cold.',
        position: "-0.90 0 0.90",
    },
];

var modelIndex = 0;
var modelDesc = true;

function setScene() { //screates the initial scene
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker');

    let model = document.createElement('a-entity');

    model.setAttribute('id', 'planet');

    let anim = document.createElement('a-animation'); //create animation element

    //set rotation animation settings
    anim.setAttribute('attribute', 'rotation');
    anim.setAttribute('dur', '10000');
    anim.setAttribute('to', '0 360 0');
    anim.setAttribute('repeat', 'indefinite');
    anim.setAttribute('easing', 'linear');

    model.appendChild(anim); // adds the animation element within the entity/model element

    scene.appendChild(marker);    
    marker.appendChild(model);    
}

var newIndex;
function changePlanet() { //swaps through the different planets

    let entity = document.querySelector('#planet');

    newIndex = modelIndex % models.length;
   
    entity.setAttribute('gltf-model', models[newIndex].url);
    entity.setAttribute('scale', models[newIndex].scale);

    let description = document.querySelector('a-text')

    if (modelDesc == true) {
        description.setAttribute('value', models[newIndex].value) // set planet description   
    } else {
        description.setAttribute('value', '')
    }
   
    description.setAttribute('position', models[newIndex].position) // set text position 
  
    const div = document.querySelector('.name');
    div.innerText = models[newIndex].name;

    modelIndex++;
}

function hideDescription() { //hides/shows planet description
    let description = document.querySelector('a-text')
    if (modelDesc == true) {
        modelDesc = false;
        description.setAttribute('value', '')   
    } else {
        modelDesc = true;
        description.setAttribute('value', models[newIndex].value)
    }
}

