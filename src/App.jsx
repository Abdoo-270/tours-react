import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import tours from "./data";
const App = () => {
  const [data, setData] = useState(tours);
  const [loading, setLoading] = useState(false);

  const deleteItem = (id) => {
    const newList = data.filter((item) => {
      return item.id !== id;
    });
    setData(newList);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => setData(tours)}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={data} deleteItem={deleteItem} />
    </main>
  );
};
export default App;
