import App from "./App";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact></Route>
        <Route path="/game" element={<Game />} exact></Route>
      </Routes>
    </Router>
  );
}
export default AppRoute;