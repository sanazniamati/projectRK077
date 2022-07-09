import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

// const SVG =
//   '<svg width="207px" height="142px" x="0px" y="0px" viewbox="0 0 207 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="207" height="142" style="fill:#ffffff;"></rect><g transform="translate(10, 10)" style="fill:#000000;"><rect x="22" y="0" width="1.5" height="100"></rect><rect x="24.25" y="0" width="0.75" height="100"></rect><rect x="26.5" y="0" width="0.75" height="100"></rect><rect x="30.25" y="0" width="0.75" height="100"></rect><rect x="31.75" y="0" width="3" height="100"></rect><rect x="36.25" y="0" width="0.75" height="100"></rect><rect x="38.5" y="0" width="0.75" height="100"></rect><rect x="41.5" y="0" width="3" height="100"></rect><rect x="45.25" y="0" width="0.75" height="100"></rect><rect x="46.75" y="0" width="3" height="100"></rect><rect x="50.5" y="0" width="2.25" height="100"></rect><rect x="53.5" y="0" width="0.75" height="100"></rect><rect x="55" y="0" width="0.75" height="100"></rect><rect x="56.5" y="0" width="1.5" height="100"></rect><rect x="59.5" y="0" width="0.75" height="100"></rect><rect x="63.25" y="0" width="2.25" height="100"></rect><rect x="66.25" y="0" width="0.75" height="100"></rect><rect x="67.75" y="0" width="1.5" height="100"></rect><rect x="71.5" y="0" width="0.75" height="100"></rect><rect x="73.75" y="0" width="0.75" height="100"></rect><rect x="75.25" y="0" width="1.5" height="100"></rect><rect x="79.75" y="0" width="1.5" height="100"></rect><rect x="82.75" y="0" width="0.75" height="100"></rect><rect x="84.25" y="0" width="0.75" height="100"></rect><rect x="88" y="0" width="0.75" height="100"></rect><rect x="90.25" y="0" width="3" height="100"></rect><rect x="94.75" y="0" width="0.75" height="100"></rect><rect x="96.25" y="0" width="0.75" height="100"></rect><rect x="97.75" y="0" width="1.5" height="100"></rect><rect x="100.75" y="0" width="0.75" height="100"></rect><rect x="104.5" y="0" width="0.75" height="100"></rect><rect x="106" y="0" width="2.25" height="100"></rect><rect x="109" y="0" width="3" height="100"></rect><rect x="112.75" y="0" width="0.75" height="100"></rect><rect x="114.25" y="0" width="1.5" height="100"></rect><rect x="117.25" y="0" width="2.25" height="100"></rect><rect x="121" y="0" width="0.75" height="100"></rect><rect x="124" y="0" width="0.75" height="100"></rect><rect x="125.5" y="0" width="1.5" height="100"></rect><rect x="129.25" y="0" width="1.5" height="100"></rect><rect x="132.25" y="0" width="0.75" height="100"></rect><rect x="134.5" y="0" width="0.75" height="100"></rect><rect x="137.5" y="0" width="3" height="100"></rect><rect x="142" y="0" width="0.75" height="100"></rect><rect x="143.5" y="0" width="0.75" height="100"></rect><rect x="145.75" y="0" width="1.5" height="100"></rect><rect x="148" y="0" width="1.5" height="100"></rect><rect x="150.25" y="0" width="1.5" height="100"></rect><rect x="154" y="0" width="1.5" height="100"></rect><rect x="157.75" y="0" width="2.25" height="100"></rect><rect x="160.75" y="0" width="0.75" height="100"></rect><rect x="162.25" y="0" width="1.5" height="100"></rect><text style="font: 20px monospace" text-anchor="start" x="0" y="122">someValue12340987</text></g></svg>';
// const url = "data:image/svg+xml;base64," + window.btoa(SVG);
const url = "./turtle.svg";
const UrlImage = () => {
  const [image] = useImage(url);
  return <Image image={image} />;
};

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <UrlImage />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
