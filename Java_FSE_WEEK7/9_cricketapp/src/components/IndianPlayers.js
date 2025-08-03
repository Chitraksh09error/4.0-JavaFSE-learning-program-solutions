import { players } from "./Players";

const IndianPlayers = () => {
  const OddPlayers = ([First, , Third, , Fifth]) => {
    return (
      <div>
        <li>First: {First.name}</li>
        <li>Third: {Third.name}</li>
        <li>Fifth: {Fifth.name}</li>
      </div>
    );
  };

  const EvenPlayers = ([Second, , Fourth, , Sixth]) => {
    return (
      <div>
        <li>Second: {Second.name}</li>
        <li>Fourth: {Fourth.name}</li>
        <li>Fifth: {Sixth.name}</li>
      </div>
    );
  };

  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const indianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Odd Players</h1>
      {OddPlayers(players)}

      <hr />

      <h1>Even Players</h1>
      {EvenPlayers(players)}

      <hr />

      <h1>List of Indian Players Merged: </h1>
      <ul>
        {indianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
