import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SetupWrapper = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 1rem;
  border-radius: 1rem;
`;

const LangSetup = ({ lang, exp }) => {
  return (
    <SetupWrapper>
      User prefers {lang} programming language. <br />
      Experience - {exp} years
    </SetupWrapper>
  );
};

LangSetup.propTypes = {
  lang: PropTypes.number.isRequired,
  exp: PropTypes.number,
};

export default LangSetup;

// Class Component

// class LangSetup extends React.Component {
//   render() {
//     return (
//       <p>
//         User prefers {this.props.lang} programming language. <br />
//         Experience - {this.props.exp} years
//       </p>
//     );
//   }
// }

// Functional Component
