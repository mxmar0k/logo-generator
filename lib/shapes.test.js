// this is the test based on the shapes.js code we have on this folder
//it is importan to run the test with npm test, it should say pass
//i think, this is the first time i do this, i want to cry
const { Triangle, Square, Circle } = require('./shapes');

describe('Shapes', () => {
  test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

});
