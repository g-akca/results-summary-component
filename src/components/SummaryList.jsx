import SummaryItem from "./SummaryItem";
import "./SummaryList.css";
import data from "../data/data.json";

function SummaryList() {
  return (
    <section className="summary-list">
      {data.map((item, index) => (
        <SummaryItem key={index} category={item.category} score={item.score} icon={item.icon} />
      ))}
    </section>
  )
}

export default SummaryList;