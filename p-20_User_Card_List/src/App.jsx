import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>User Card List:</h1>

      <UserCard
        name="Arman"
        email="arman@gmail.com"
        role="Frontend Developer"
      />
      <br />

      <UserCard
        name="Rahul"
        email="rahul@gmail.com"
        role="Backend Developer"
      />
<br />
      <UserCard
        name="Nazil"
        email="nazil@gmail.com"
        role="UI/UX Designer"
      />
<br />
      <UserCard
        name="Amit"
        email="amit@gmail.com"
        role="Full Stack Developer"
      />
    </div>
  );
}

export default App;