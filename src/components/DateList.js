import DateShow from "./DateShow";
import { useState } from "react";
function DateList() {
  const [curDate, setCurDate] = useState(new Date());

  let changeDate = (date) => {
    setCurDate(date);
  };

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
    <div>
      <div>
        {curDate.getFullYear()}/{curDate.getMonth() + 1}
      </div>
      {renderedDates}
    </div>
  );
}

export default DateList;
