import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true
});

const chart = `
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
        style generate fill:orange
`

const Generate = () => {
    useEffect(() => {
        // Remove the processed attribute and reinitialize mermaid when chart changes
        const chartElement = document.getElementById("mermaid-chart");
        if (chartElement) {
            chartElement.removeAttribute("data-processed");
            mermaid.contentLoaded();
        }
    }, []);

    return (
        <div id="mermaid-chart" className="mermaid">
            {chart}
        </div>
    );
};

export default Generate;
