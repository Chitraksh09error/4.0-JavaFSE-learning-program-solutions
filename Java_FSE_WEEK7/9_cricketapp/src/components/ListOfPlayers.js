import { players } from "./Players";

const ListOfPlayers = () => {
  let player70 = players.filter((player) => player.score > 70);

  return (
    <div>
      <h1>List of Players</h1>
      {players.map((player, index) => (
        <div key={`${index}-${player.name}`}>
          <li>
            {player.name} {player.score}
          </li>
        </div>
      ))}

      <hr />

      <h1>List of Players having Score Less than 70</h1>
      {player70.map((player, index) => (
        <div key={`${index}-${player.name}`}>
          <li>
            {player.name} {player.score}
          </li>
        </div>
      ))}
    </div>
  );
};

export default ListOfPlayers;
