function CourseCard({ title, description, level = "Beginner" }) {
  return (
    <article className="card course-card">
      <span className="badge">{level}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default CourseCard;