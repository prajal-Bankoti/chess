import "./style.css";
import { Com } from "./com";
function Chess() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="box">
      {data.map((e) => (
        <>
          <Com value={e} />
          <Com value={e} />
          <Com value={e} />
          <Com value={e} />
        </>
      ))}
    </div>
  );
}

export default Chess;
