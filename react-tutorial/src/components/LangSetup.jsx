import React from "react";
import PropTypes from "prop-types";

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

const LangSetup = ({ lang, exp }) => {
  return (
    <p>
      User prefers {lang} programming language. <br />
      Experience - {exp} years
    </p>
  );
};

LangSetup.propTypes = {
  lang: PropTypes.number.isRequired,
  exp: PropTypes.number,
};

export default LangSetup;
