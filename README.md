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

# Routing with React Router

## Client-Side Routing

Client-side routing allows navigation **without full page reloads**. React updates the UI by rendering different components based on the URL.

Benefits:

- Faster navigation
- SPA experience
- Better state preservation between pages

---

## Setting Up React Router

React routing is handled using `react-router-dom`.

### Installation

```bash
npm install react-router-dom
```

### Basic Setup (v6+)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Modern Insight:** `Switch` is replaced by `Routes` in React Router v6.

---

## Navigation

### Using Link (Preferred)

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>;
```

### Programmatic Navigation

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/login");
```

**Legacy:** `useHistory` (v5) → replaced by `useNavigate` (v6).

---

## Dynamic Routes

Used when route parameters change dynamically.

```jsx
<Route path="/users/:id" element={<User />} />
```

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}
```

---

## Nested Routes

Nested routes help structure layouts.

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Used commonly for dashboards and admin panels.

---

## Redirects

### Modern Redirect (v6)

```jsx
import { Navigate } from "react-router-dom";

<Route path="/old" element={<Navigate to="/new" />} />;
```

### Legacy Redirect (v5)

- Used `<Redirect />`
- Replaced by `<Navigate />`

---

## Route Guards (Protected Routes)

Used to restrict access based on authentication.

```jsx
function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" />;
}
```

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuth={true}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

Common use cases:

- Authentication
- Role-based access control

# State Management (Context + Redux)

## Lifting State Up & Prop Drilling

### Lifting State Up

When multiple components need the same data, state is moved to their **closest common parent**.

```jsx
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Child count={count} setCount={setCount} />;
}
```

### Prop Drilling

Passing props through many layers just to reach a deep child.

```jsx
<Parent>
  <Level1 count={count} />
</Parent>
```

**Problem:** Hard to maintain and scale.

---

## Context API

Context solves prop drilling by providing **global data access**.

### Creating Context

```jsx
const ThemeContext = React.createContext();
```

### Providing Context

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

### Consuming with useContext

```jsx
const theme = React.useContext(ThemeContext);
```

**Use Case:** Theme, auth user, language, app-level settings.

---

## Redux Fundamentals

Redux is used for **predictable global state management**.

### Core Principles

- Single source of truth
- State is read-only
- Changes via pure reducers

---

## Redux Toolkit (Modern Redux)

Redux Toolkit (RTK) is the **official and recommended** way to use Redux.

### Store Setup

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

### Slice Example

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```

RTK reduces boilerplate and improves developer experience.

---

## Using Redux in React

```jsx
import { useSelector, useDispatch } from "react-redux";

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

dispatch(increment());
```

---

## Middleware Basics

Middleware handles **async logic and side effects**.

### Redux Thunk (Common & Simple)

```js
const fetchData = () => async (dispatch) => {
  const res = await fetch(url);
  const data = await res.json();
};
```

- Built into Redux Toolkit
- Easy to use

### Redux Saga (Advanced)

- Uses generator functions
- Better for complex workflows
- More setup and learning curve

**Modern Insight:** Prefer **Redux Toolkit + Thunk** for most applications.

# API Integration & Async Handling

## Fetching Data in React

React applications commonly interact with APIs to fetch or send data. This is usually done inside effects or async handlers.

---

## Using fetch API

Built-in browser API for HTTP requests.

```js
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### Async/Await with fetch

```js
async function getUsers() {
  const res = await fetch("https://api.example.com/users");
  return await res.json();
}
```

---

## Using Axios

Axios is a popular HTTP client with better defaults and interceptors.

```js
import axios from "axios";

axios
  .get("/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
```

### Why Axios?

- Automatic JSON parsing
- Interceptors for auth & errors
- Better error handling

---

## Handling Loading, Success & Error States

A common pattern when calling APIs.

```jsx
function Users() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return <pre>{JSON.stringify(data)}</pre>;
}
```

---

## AbortController (Request Cancellation)

Used to cancel ongoing API requests (important for cleanup).

```js
const controller = new AbortController();

fetch(url, { signal: controller.signal });

controller.abort();
```

### With useEffect

```jsx
React.useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => {
      if (err.name !== "AbortError") throw err;
    });

  return () => controller.abort();
}, []);
```

---

## Centralized Error Handling

### API Utility Function

```js
export async function apiRequest(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}
```

### Axios Interceptors

```js
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);
```

Centralized handling avoids repetitive error logic and keeps code clean.

# Component Styling Strategies

## Styling Approaches in React

React supports multiple styling strategies. The choice depends on team preference, scalability needs, and project complexity.

---

## CSS Modules

CSS Modules scope styles locally to components, avoiding class name collisions.

**Example:**

```css
/* Button.module.css */
.btn {
  background: blue;
  color: white;
}
```

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click</button>;
}
```

**Use when:** You want traditional CSS with component-level isolation.

---

## Tailwind CSS

Tailwind is a **utility-first CSS framework** used directly in JSX.

**Example:**

```jsx
function Card() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">Content</div>
  );
}
```

**Pros:**

- No separate CSS files
- Fast UI development
- Consistent design system

---

## Styled-Components

Styled-components use **CSS-in-JS**, allowing styles inside JavaScript.

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: purple;
  color: white;
`;
```

**Use when:** You want dynamic styling based on props and themes.

---

## Responsive Design

Responsive layouts adapt to different screen sizes.

### Media Queries

```css
.container {
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
```

### Tailwind Responsive Classes

```jsx
<div className="p-6 md:p-10 lg:p-16">Responsive Box</div>
```

---

## Theming & Dark Mode

### CSS Variable Approach

```css
:root {
  --bg: white;
}
[data-theme="dark"] {
  --bg: black;
}
```

```jsx
<div style={{ background: "var(--bg)" }} />
```

---

### Dark Mode Toggle (State-Based)

```jsx
function ThemeToggle() {
  const [dark, setDark] = React.useState(false);

  return <button onClick={() => setDark(!dark)}>Toggle Theme</button>;
}
```

### Tailwind Dark Mode

- Uses `dark:` variant
- Controlled via class or system preference

---

## Choosing the Right Strategy

- **CSS Modules** → Simple, scoped styling
- **Tailwind** → Fast, consistent UI development
- **Styled-components** → Dynamic, theme-driven styling

Most real-world projects use a combination based on needs.

# Testing React Applications

## Why Testing Matters

Testing ensures that your application:

- Works as expected
- Prevents regressions when code changes
- Improves confidence during refactoring
- Documents component behavior

In React, testing focuses on **how users interact with the UI**, not implementation details.

---

## Types of Testing

### Unit Testing

- Tests **individual functions or components** in isolation
- Fast and easy to maintain

**Example:** Testing a utility function

```js
expect(add(2, 3)).toBe(5);
```

---

### Integration Testing

- Tests **multiple components working together**
- More realistic than unit tests

**Example:**

- Form submission
- Component with API call + UI update

React Testing Library is mainly used for integration-style tests.

---

## Jest Basics

Jest is the default testing framework for React.

### Common Jest Functions

- `test` / `it`
- `expect`
- `describe`

```js
test("adds numbers", () => {
  expect(2 + 2).toBe(4);
});
```

---

## React Testing Library (RTL)

RTL tests components the way **users see and use them**.

### Basic Component Test

```jsx
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button", () => {
  render(<Button />);
  expect(screen.getByText(/click/i)).toBeInTheDocument();
});
```

### Query Priority

- `getByRole` (preferred)
- `getByLabelText`
- `getByText`

---

## Mocking Functions

Mock functions are used to track calls and behavior.

```js
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();
```

Common use cases:

- Event handlers
- Callback props

---

## Mocking API Calls

### Mocking fetch

```js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Test" }),
  })
);
```

### Mocking with Jest

```js
jest.mock("./api", () => ({
  getUsers: jest.fn(),
}));
```

Mocking ensures tests are **fast, reliable, and independent of real APIs**.

---

## Best Practices

- Test user behavior, not internal state
- Avoid testing implementation details
- Keep tests readable and focused
- Use mocks only where necessary

# Performance Optimization

## Why Performance Optimization Matters

Performance optimization helps React applications:

- Render faster
- Avoid unnecessary re-renders
- Improve user experience
- Scale efficiently as the app grows

Optimization should be applied **only when needed**, not prematurely.

---

## React.memo

`React.memo` prevents re-rendering of functional components when props do not change.

```jsx
const ListItem = React.memo(({ item }) => {
  return <li>{item}</li>;
});
```

**Use when:**

- Component renders frequently
- Props are stable

---

## useMemo

`useMemo` memoizes **expensive calculations**.

```jsx
const total = React.useMemo(() => {
  return items.reduce((sum, i) => sum + i.price, 0);
}, [items]);
```

**Use when:**

- Heavy computations
- Derived data based on dependencies

---

## useCallback

`useCallback` memoizes functions to avoid re-creation on each render.

```jsx
const handleClick = React.useCallback(() => {
  console.log("Clicked");
}, []);
```

Useful when passing callbacks to memoized child components.

---

## Lazy Loading Components

Lazy loading improves initial load time by loading components **only when needed**.

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

### Using Suspense

```jsx
<React.Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</React.Suspense>
```

Common use cases:

- Routes
- Heavy components

---

## Bundle Analysis

Bundle analysis helps identify **large or unnecessary dependencies**.

### Tools

- `source-map-explorer`
- Webpack bundle analyzer

Used to:

- Reduce bundle size
- Improve load performance

---

## Profiling with React DevTools

React DevTools Profiler helps measure:

- Component render time
- Re-render frequency

### When to Profile

- UI feels slow
- Frequent re-renders
- Before applying optimizations

Profiling helps apply optimizations where they matter most.

# Security in React Applications

## Understanding XSS in React

**Cross-Site Scripting (XSS)** occurs when malicious scripts are injected into a web application and executed in the browser.

### How React Helps

- React **automatically escapes values** rendered in JSX
- Prevents most common XSS attacks by default

```jsx
const name = "<script>alert(1)</script>";
return <p>{name}</p>; // Safe: script is escaped
```

### Risk Areas

- Using `dangerouslySetInnerHTML`
- Rendering untrusted HTML from APIs

```jsx
<div dangerouslySetInnerHTML={{ __html: html }} />
```

Use this only when absolutely necessary.

---

## Sanitizing User Inputs

User input should always be **validated and sanitized** before rendering or sending to APIs.

### Client-Side Validation

```jsx
if (!email.includes("@")) {
  setError("Invalid email");
}
```

### Sanitizing HTML Content

Use libraries like `DOMPurify` to clean unsafe HTML.

```js
import DOMPurify from "dompurify";
const cleanHTML = DOMPurify.sanitize(dirtyHTML);
```

**Note:** Client-side sanitization is helpful, but **server-side validation is mandatory**.

---

## Secure HTTP Headers & CSP

### Important Security Headers

- `Content-Security-Policy (CSP)`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Strict-Transport-Security`

### Content Security Policy (CSP)

CSP restricts where scripts and resources can load from.

```http
Content-Security-Policy: default-src 'self'
```

CSP significantly reduces XSS attack surface.

---

## Authentication Strategies

### JWT (JSON Web Token)

- Token-based authentication
- Common for SPAs
- Token sent with each request

**Best Practices:**

- Store tokens in **HTTP-only cookies**
- Avoid localStorage for sensitive tokens

---

### OAuth

- Delegated authentication (Google, GitHub, etc.)
- User never shares credentials with your app
- Often combined with JWT

**Common Flow:**

- OAuth provider authenticates user
- App receives access token

---

## Security Best Practices

- Never trust client-side data
- Avoid exposing secrets in frontend code
- Use HTTPS everywhere
- Keep dependencies up-to-date
- Handle errors without leaking sensitive info

# Accessibility (a11y) Best Practices

## What is Accessibility?

Accessibility (a11y) ensures that web applications can be **used by everyone**, including users with visual, auditory, motor, or cognitive disabilities.

Why it matters:

- Inclusive user experience
- Better usability for all users
- Legal and compliance requirements in many regions
- Improves SEO and overall quality

---

## Screen Readers & Assistive Technologies

Assistive technologies help users interact with web content:

- **Screen readers** (NVDA, VoiceOver)
- Screen magnifiers
- Keyboard navigation tools

Screen readers rely on **semantic HTML**, labels, and ARIA attributes to understand UI structure.

---

## WCAG Guidelines

WCAG (Web Content Accessibility Guidelines) define accessibility standards.

### Core Principles (POUR)

- **Perceivable** – Content can be seen or heard
- **Operable** – Interface works with keyboard
- **Understandable** – Clear and predictable behavior
- **Robust** – Compatible with assistive technologies

Common target: **WCAG 2.1 Level AA**

---

## Semantic HTML & ARIA

### Prefer Semantic HTML

```jsx
<button>Submit</button>
<nav>...</nav>
<header>...</header>
```

Semantic elements provide built-in accessibility.

### ARIA (Accessible Rich Internet Applications)

ARIA adds meaning when semantic HTML is not enough.

```jsx
<div role="alert" aria-live="assertive">
  Error occurred
</div>
```

**Rule:** Use ARIA only when native HTML cannot solve the problem.

---

## Keyboard-Friendly Interfaces

All interactive elements should be usable via keyboard.

Best practices:

- Use `Tab`-navigable elements
- Maintain visible focus states
- Avoid keyboard traps

```jsx
<button onKeyDown={handleKey}>Save</button>
```

Avoid using clickable `div` elements without keyboard support.

---

## Accessible Forms

### Labels and Inputs

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Error Messages

```jsx
<p role="alert">Email is required</p>
```

Best practices:

- Always associate labels with inputs
- Provide clear and descriptive error messages
- Do not rely on color alone to show errors

---

## Accessibility Testing Tools

### Lighthouse

- Built into Chrome DevTools
- Provides accessibility score and suggestions

### axe DevTools

- Browser extension
- Identifies accessibility issues in real time

### NVDA

- Free screen reader for Windows
- Used to test real user experience

Regular testing helps catch issues early and ensures ongoing accessibility compliance.
