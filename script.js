const isLeapYear= (year)=>{
    return(
        (year%4==0&&year%100 !== 0 && year %400 !=0) || (year% 100==0 && year%400==0)
    );
};
const getFebDays=(year)=>{
    return isLeapYear(year) ? 29:28;
};
let calendar=document.querySelector('.calendar');
const month_names=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let month_picker= document.querySelector('#month-picker');
const dayTextFormat= document.querySelector('.day-text-format');
const timeFormat=document.querySelector('.time-format');
const dateFormat=document.querySelector('.date-format');

