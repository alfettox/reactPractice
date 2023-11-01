## Mapping and Props

- **Mapping**: Use `.map()` to go through the `housesForSale` array, creating a `HouseCard` component for each house.
- **Props**: Each `HouseCard` component receives the `key`, `houseData`, `index`, and `array` props. The `key` is a unique identifier, while `houseData` holds the specific data for each house. `index` and `array` indicate the element's position and the original array.

## Class Components and Functional Components

- **Class Components**: These use a class-based syntax and are suitable for components with complex logic, state management, and lifecycle methods. They were the original way to create components in React but are considered somewhat legacy.

```jsx
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return <div>Hello, React! (Class Component)</div>;
  }
}

export default ClassComponent;
Functional Components: These use a function-based syntax and are now the preferred approach in React. They are simpler, more concise, and can handle state and side effects using React hooks like useState and useEffect.
jsx
Copy code
import React from 'react';

function FunctionalComponent() {
  return <div>Hello, React! (Functional Component)</div>;
}

export default FunctionalComponent;