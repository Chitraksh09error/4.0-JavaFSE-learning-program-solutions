import { useParams } from "react-router-dom";

const TrainerDetails = ({ trainers }) => {
  const { trainerId } = useParams();

  const trainer = trainers.find((t) => t.trainerId === trainerId);

  if (!trainer) {
    return <div>Trainer not found!</div>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <div>
        <h3>{trainer.name}</h3>
        <p>
          <strong>ID:</strong> {trainer.trainerId}
        </p>
        <p>
          <strong>Email:</strong> {trainer.email}
        </p>
        <p>
          <strong>Phone:</strong> {trainer.phone}
        </p>
        <p>
          <strong>Technology:</strong> {trainer.technology}
        </p>
        <p>
          <strong>Skills:</strong> {trainer.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default TrainerDetails;
