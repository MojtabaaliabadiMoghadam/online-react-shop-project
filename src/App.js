import { Switch , Route } from "react-router-dom";
import Login from "./pages/login";

import Home from "./pages/home";
import { useAuthState } from "./Context/auth-context";


function App() {
 const {token} =  useAuthState();
  return (
  <>
  <Switch>
    <Route exact path="/">
    {token ? <Home/> : <Login/>}
    </Route>
    <Route path="/login">
     <Login/>
    </Route>

  </Switch>
  </>
  );
}

export default App;
