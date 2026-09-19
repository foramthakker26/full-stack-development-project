import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

function App() {
  const students = [
    {
      name: "Foram Thakker",
      role: "BCA Honours Student",
      skill: "React Development"
    },
    {
      name: "Aarav Patel",
      role: "Frontend Learner",
      skill: "JavaScript"
    },
    {
      name: "Diya Shah",
      role: "Web Developer",
      skill: "HTML & CSS"
    }
  ];

  return (
    <div className="app">
      <Header
        title="Components & Props"
        subtitle="Week 2 React Practice"
      />

      <main className="container">
        <section className="intro">
          <p className="tag">FULL STACK DEVELOPMENT - I</p>
          <h1>Reusable React Components</h1>
          <p>
            This project demonstrates how reusable components receive and
            display dynamic data through props.
          </p>
        </section>

        <section>
          <h2>Student Cards</h2>
          <div className="grid">
            {students.map((student) => (
              <StudentCard
                key={student.name}
                name={student.name}
                role={student.role}
                skill={student.skill}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Course Information</h2>
          <div className="grid">
            <CourseCard
              title="React Components"
              description="Build small and reusable UI sections."
              level="Beginner"
            />
            <CourseCard
              title="Props"
              description="Pass data from a parent component to a child component."
              level="Beginner"
            />
          </div>
        </section>
      </main>

      <Footer text="Week 2 React Practice • Components & Props" />
    </div>
  );
}

export default App;