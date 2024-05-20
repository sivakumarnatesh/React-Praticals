import { AdminContext } from "./pages/ContextAPI/CreateContext";
import { Dashboard } from "./pages/ContextAPI/Dashboard";
import { Login } from "./pages/ContextAPI/Login";
import { Main } from "./pages/ContextAPI/Main";
import DropdownTask, { ColorDropdown } from "./pages/Dropdown";
import FormTask from "./pages/FormSubmission";
import { LetterTiles } from "./pages/LetterTiles/LetterTiles";
import { Game, QuizBuilder } from "./pages/QuizBuilder";
import SignalTask from "./pages/Signal";
import ToggleBtn, { LiveParagraph } from "./pages/ToggleBtn";
import { WeatherDashboard } from "./pages/WeatherDashboard";

function App() {
  return (
    <div className="App">
      {/* <DropdownTask /> */}
      {/* <SignalTask /> */}
      {/* <ToggleBtn /> */}
      {/* <ColorDropdown /> */}
      {/* <FormTask /> */}
      {/* <Main /> */}
      {/* <LiveParagraph /> */}
      {/* <LetterTiles /> */}
      {/* <QuizBuilder /> */}
      {/* <Game /> */}
      <WeatherDashboard />
    </div>
  );
}

export default App;
