// ------------------------------------------------------------
// Task 1 – Create a StudentCard Component
// ------------------------------------------------------------
// Scenario: The school needs a card to display a student’s details.

// 1. Inside the components folder, create a file called:
//    StudentCard.jsx

// 2. Inside StudentCard.jsx, create a React functional component named StudentCard.

// 3. The component should return a div that shows:
//    - Student’s name (use <h3> tag)
//    - Student’s id (use <p> tag)
//    - Student’s department (use <p> tag)
//    (For now, hardcode these values, e.g., Name: YOUR_NAME, ID: YOUR_STUDENT_ID, Department: YOUR_DEPARTMENT_NAME)

// Hints:
// - Use the function component syntax:
//   function StudentCard() {
//     return (
//       <div>
       
//       </div>
//     );
//   }

//   export default StudentCard;

// - To render this component inside your app, import it into App.jsx:
//   import StudentCard from './components/StudentCard';

//   function App() {
//     return (
//       <div>
//         <h1>Student Info</h1>
//         <StudentCard />
//       </div>
//     );
//   }

//   export default App;

// Expected Output:
// A simple card showing a student’s information.

// ------------------------------------------------------------

  function StudentCard() {
    return (
      <div>
       <h3>Name: Renad Elsafi</h3>
       <p>ID: 202276760</p>
       <p>Department: ICS</p>
      </div>
    );
  }