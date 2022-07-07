import React from "react";
import ServiceRepeater from "./serviceRepeater/Repeater.js";
import FeatureRepeater from "./featureRepeater/Repeater.js";
import PdfRepeater from "./Pdf/PdfRepeater.js";
import './RepeaterContainer.css'

class RepeaterContainer extends React.Component {
  render() {
    return (
      <div>
        <FeatureRepeater className="FeatureRepeater" key={randId()} items={this.props.itemsA} title={this.props.titleA} />
        <ServiceRepeater key={randId()} items={this.props.itemsB} title={this.props.titleB} />
        <PdfRepeater className="PdfRepeater" title={this.props.titleC} PdfFile={this.props.PdfFile}/>
      </div>
    );
  }
}
export default RepeaterContainer;

function randId() {
  const randStr = () => Math.random().toString(36).substring(2, 8);
  const randStrByLength = (length) => {
    let result = "";
    do {
      result += randStr().substring(0, length > 6 ? 6 : length);
      length -= length > 6 ? 6 : length;
    } while (length);
    return result;
  };
  return (
    randStrByLength(8) +
    "-" +
    randStrByLength(4) +
    "-" +
    randStrByLength(4) +
    "-" +
    randStrByLength(4) +
    "-" +
    randStrByLength(12)
  );
}
