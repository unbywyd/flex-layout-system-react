# Introducing Flex Layout System React: Empowering Effortless Web Design

**Note**: This is a React version of the Flex Layout System library `flex-layout-system`, if you want use this library as web components, please visit the [Flex Layout System](https://www.npmjs.com/package/flex-layout-system)

Flex Layout System is a powerful library of web components designed to enhance web design development. It provides a range of flexible components for effortless layout creation and grid implementation. The primary objective of Flex Layout System is to simplify the process of building responsive layouts across different projects and frameworks.

Key advantages of Flex Layout System include its intuitive component names, which eliminate the need for complex div structures. The "flex-box" serves as the container, while the "flex-cell" acts as the adaptable building block within the grid. This simplicity improves efficiency and promotes cleaner, more maintainable code.

By importing Flex Layout System just once, you can seamlessly integrate it into any project and framework. The library offers well-designed components with thoughtful nesting, making it easy to customize gaps, grids, columns, and responsiveness. Additionally, the styles of these components are applied to the host element, allowing for effortless customization and overrides. Supplementary components are also included, providing efficient tools for rapid layout design with minimal CSS requirements.

**See more on official website**: [https://flex-layout-system.netlify.app/](https://flex-layout-system.netlify.app/)

## Get Started

If you want to use this library in your React project, you can use the following:

- You need to install a package for React `flex-layout-system-react`

```bash
npm install flex-layout-system-react
```

- Import the package in your React project

```js
import "flex-layout-system-react";
```

- Use the components in your React project

```jsx
import React from "react";
import {
  FlexBox,
  FlexCanvas,
  FlexGrid,
  FlexCell,
  StyleBox,
} from "flex-layout-system-react";

// If you want to use the responsive utilities based on CSS Media Queries, import the following:
// Note: Note that styles are imported from the flex-layout-system package
import "flex-layout-system/dist/css-responsive.min.css";

function App() {
  return (
    <FlexCanvas width="1200px">
      <FlexGrid gap="20px">
        <FlexBox>
          <FlexCell>
            <StyleBox bgc="#CCC" pd="20px"></StyleBox>
          </FlexCell>
          <FlexCell>
            <StyleBox bgc="#CCC" pd="20px"></StyleBox>
          </FlexCell>
        </FlexBox>
      </FlexGrid>
    </FlexCanvas>
  );
}

export default App;
```
