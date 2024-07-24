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
    displayDate = <b>{displayDate}</b>;
  }
  return <div onClick={handleClick}>{displayDate}</div>;
}

export default DateShow;
