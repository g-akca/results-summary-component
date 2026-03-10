import SubmitButton from "./SubmitButton";

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