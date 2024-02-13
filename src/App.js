// import { useEffect, useState } from "react";
import "./App.css";
// import { getSubDomains } from "./Subdomains";
// import { constants } from "./constants";
// import { Person1Page } from "./Pages";
// import { useLocation, useRoutes } from "react-router-dom";
import FetchingData from "./FetchingData";
import ManipulatingObject from "./ManipulatingObject";
// import DebounceCheck from "./DebounceCheck";
// import CorsCheck from "./CorsCheck";
// import ErrorBoundary from "./ErrorBoundary";

function App() {
  //  const DemoRoute = getSubDomains();
  //  const[value, setValue] = useState("");
  //  const location = useLocation();
  //   console.log(location);
  //   const routes = useRoutes();
  //   console.log(routes);

  // //  const handleChange = (e) => {
  // //   setValue(e.target.value);
  // //  }
  //  console.log({DemoRoute})
  //  const enterValue = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");
  //   constants.push({subDomain: value, main: false, app: Person1Page });
  //  }

  //  useEffect(() => {
  //  }, [value]);

  return (
    <div>
      {/* <ErrorBoundary> */}
      {/* <input value={value} onChange={handleChange} />
      <button onClick={enterValue}>Enter</button>
      {value}
      {constants.map((item, index)=> {
        return (
          <p>{index} {item.subDomain}</p>
          )
      })} */}
      {/* <DemoRoute /> */}
      {/* <FetchingData /> */}
      <ManipulatingObject />
      {/* <DebounceCheck /> */}
      {/* <CorsCheck name="freak" />
        <CorsCheck name="freak 1" />
        <CorsCheck name="freak 2" />
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
