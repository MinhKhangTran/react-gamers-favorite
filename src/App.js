import { Navbar, GameDetail } from "./components";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/game/:id">
        <GameDetail />
      </Route>
    </div>
  );
}

export default App;
