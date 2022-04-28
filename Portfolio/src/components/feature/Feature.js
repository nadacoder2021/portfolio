import React from "react";
import "./Feature.css";

function Feature({ title, text, style }) {
  return (
    <div className="gpt3__features-container">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1 style={style}>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
         <p>{text}</p>
      </div>
    </div>
   
  );
}
// export function MainFeature({ title, text }) {
//   return (
//     <div className="gpt3__features-container__feature">
//       <div className="gpt3__features-container__feature-title">
//         <div />
//         <h1>{title}</h1>
//       </div>
//       <div className="gpt3__features-container__feature-text">
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// }

export default Feature