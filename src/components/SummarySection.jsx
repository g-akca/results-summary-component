import SubmitButton from "./SubmitButton";
import SummaryList from "./SummaryList";
import "./SummarySection.css";

function SummarySection() {
  return (
    <section className="summary-section">
      <h2>Summary</h2>

      <SummaryList />
      
      <SubmitButton />
    </section>
  )
}

export default SummarySection;