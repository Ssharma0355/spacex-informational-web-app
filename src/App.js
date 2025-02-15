import { Error, HomePage,Capsules } from "./pages";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Header } from "./components";
function App() {
  return (
<BrowserRouter >
<Header/>
<Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/capsule" element={<Capsules />}></Route>
  <Route path="*" element={<Error />}></Route>
</Routes>
</BrowserRouter> );
}

export default App;
