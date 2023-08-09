// this is the main codeeee for the node

//we first import the modules: fs, inquirer and the shapes on our library-lib
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes');

//the next step. we take a class with the arguments we need
//then we use a render method and the text element
//after we do that we pass the svg to a file using the fs
//if we succeded we get a console log with good news 

function generateSVG(shape, shapeColor, text, textColor) {
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fill="${textColor}">${text}</text>
    </svg>
  `;
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

//this is the inquirer part
//we give the user some prompts to enter and select text, color, shape and color
// then we call our generateSVG function to create and save the logo
//this function interacts with everything we made before 
async function run() {
  const shapeChoices = ['Triangle', 'Square', 'Circle'];

  const userInput = await inquirer.prompt([
    { type: 'input', name: 'text', message: 'Enter up to three characters:' },
    { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hexadecimal):' },
    { type: 'list', name: 'shape', message: 'Select a shape:', choices: shapeChoices },
    { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal):' },
  ]);

  let shape;
  if (userInput.shape === 'Triangle') {
    shape = new Triangle();
  } else if (userInput.shape === 'Square') {
    shape = new Square();
  } else {
    shape = new Circle();
  }

  shape.setColor(userInput.shapeColor);
  generateSVG(shape, userInput.shapeColor, userInput.text, userInput.textColor);
}

run();
