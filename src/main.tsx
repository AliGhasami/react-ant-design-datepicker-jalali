import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import dayjs from 'dayjs'
import locale from 'antd/locale/fa_IR';

import 'dayjs/locale/fa'
//import 'dayjs/locale/fa';
dayjs.locale('fa_IR');

import relativeTime from 'dayjs/plugin/relativeTime'
import timeZone from 'dayjs/plugin/timezone' // dependent on utc plugin
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc' // dependent on utc plugin
import weekday from 'dayjs/plugin/weekday' // dependent on utc plugin
import jalali from 'dayjalali'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
dayjs.extend(isSameOrAfter)
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timeZone)
dayjs.extend(weekday)
dayjs.extend(jalali)

export const dateLocale = {
    jalali: {
        fa: { months: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_') },
        en: {
            months:
                'Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand'.split(
                    '_',
                ),
        },
    },
    gregory: {
        fa: {
            months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        },
        en: {
            months:
                'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                    '_',
                ),
        },
    },
}


dayjs.calendar('jalali')
dayjs.updateLocale('en', {
    monthsShort: dateLocale['jalali'].fa.months,
    months: dateLocale['jalali'].fa.months,
    weekdays: [
        "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه",
        "پنج شنبه", "جمعه", "شنبه"
    ],
    weekdaysShort: [
        "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه",
        "پنج شنبه", "جمعه", "شنبه"
    ],
    weekdaysMin: [
        "ی", "د", "س", "چ",
        "پ", "ج", "ش"
    ]
})


/*
console.log("111111",{
    monthsShort: dateLocale['jalali'].fa.months,
    months: dateLocale['jalali'].fa.months,
})
*/



import App from './App.tsx'

function initApp(){
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    )

}


initApp()

