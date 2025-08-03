import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";

const App = () => {
  var flag = false;

  return <div>{flag ? <ListOfPlayers /> : <IndianPlayers />}</div>;
};

export default App;
