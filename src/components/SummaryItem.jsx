import "./SummaryItem.css";
import reactionLogo from "../assets/images/icon-reaction.svg";

function SummaryItem() {
  return (
    <div className="summary-item">
      <div>
        <img className="summary-logo" src={reactionLogo} alt="" />
        <p className="summary-type">Reaction</p>
      </div>
      
      <p className="summary-result">
        <span className="score">80</span>
        <span className="out-of">/ 100</span>
      </p>
    </div>
  )
}

export default SummaryItem;