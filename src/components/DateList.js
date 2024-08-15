import DateShow from "./DateShow";

function DateList({ curDate, changeDate }) {
  let startDate = new Date(curDate);
  startDate.setDate(startDate.getDate() - 3);

  let renderedDates = [];
  for (let i = 0; i < 7; i++) {
    let temp = new Date(startDate);
    temp.setDate(startDate.getDate() + i);
    renderedDates.push(
      <DateShow date={temp} curDate={curDate} changeDate={changeDate} key={i} />
    );
  }

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <b>
        {curDate.getFullYear()}/{curDate.getMonth() + 1}
      </b>

      <div className="columns">{renderedDates}</div>
    </div>
  );
}

export default DateList;
