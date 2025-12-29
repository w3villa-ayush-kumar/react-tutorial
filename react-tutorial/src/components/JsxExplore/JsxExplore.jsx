import React from "react";
import styled from "styled-components";

const GreetingWrapper = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 1rem;
  border-radius: 1rem;
`;

const JsxExplore = (props) => {
  const hours = 17;
  const date = "22nd Dec, 2025";

  return (
    <GreetingWrapper>
      {hours > 12 ? "Good Evening" : "Good Morning"} {props.name}, todays is{" "}
      {date}
    </GreetingWrapper>
  );
};

export default JsxExplore;
