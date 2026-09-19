function StudentCard({ name, role, skill }) {
  return (
    <article className="card">
      <div className="avatar">{name.charAt(0)}</div>
      <h3>{name}</h3>
      <p>{role}</p>
      <span className="badge">{skill}</span>
    </article>
  );
}

export default StudentCard;