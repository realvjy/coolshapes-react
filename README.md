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

It's built with ES modules so it's completely tree-shakable.
Each icon can be imported as a react component.


Implementation of the coolshapes icon library for web applications.

```sh
npm install coolshapes-react
```

or

```sh
yarn add coolshapes-react
```
### Example

You can pass additional props to adjust the icon.

```js
import { Coolshape } from 'coolshapes-react';

const App = () => {
  return <Coolshape type="star" size={48} noise={true} />;
};

export default App;
```

```js
import { Star, Ellipse } from 'coolshapes-react';

const App = () => {
  return <Star index="1" size={48} noise={true} />;
};

export default App;
```

### Props

| name          | data type | default       |
| ------------- | --------  | ------------- |
| `size`        | _Number_  | 200           |
| `type`        | _String_  | currentColor  |
| `noise`       | _Boolean_ | true          |
| `index`       | _Number_  | random        |


### Props Value

If using 
```html
<Coolshape type={star} index={1} size={48} noise={true} />
```
| type          | index    |   default      |
| ------------- | -------- |  ------------- |
| `star`        | 1,2,..4  |  random        |
| `ellipse`     | 1,2,..12 |  random        |

