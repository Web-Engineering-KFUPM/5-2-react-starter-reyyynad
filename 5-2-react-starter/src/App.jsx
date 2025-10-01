import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
        </div>
      </main>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Student Info</h1>
      <StudentCard />
    </div>
  );
}

export default App;

  
