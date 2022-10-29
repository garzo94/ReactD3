import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloD3 from "./components/HelloD3";
import JSXCanvas from "./Cap3/JSXCanvas";
import HelloSVG from "./Cap3/HelloSVG";
import SimpleChart from "./Cap3/SimpleChart/SimpleChart";
import CircleWithD3Events from "./Cap3/CircleWithEvents/CircleWithD3Events";
import PulsatingCircle from "./Cap3/PulsatingCircle/PulsatingCircle";
import PulsatingCircleD3 from "./Cap3/PulsatingCircle/PulsatingCircle.D3";
import BasicLineChart from "./Cap4/LineChart/SimpleLineChart";
import BasicAreaChart from "./Cap4/BasicAreaChart/BasicAreaChart";
import BasicBarChart from "./Cap4/BasicBarChar/BasicBarChart";
import BasicPieChart from "./Cap4/BasicPieChart/BasicPieChart";
import BasicDonutChart from "./Cap4/BasicDonutChart/BasicDonutChart";
import BasicScatterChart from "./Cap4/BasicScatter/BasicScatter";
import Histogram from "./Cap4/Histogram/Histogram";
// import { Types } from "./Cap4/Histogram/types";
import * as d3 from "d3";
import HistogramWidget from "./widgets/HistrogramWidget/HistogramWidget";
import { RecoilRoot } from "recoil";
import WorldMapAtlas from "./Cap6/components/WorldMap/WorldMapAtlas";
import RotatingRoundWorldMapWithCoordinates from "./Cap6/components/WorldMap/RotatingRoundWorldMapWithCoordinates";
// Chapt 6
import { queue } from "d3-queue";
import { csv, json } from "d3-request";
import { FeatureCollection } from "geojson";
import { feature } from "topojson-client";
import WorldMap from "./Cap6/components/WorldMap";
import { Types } from "./Cap6/components/Types";
function App() {
  // const [data, setData] = React.useState([{ price: 0 }] as Types.Data[]);
  // useEffect(() => {
  //   if (data.length <= 1) {
  //     d3.dsv(",", "/data/historicalPrice.csv", (d) => {
  //       return {
  //         price: d.open as unknown as number,
  //       };
  //     }).then((d) => {
  //       setData(d);
  //     });
  //   }
  // });

  // Chapt 6
  const [mapData, setMapData] = useState<Types.MapObject>({ mapFeatures: [] });
  const [coordinatesData, setCoordinatesData] = useState<
    Types.CoordinatesData[]
  >([]);
  useEffect(() => {
    if (coordinatesData.length === 0) {
      const fileNames = ["./data/world-110m.json", "./data/coordinates.csv"];
      queue()
        .defer(json, fileNames[0])
        .defer(csv, fileNames[1])
        .await((error, d1, d2: Types.CoordinatesData[]) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log(`Houston we have a problem:${error}`);
          }
          setMapData({
            mapFeatures: (
              feature(d1, d1.objects.countries) as unknown as FeatureCollection
            ).features,
          });
          setCoordinatesData(d2);
        });
    }
  });

  //
  return (
    <div className="App">
      <header className="App-header">
        {/* <WorldMap
          mapData={mapData}
          coordinatesData={coordinatesData}
          scale={200}
          cx={400}
          cy={150}
          initRotation={50}
          rotationSpeed={0.5}
        /> */}
        <BasicLineChart
          top={10}
          right={50}
          bottom={50}
          left={50}
          width={900}
          height={400}
          fill="tomato"
        />
      </header>
    </div>
  );
}

export default App;
