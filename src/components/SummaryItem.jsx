import "./SummaryItem.css";

function SummaryItem({ category, score, icon }) {
  return (
    <div className={`summary-item ${category.toLowerCase()}`}>
      <div>
        <img className="summary-logo" src={icon} alt="" />
        <p className="summary-type">{category}</p>
      </div>
      
      <p className="summary-result">
        <span className="score">{score}</span>
        <span className="out-of">/ 100</span>
      </p>
    </div>
  )
}

export default SummaryItem;