import config from "../config.json";

function DateShow({ date, changeDate, curDate }) {
  let handleClick = () => {
    changeDate(date);
  };

  let displayDate = (
    <div>
      <div> {date.getDate()} </div>
      <div>{config.weekMapper[date.getDay()]}</div>
    </div>
  );

  if (date.getTime() === curDate.getTime()) {
    displayDate = <span className="has-text-weight-bold">{displayDate}</span>;
  }

  return (
    <div className="column">
      <button
        className="button is-warning "
        onClick={handleClick}
        style={{ "borderRadius": "50px" }}
      >
        <span className="has-text-weight-light">{displayDate}</span>
      </button>
    </div>
  );
}

export default DateShow;
