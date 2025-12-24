# ReactJS Do’s and Don’ts – Code Standards

## Overview

This document summarizes essential **ReactJS best practices (Do’s and Don’ts)** to ensure clean, maintainable, performant, and secure React applications. These guidelines serve as a baseline coding standard for individual developers and teams.

---

## 1. Code Organization

### ✅ Do

- Group related functions, variables, and components together.
- Follow a **consistent folder structure** for components.
- Separate **stateful (container)** and **stateless (presentational)** components.
- Use **meaningful and descriptive names** for variables, functions, and components.
- Organize imports logically and alphabetically.
- Extract complex logic out of render methods.
- Keep JSX structure flat and readable.
- Use `PropTypes` (or TypeScript) to define component contracts.

### ❌ Don’t

- Mix unrelated logic in the same file.
- Create inconsistent or confusing folder structures.
- Write large, deeply nested JSX trees.
- Keep heavy logic inside render functions.
- Use inline styles excessively.

---

## 2. Style & Formatting

### ✅ Do

- Use arrow functions consistently.
- Maintain consistent indentation and formatting.
- Limit line length for better readability.
- Use consistent naming conventions (camelCase, PascalCase).
- Prefer destructuring for props and state.
- Always use curly braces for control blocks.
- Use `defaultProps` (or defaults) for optional props.

### ❌ Don’t

- Mix single and double quotes arbitrarily.
- Write overly complex ternary expressions.
- Leave outdated or unnecessary comments.
- Use ambiguous variable names like `x`, `data1`, `temp`.

---

## 3. Error Handling

### ✅ Do

- Provide meaningful and descriptive error messages.
- Use `try-catch` blocks for async operations.
- Handle promise rejections properly.
- Validate function arguments.
- Handle errors at the correct component level (e.g., Error Boundaries).
- Log errors for debugging and monitoring.
- Use specific error types when possible.
- Gracefully handle UI errors to avoid crashes.

### ❌ Don’t

- Ignore error handling in async code.
- Throw generic errors without context.
- Expose sensitive information in error messages.
- Use `try-catch` unnecessarily for known synchronous logic.

---

## 4. Documentation

### ✅ Do

- Write clear comments for complex logic.
- Use JSDoc for documenting functions and utilities.
- Keep README files up-to-date.
- Document external dependencies and versions.
- Provide usage examples where applicable.
- Document custom configurations and environment setup.

### ❌ Don’t

- Leave documentation outdated.
- Rely on code-only explanations for complex logic.
- Omit important setup or configuration details.

---

## 5. Testing & Quality Assurance

### ✅ Do

- Write unit tests for critical logic and components.
- Use testing frameworks like Jest.
- Use descriptive test names.
- Perform code coverage analysis.
- Use snapshot testing for UI components.
- Mock external dependencies in tests.
- Integrate tests into CI pipelines.
- Use linters and formatters (ESLint, Prettier).

### ❌ Don’t

- Skip testing critical user flows.
- Commit unformatted or lint-failing code.
- Maintain large, unfocused test suites.

---

## 6. Performance Optimization

### ✅ Do

- Use `React.memo`, `useMemo`, and `useCallback` wisely.
- Provide proper `key` props when rendering lists.
- Lazy load components and assets.
- Optimize image loading.
- Minimize expensive operations in render cycles.
- Use React DevTools Profiler for performance analysis.
- Defer non-essential scripts.

### ❌ Don’t

- Cause unnecessary re-renders.
- Use array index as keys.
- Load all components and assets upfront.
- Perform heavy computations directly in JSX.

---

## 7. Security Best Practices

### ✅ Do

- Use environment variables for secrets.
- Implement proper authentication and authorization.
- Keep dependencies up-to-date.
- Secure authentication tokens.
- Validate and sanitize user inputs.
- Use HTTPS and secure data transmission.
- Implement Content Security Policies (CSP).
- Apply rate limiting and least privilege access.

### ❌ Don’t

- Hardcode API keys or credentials.
- Store sensitive data in plain text.
- Trust client-side validation alone.
- Expose internal system details via errors.

---

## 8. Collaboration & Code Reviews

### ✅ Do

- Write clear and descriptive commit messages.
- Split large functions into smaller ones.
- Follow DRY principles.
- Use pull requests and branching strategies.
- Encourage constructive code reviews.
- Maintain an updated README.
- Regularly sync with the main branch.

### ❌ Don’t

- Push unreviewed code directly to main branches.
- Ignore feedback during reviews.
- Leave commented-out or dead code.

---

# Introduction to React.js

## What is React?

React.js is a **JavaScript library for building user interfaces**, mainly used for creating **Single Page Applications (SPAs)**. It helps developers build fast and scalable UIs using reusable components.

React focuses only on the **UI layer**, making it flexible to use with other tools for routing, state management, and APIs.

---

## Why Use React?

### Component-Based Architecture

- UI is broken into **small, reusable components**.
- Improves readability, reusability, and maintainability.

**Example:**

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

### Virtual DOM

- React uses a **Virtual DOM** to track UI changes.
- Only the required parts of the real DOM are updated.
- Results in better performance.

---

## Setting Up a React Project

### Create React App (CRA)

- Beginner-friendly
- Zero configuration
- Good for learning and quick demos

### Vite

- Faster build tool
- Instant dev server start
- Preferred for modern and production apps

---

## Single Page Application (SPA)

- Loads a **single HTML page**
- Content updates without full page reloads

**SPA vs Traditional Apps:**

- SPA → Faster navigation, smoother UX
- Traditional → Page reloads on every request

React is widely used to build SPAs.

---

## JSX & Rendering

### JSX

- HTML-like syntax inside JavaScript
- Makes UI code readable

**Example:**

```jsx
const name = "React";
return <h1>Hello {name}</h1>;
```

### Rendering Logic

- Components return JSX
- JavaScript expressions are written inside `{}`
- Used for conditional and list rendering

---

# React Project Folder Structure

## Why Folder Structure Matters

A clean and scalable folder structure:

- Improves **readability and maintainability**
- Makes large projects easier to scale
- Helps teams collaborate efficiently
- Reduces confusion when locating files

A well-structured React project grows gracefully as features increase.

---

## Common Base Folders

Typical folders used in most React projects:

```
src/
 ├── components/
 ├── pages/
 ├── assets/
 ├── hooks/
 ├── services/
 ├── context/
 └── App.jsx
```

### Folder Purpose

- **components/** → Reusable UI components (Button, Modal, Card)
- **pages/** → Page-level components (Login, Dashboard)
- **assets/** → Images, fonts, icons, styles
- **hooks/** → Custom React hooks
- **services/** → API calls and external services
- **context/** → Global state using React Context

---

## Organizing Components

### By Type (Small Projects)

```
components/
 ├── Button.jsx
 ├── Header.jsx
 └── Footer.jsx
```

- Simple and easy to understand
- Suitable for small or learning projects

### By Feature (Scalable Projects)

```
features/
 ├── auth/
 │   ├── Login.jsx
 │   ├── authService.js
 │   └── authContext.js
 └── dashboard/
     ├── Dashboard.jsx
     └── dashboardService.js
```

- Groups logic by feature
- Recommended for medium to large applications

---

## Absolute Imports (jsconfig.json)

Using absolute imports avoids long relative paths like `../../../`.

### Example: jsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

### Usage Example

```js
import Button from "components/Button";
```

This improves readability and reduces import errors.

---

## Naming Conventions & Best Practices

### Folder & File Naming

- Use **camelCase** for folders
- Use **PascalCase** for components
- Match component name with file name

**Example:**

```
components/
 └── UserCard/
     ├── UserCard.jsx
     └── UserCard.css
```

### Best Practices

- Keep reusable components inside `components/`
- Page-specific components stay inside `pages/`
- Avoid dumping everything into one folder
- One component = one folder (recommended for scalability)

---

# JavaScript (ES6+) Fundamentals

## Overview

Modern React development relies heavily on **ES6+ JavaScript features**. Understanding these concepts is essential for writing clean, readable, and efficient React code.

---

## let, const, and var

### Scope Differences

- **var** → Function-scoped (avoid using)
- **let** → Block-scoped, value can change
- **const** → Block-scoped, value cannot be reassigned

**Example:**

```js
if (true) {
  let count = 1;
  const name = "React";
}
// count and name are not accessible here
```

**Best Practice:** Prefer `const`, use `let` when reassignment is needed, avoid `var`.

---

## Arrow Functions

Arrow functions provide a shorter syntax and lexical `this` binding.

**Example:**

```js
const add = (a, b) => a + b;
```

Widely used in React components and callbacks.

---

## Template Literals

Used for string interpolation and multi-line strings.

**Example:**

```js
const user = "Ayush";
console.log(`Hello, ${user}`);
```

---

## Destructuring

Allows extracting values from objects and arrays easily.

**Example:**

```js
const user = { name: "React", version: 18 };
const { name, version } = user;
```

Commonly used for props and state in React.

---

## Modules (import / export)

Used to split code into reusable files.

**Example:**

```js
// utils.js
export const sum = (a, b) => a + b;

// app.js
import { sum } from "./utils";
```

Helps keep code modular and maintainable.

---

## Promises and async/await

Used for handling asynchronous operations like API calls.

### Promise Example

```js
fetch(url)
  .then((res) => res.json())
  .catch((err) => console.error(err));
```

### async/await Example

```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

`async/await` makes async code easier to read and debug.

---

## Spread and Rest Operators

### Spread Operator

Used to copy or merge arrays and objects.

```js
const nums = [1, 2, 3];
const newNums = [...nums, 4];
```

### Rest Operator

Used to collect multiple values.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

Very common in React for props and state updates.

---

# JSX and Component Architecture

## Overview

JSX and component architecture define **how React UIs are written, structured, and reused**. This document covers **both legacy patterns and modern React practices**, helping you understand existing codebases while writing up-to-date React applications.

---

## JSX Syntax

### What is JSX?

- JSX stands for **JavaScript XML**
- It allows writing HTML-like syntax inside JavaScript
- JSX is transpiled into plain JavaScript (using Babel)

**Example:**

```jsx
const element = <h1>Hello React</h1>;
```

Behind the scenes:

```js
React.createElement("h1", null, "Hello React");
```

---

## Functional vs Class Components

### Functional Components (Modern & Recommended)

- Simpler and easier to read
- Use **Hooks** for state and lifecycle
- Preferred in modern React development

```jsx
function Greeting() {
  return <h2>Hello!</h2>;
}
```

### Class Components (Legacy)

- Older React pattern
- Uses lifecycle methods like `componentDidMount`
- Still present in many existing codebases

```jsx
class Greeting extends React.Component {
  render() {
    return <h2>Hello!</h2>;
  }
}
```

**Modern Insight:** New React projects should favor functional components with hooks.

---

## Props and Component Composition

### Props

- Props are **inputs passed to components**
- Make components dynamic and reusable

```jsx
function User({ name }) {
  return <p>Hello, {name}</p>;
}
```

### Component Composition

- Components are combined to build complex UIs
- Encourages reuse instead of inheritance

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

---

## defaultProps (Legacy & Modern Usage)

### Legacy Usage

Used mainly with class components or older functional components.

```jsx
Button.defaultProps = {
  color: "blue",
};
```

### Modern Alternative

Use **default values in function parameters**.

```jsx
function Button({ color = "blue" }) {
  return <button style={{ color }}>Click</button>;
}
```

**Modern Insight:** Default parameters are preferred in functional components.

---

## PropTypes (Legacy Runtime Validation)

### What are PropTypes?

- Runtime type-checking for props
- Helps catch bugs during development
- Common in older and non-TypeScript projects

```jsx
import PropTypes from "prop-types";

User.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### Current Status

- **Not removed** from React
- Still supported
- Less commonly used in modern projects

---

## Modern Alternative: TypeScript

In modern React applications, **TypeScript** is preferred over PropTypes.

### Example with TypeScript

```tsx
type UserProps = {
  name: string;
};

function User({ name }: UserProps) {
  return <p>Hello, {name}</p>;
}
```

### Why TypeScript is Preferred

- Compile-time type checking
- Better IDE support and auto-completion
- No runtime overhead
- Scales better for large applications

---

## Building Reusable Components

### Best Practices

- Keep components small and focused
- Use props for configuration
- Avoid hardcoded values
- Prefer composition over inheritance
- Write components independent of pages

Reusable components improve consistency and reduce duplication.

---

# Event Handling and Forms

## Handling Events in React

React handles events using **camelCase syntax** and passes a synthetic event object.

### Common Events

- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`, `onKeyDown`

**Example:**

```jsx
function ClickButton() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}
```

---

## Handling Input Changes

React forms listen to user input using `onChange`.

```jsx
function InputExample() {
  const [name, setName] = React.useState("");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

---

## Controlled vs Uncontrolled Components

### Controlled Components (Recommended)

- Form data is controlled by React state
- Single source of truth

```jsx
function ControlledForm() {
  const [email, setEmail] = React.useState("");

  return <input value={email} onChange={(e) => setEmail(e.target.value)} />;
}
```

### Uncontrolled Components (Legacy / Limited Use)

- Form data handled by the DOM
- Uses `ref`

```jsx
function UncontrolledForm() {
  const inputRef = React.useRef();

  return <input ref={inputRef} />;
}
```

**Best Practice:** Prefer controlled components for validation and state management.

---

## Form Validation Patterns

### Basic Validation (Manual)

```jsx
function SimpleForm() {
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.email.value) {
      setError("Email is required");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Formik Basics

Formik is a popular library for handling **form state, validation, and submission**.

### Why Formik?

- Reduces boilerplate code
- Handles form state automatically
- Integrates easily with validation libraries

**Basic Example:**

```jsx
import { Formik, Form, Field } from "formik";

<Formik
  initialValues={{ email: "" }}
  onSubmit={(values) => console.log(values)}
>
  <Form>
    <Field name="email" />
    <button type="submit">Submit</button>
  </Form>
</Formik>;
```

---

## Yup Basics (Validation with Formik)

Yup is commonly used with Formik for schema-based validation.

```jsx
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email().required(),
});
```

Formik + Yup provides a clean and scalable solution for complex forms.

# React Hooks (Core and Custom)

## Core Hooks

### useState

Used to manage local component state.

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### useEffect

Handles side effects like API calls, subscriptions, and timers.

```jsx
React.useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Cleanup");
}, []);
```

- Runs after render
- Dependency array controls execution

---

### useRef

Stores mutable values without triggering re-renders.

```jsx
const inputRef = React.useRef(null);

<input ref={inputRef} />;
```

Common use cases:

- Accessing DOM elements
- Storing previous values

---

### useMemo

Optimizes expensive calculations.

```jsx
const total = React.useMemo(() => {
  return items.reduce((sum, i) => sum + i.price, 0);
}, [items]);
```

---

### useCallback

Prevents unnecessary function re-creation.

```jsx
const handleClick = React.useCallback(() => {
  console.log("Clicked");
}, []);
```

Useful when passing callbacks to memoized child components.

---

## Rules of Hooks

Hooks must follow these rules:

- Call hooks **only at the top level**
- Call hooks **only inside React functions**
- Never call hooks inside loops, conditions, or nested functions

Violating these rules can cause unpredictable behavior.

---

## Custom Hooks

Custom hooks allow reuse of logic across multiple components.

### Creating a Custom Hook

```jsx
function useToggle(initial = false) {
  const [value, setValue] = React.useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
```

### Using a Custom Hook

```jsx
const [isOpen, toggle] = useToggle();
```

Guidelines:

- Custom hooks must start with `use`
- Can use other hooks internally
- Focus on reusable logic, not UI

---

## Debugging Hook Issues

### Common Problems

- Missing dependencies in `useEffect`
- Infinite re-render loops
- Stale values in closures

### Debugging Tips

- Use React DevTools
- Enable `eslint-plugin-react-hooks`
- Review dependency arrays carefully
- Log values inside effects and callbacks
