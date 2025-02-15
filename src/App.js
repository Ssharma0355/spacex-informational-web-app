import { Error, HomePage } from "./pages";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter >
<Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="*" element={<Error />}></Route>
</Routes>
</BrowserRouter> );
}

export default App;
