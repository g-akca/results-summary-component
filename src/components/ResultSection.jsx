import "./ResultSection.css";

function ResultSection() {
  return (
    <section className="result-section">
      <h2>Your Result</h2>

      <div className="score-div">
        <p className="score-text">76</p>
        <p className="sub-text">of 100</p>
      </div>

      <div className="description-div">
        <h3>Great</h3>
        <p className="sub-text">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </section>
  )
}

export default ResultSection;