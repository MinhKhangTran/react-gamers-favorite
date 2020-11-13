import { Navbar, GameDetail } from "./components";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
