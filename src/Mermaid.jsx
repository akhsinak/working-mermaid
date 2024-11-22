import { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true
});

const Mermaid = ({ chart }) => {
  useEffect(() => {
    const chartElement = document.getElementById("mermaid-chart");
    if (chartElement) {
      chartElement.removeAttribute("data-processed");
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div id="mermaid-chart" className="mermaid">
      {chart}
    </div>
  );
};

export default Mermaid;
