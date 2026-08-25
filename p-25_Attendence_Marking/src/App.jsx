import Cards from "../components/Cards";

function App() {
  return (
    <div>
      <h1>Attendance Marking</h1>

      <div>
        <Cards name="Student 1" roll_no="101" />
        <Cards name="Student 2" roll_no="102" />
        <Cards name="Student 3" roll_no="103" />
        <Cards name="Student 4" roll_no="104" />
        <Cards name="Student 5" roll_no="105" />
      </div>
    </div>
  );
}

export default App;