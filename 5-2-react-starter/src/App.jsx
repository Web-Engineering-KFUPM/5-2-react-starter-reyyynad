import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          { /* TODO: Import and render StudentCard components here */}

           
              <h1>Student Info</h1>
              <StudentCard name="Renad Elsafi" id="202276760" dept="ICS" />
              <StudentCard name="Yara Bukhari" id="202269880" dept="AE" />

    
        </div>
      </main>
    </div>
  );
}

export default App;
