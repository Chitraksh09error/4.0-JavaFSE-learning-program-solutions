import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TrainerList from "./components/TrainerList";
import TrainerDetails from "./components/TrainerDetails";
import { trainerMock } from "./components/TrainerMock";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h2>My Academy Trainers App</h2>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/trainers">Show Trainers</Link>
      </div>

      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route
          path={"/trainers"}
          element={<TrainerList trainers={trainerMock} />}
        />
        <Route
          path={"/trainers/:trainerId"}
          element={<TrainerDetails trainers={trainerMock} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
