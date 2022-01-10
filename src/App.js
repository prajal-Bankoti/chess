import "./App.css";
function App() {
  const data = [];
  for (let i = 1; i <= 8; i++) {
    data.push(i);
  }
  return (
    <div className="box">
      {data.map((e) => (
        <>
          <div
            style={{ background: e % 2 === 0 ? "white" : "black" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "black" : "white" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "white" : "black" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "black" : "white" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "white" : "black" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "black" : "white" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "white" : "black" }}
            className="box-1"
          ></div>
          <div
            style={{ background: e % 2 === 0 ? "black" : "white" }}
            className="box-1"
          ></div>
        </>
      ))}
    </div>
  );
}
export default App;
