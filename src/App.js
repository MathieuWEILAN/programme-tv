import "./App.css";
import logo from "./img/m6.png";
import data from "./data.json";
import Section from "./Section";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="" className="logo" />

      <div className="section">
        {data.map((elem, i) => {
          return (
            <Section
              time={elem.time}
              title={elem.title}
              type={elem.type}
              duration={elem.duration}
              image={elem.image}
              isUnseen={elem.isUnseen}
              direct={elem.direct}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
