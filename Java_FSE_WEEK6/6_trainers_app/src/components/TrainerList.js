import { Component } from "react";
import { Link } from "react-router-dom";

class TrainerList extends Component {
  render() {
    const { trainers } = this.props;

    return (
      <div>
        <h3>Trainers List</h3>

        <ul>
          {trainers.map((trainer) => (
            <li key={trainer.trainerId}>
              <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TrainerList;
