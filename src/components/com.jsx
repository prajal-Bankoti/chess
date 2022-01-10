export function Com({ value }) {
  return (
    <>
      <div
        style={{ background: value % 2 === 0 ? "black" : "white" }}
        className="box-1"
      ></div>
      <div
        style={{ background: value % 2 === 0 ? "white" : "black" }}
        className="box-1"
      ></div>
    </>
  );
}
