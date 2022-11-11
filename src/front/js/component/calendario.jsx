import React, { useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const Calendario = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
      };

      return (
        <div className="d-grid gap-2 col-6 mx-auto"
        style={{
            width: "100px",
            height: "400px",
            position: "relative",
            top: "80px",
            right:"120px",
            marginBottom: "120px",
            
          }}>
          <Calendar onChange={onChange} value={date} />
          {console.log(date)}
          {date.toString()}
        </div>
      );
    };