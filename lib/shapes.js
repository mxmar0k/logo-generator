// oh boy, here we go
// with this code we define a set of classes in js for the triangle
//square and circle
// we use a base class and then we extend to the mentioned classes
// it is important to use set color, fill and render for the properties
// of the shapes (render is overrided to create the shapes)
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return '';
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="82" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Square, Circle };
  