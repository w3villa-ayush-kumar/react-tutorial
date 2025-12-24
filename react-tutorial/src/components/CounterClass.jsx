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

import React, { useState } from "react";

const CounterClass = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default CounterClass;
