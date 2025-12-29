import React, { useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  width: 15vw;
  margin: 1rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: 1px solid #161e54;
  border-radius: 1rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    height: 15vh;
  }
`;

const CounterText = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
`;

const CounterButton = styled.button`
  border: 1px solid #f16d34;
  border-radius: 0.5rem;

  background-color: ${(props) => (props.primary ? "#FF986A" : "#ff783a")};
  color: #161e54;
  transition: all 0.2s;

  &:hover {
    background-color: #ff631a;
  }

  &:active {
    transform: scaleX(110%);
  }
`;

const CounterClass = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <CounterWrapper>
      <CounterText>Count : {count}</CounterText>
      <CounterButton primary onClick={increment}>
        +1
      </CounterButton>
      <CounterButton onClick={reset}>Reset</CounterButton>
    </CounterWrapper>
  );
};

export default CounterClass;

// import React, { Component } from "react";

// class CounterClass extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default CounterClass;
