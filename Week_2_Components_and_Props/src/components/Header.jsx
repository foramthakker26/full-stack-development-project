function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">REACT PRACTICE</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;