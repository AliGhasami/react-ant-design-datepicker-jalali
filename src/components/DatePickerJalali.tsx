import { DatePicker as DatePickerAnt  } from 'antd';
import generatePicker from "antd/es/date-picker/generatePicker";
import dayjsGenerateConfig from "@rc-component/picker/generate/dayjs";
import React, { useState } from 'react';
//import dayjs from "dayjs";





//dayjs.calendar(calendar)
/*setTimeout(()=>{

},6000)*/

/*setTimeout(()=>{
    console.log("11111",dayjs().format())

},4000)*/


//const DatePicker = generatePicker(dayjsGenerateConfig);

function DatePickerJalali() {

    const [date, setDate] = useState(null);

    function test(data){
        console.log("eeee",data)
    }



    return (
        <>
           {/* 1111111*/}
            {date?.format('dd')}
            <DatePicker value={date} onChange={setDate}  />
         {/*   <DatePickerAnt />*/}
           {/* <DatePicker />*/}
        </>
    )
}

export default DatePickerJalali
