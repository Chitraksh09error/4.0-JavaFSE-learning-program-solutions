import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => (decimal.toFixed(2) + "%")

const calcScore = (total, goal) => percentToDecimal(total / goal);

const CalculatorScore = ({Name, School, Total, Goal}) => (
  <div className="formatStyle">
    <h1><font color="brown">Student Details: </font></h1>

    <div className="Name">
      <b><span>Name: </span></b>
      <span>{Name}</span>
    </div>

    <div className="School">
      <b><span>School: </span></b>
      <span>{School}</span>
    </div>

    <div className="Total">
      <b><span>Total: </span></b>
      <span>{Total}</span>
      <span> Marks</span>
    </div>

    <div className="Score">
      <b>Score: </b>
      <span>
        {calcScore(Total, Goal)}
      </span>
    </div>
  </div>
)

export default CalculatorScore;