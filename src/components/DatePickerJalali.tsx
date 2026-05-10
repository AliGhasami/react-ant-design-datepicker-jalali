import { DatePicker   } from 'antd';
import React, { useState } from 'react';
//import dayjs from "dayjs";


function DatePickerJalali() {

    const [date, setDate] = useState(null);
    return (
        <>
            <DatePicker value={date} onChange={setDate}  />
        </>
    )
}

export default DatePickerJalali
