import React from "react";
import Item from "./Item";
import OddItem from "./OddItem";
import "./Repeater.css";

class FeatureRepeater extends React.Component {
  
  render() {
    let arrayOfIconsAndNames = this.props.items;
    let pairs = arrayOfIconsAndNames.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        return [...result, array.slice(index, index + 2)];
      }
      return result;
    }, []);
    console.log(pairs);
      return (
        <ul className="repeater">
          <h2 className="featureTitle">
            {this.props.title}
          </h2>
          {pairs.map((x) => (
            <div key={randId()} className="gridItems">
              {(x.length%2 === 0) && <Item className="item2" icon={x[0].icon} iconName={x[0].iconName} />}
              {(x.length%2 === 0) && <Item className="item1" icon={x[1].icon} iconName={x[1].iconName} />}
              <div className="oneItem">
                {(x.length%2 === 1) &&<OddItem className="item2" icon={x[0].icon} iconName={x[0].iconName} />}
              </div>
            </div>
          ))}
        </ul>
      );
    }
}
export default FeatureRepeater;

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
