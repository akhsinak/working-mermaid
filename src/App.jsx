// import React from 'react';
import Mermaid from './Mermaid';
import { useState, useEffect } from 'react';
import "./App.css"

import { CSSTransition } from 'react-transition-group';
import Generate from './components/generate';
import WebSearch from './components/web_search';

import Gen from "./assets/gen.png"
import TQ from "./assets/tq.png"


let i = 0;
const App = () => {

  const chart3Initial = `
  ---
title: Hello Title
config:
  theme: forest
---
%%{init: {'flowchart': {'curve': 'linear'}}}%%
graph TD;
        __start__([<p>__start__</p>]):::first
        web_search(web_search )
        retrieve(retrieve)
        grade_documents(grade_documents)
        generate(generate)
        transform_query(transform_query)
        finance_agent(finance_agent)
        reasoning_agent(reasoning_agent)
        __end__([<p>__end__</p>]):::last
        finance_agent --> reasoning_agent;
        reasoning_agent --> generate;
        retrieve --> grade_documents;
        transform_query --> retrieve;
        web_search --> generate;
        __start__ -.-> web_search;
        __start__ -. &nbsp;vectorstore&nbsp; .-> retrieve;
        grade_documents -.-> transform_query;
        grade_documents -. &nbsp;not_answerable&nbsp; .-> finance_agent;
        grade_documents -.-> generate;
        generate -. &nbsp;useful&nbsp; .-> __end__;
        generate -. &nbsp;not useful&nbsp; .-> transform_query;
        generate -. &nbsp;stop&nbsp; .-> __end__;
        generate -. &nbsp;not supported&nbsp; .-> generate;
        classDef default fill:#f2f0ff,line-height:1.2
        classDef first fill-opacity:0
        classDef last fill:#bfb6fc
        style grade_documents fill:lightblue
`

  const chart = `
flowchart TD
    A["<button?>Christmas</button?"] -- Get money --> B("Go shopping")
    B --> C{"Let me think"}
    C -- One --> D["Laptop"]
    C -- Two --> E["iPhone"]
    C -- Three --> F["fa:fa-car Car"]
    style B fill:#D50000,color:#FFFFFF
    linkStyle 0 stroke:#BBDEFB
    linkStyle 1 stroke:#00C853,fill:none
    linkStyle 2 stroke:#00C853,fill:none
    linkStyle 4 stroke:#AA00FF,fill:none
`

  const [chart3, setChart3] = useState(chart3Initial);
  const [chartKey, setChartKey] = useState(0); // Key to force re-render


  const addLineToChart = (newLine) => {
    setChart3((prevChart) => `${prevChart}\n${newLine}`);
    setChartKey((prevKey) => prevKey + 1); // Increment key to trigger re-render

  };


  const arrStr = ["style web_search fill:orange", "style generate fill:orange", "style transform_query fill:orange"]
  const handleChangeColor = () => {
    if (i < 3)
      addLineToChart(arrStr[i++]);
  };

  const [comp, setcomp] = useState(1)



  return (
    <div className='rootContainer'>
      {/* <h2>Mermaid Diagram</h2> */}
      <div className='container'>
        <Mermaid chart={chart3} />

      </div>
      <button onClick={handleChangeColor}> click me to change generate color</button>

      {/* {comp === 1 && <Generate />} */}
      {/* {comp === 0 && <WebSearch />} */}


      {/* {comp === 1 && <img src={Gen} alt="" height="100%" />}
      {comp === 0 && <img src={TQ} alt="" height="100%" />}
      <button onClick={() => { setcomp(1 - comp) }}>Click Me</button> */}




      {/* <pre>{chart3}</pre> */}
    </div >
  );
};

export default App;
