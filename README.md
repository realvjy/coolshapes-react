# <p align=center>Coolshapes</p>
<p align="center">
  <a href="https://github.com/realvjy/coolshapes-react/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/coolshapes-react" alt="license"></a>
  <a href="https://www.npmjs.com/package/coolshapes-react"><img src="https://img.shields.io/npm/v/coolshapes-react" alt="npm package"></a>

</p>


### What & Why?
A simple, fun project for the sake of creating some cool-looking abstract shapes with little grainy gradients crafted by [@realvjy](https://x.com/realvjy). Coolshapes is a completely open-source set of 100+ abstract shapes crafted for any design and development projects. Free for both commercial and personal use. Licensed under MIT.


## Table of Contents

- [Usage](#usage)
  - [React](#react)
- [Contributing](#contributing)
- [Community](#community)
- [License](#license)
- [Credits](#credits)
- [Sponsors](#sponsors)

## Usage

At its core, Coolshapes is a collection of [SVG](https://coolshap.es) files. This means that you can use this in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). 

The following are ways you can use Coolshapes.



# Coolshapes React

Implementation of the coolshapes icon library for react applications.


## How to use


Implementation of the coolshapes icon library for web applications.

```sh
npm install coolshapes-react
```

or

```sh
yarn add coolshapes-react
```
### Example

There's a global component and component for each category of shapes. You can pass additional props to adjust the shape. These components extend from SVG elements, so they support all the props available in a SVG element.

```js
import { Coolshape } from 'coolshapes-react';

const App = () => {
  return <Coolshape type="star" index={0} size={48} noise={true} />;
};

export default App;
```

You can import the component for specific category and simply pass the index of the shape.
```js
import { Star } from 'coolshapes-react';

const App = () => {
  return <Star index={0} size={48} />;
};

export default App;
```
#### Generating random shapes.
 setting the `random` [prop](#props)  to true or leaving the `index` or `type` prop empty would replace the shape with a random shape every time it renders.
```js
// renders a random shape from any category
const Component = () => {
  return <Coolshape random={true}/>;
};
// renders a shape from the category star
const Component2 = () => {
  return <Coolshape type="star" random={true} />;
};
```

Using random shape function.
```js
import { getRandomShape } from 'coolshapes-react';
```
```js
getRandomShape() // returns a random shape component
```
```js
getRandomShape({type:"ellipse"}) // returns a random shape component from the category ellipse
```
```js
getRandomShape({onlyId: true}) // returns shape identifier that can passed as props to the shape component
// {shapeType, index}
```
```js
getRandomShape({onlyId: true, type:"star"}) // returns shape identifier that can passed as props to the shape component
// {shapeType: "star", index}
```

#### others
all the components are mapped from object that we have given you access to

```js
const shapes = {
  star: [Star1, Star2, ...],
  ellipse: [Ellipse1, Ellipse2, ...],
  ...
}
```

renders the shapes from all catagories
```jsx
import { shapes } from 'coolshapes-react'

const ShapeGrid = () => {
  return (
    <>
      { 
        Object.keys(shapes).map((shapeType, _) =>{
        return shapes[shapeType].map((Shape, index)=>{
          return <Shape size={48}/>
        })
      })}
    </>
  )
};

```
###### syntax
```js
shapes[type][index]
```
```js
const starComponents = shapes['star']
const StarComponent1 = starComponents[0]
```

### Props

| name          | data type | default       | description   |
| ------------- | --------  | ------------- | ------------- |
| `size`        | _Number_  | 200           | The dimension of shape   |
| [`type`](#categories)        | _String_  | random        | The category of shapes, if left empty it would randomly select a category. |
| `noise`       | _Boolean_ | true          | Whether to add noise to the shape or not. |
| `index`       | _Number_  | random        | The index of shape within the shape [category](#categories), it will randomly select a shape from the category if type prop given  |
| `random`     | _Boolean_ | false          | If set true it would select a random component |

Notes:
- Index starts from number 0, so if you want to retrive the first shape of any category, you would use the index number 0.

### Categories

| type          | shapes    |
| ------------- | --------  |
| `star`        | 12        |  
| `ellipse`     | 12        |  


### others
we have have provide the `cjs`, `umd` and `es` build versions of the module,

#### cjs

```js
const Coolshapes = reqiore("coolshapes-react")
```
using with react in the browser

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/coolshapes-react@0.0.5-alpha.1/dist/umd/coolshapes.js"></script>
  </head>
  <body>
  <div id="root"></div>
  <script type="text/babel">
    const domContainer = document.querySelector('#root');
    const root = ReactDOM.createRoot(domContainer);
    const coolshapes = window.coolshapes;
    const Coolshape = coolshapes.Coolshape;
    root.render(<Coolshape/>);
  </script>
  </body>
</html>
```
