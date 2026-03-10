import ResultSection from './components/ResultSection';
import SummarySection from './components/SummarySection';
import SubmitButton from './components/SubmitButton';
import './App.css';

function App() {
  return (
    <main className="card">
      <ResultSection />

      <div>
        <SummarySection />
        <SubmitButton />
      </div>
    </main>
  )
}

export default App;
