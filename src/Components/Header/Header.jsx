export default function Header() {
  return (
    <div className="shadow">
      <div className="container introduction-text ">
        <h1 className="intro1">
          Nasza firma oferuje najwyższej
          <br />
          jakości produkty.
        </h1>
        <h2 className="intro2">Nie wierz nam na słowo - sprawdź.</h2>
        <a href="#offer">
          <button className="btn">oferta</button>
        </a>
      </div>
    </div>
  );
}
