import { useEffect, useState } from "react";
import moment from "moment";
import React from "react";
import useLanguage from "../../utils/useLanguage";

let WeekHours = ({ data, title }) => {
    const [weekDays, setWeekDays] = useState({});
    const [isOpen, setIsOpen] = useState();
    const t = useLanguage();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const checkIsOpen = (weekData)=>{

        moment.updateLocale("en", {
            invalidDate: ""
        });
        
        let currentTime = moment().format("HH:mm A");
        if (weekData[moment().format("dddd")].length > 0) {
            
            for (const hour of weekData[moment().format("dddd")]) {

                const from=  convertTo24HourFormat(hour.from);
                const to=  convertTo24HourFormat(hour.to);

                if (from < to && currentTime >= from && currentTime <= to) {
                    setIsOpen(true);
                    break;
                } else if (from === to) {
                    setIsOpen(true);
                    break;
                } else {
                    setIsOpen(false);
                }
            }
        }else{
            setIsOpen(false);
        }
    }

    function convertTo24HourFormat(timeString) {
        if (timeString.includes('AM') || timeString.includes('PM')) {
            const [time, period] = timeString.split(' ');
            const [hour, minute] = time.split(':');
            var formattedHour = hour;
            if (period === 'PM') {
                if (hour === 12) {
                    formattedHour = hour;
                } else {
                    formattedHour = parseInt(hour);
                    formattedHour += 12;
                }
            } else {
                if (hour === 12) {
                    formattedHour = '00';
                }
            }
            var outputTime = `${formattedHour}:${minute}`;
        } else {
            var outputTime = timeString;
        }
        return outputTime;
    }

    useEffect(() => {
        const weekData = data?.weekDays;
        const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ];
        const today = new Date().getDay();
        const sortedWeekDays = {};

        for (let i = 0; i < 7; i++) {
            const day = daysOfWeek[(today + i) % 7];
            sortedWeekDays[day] = weekData[day];
        }

        setWeekDays(sortedWeekDays);
        setWeekDays(Object.keys(weekData).reduce((acc, curr) => {
            let obj = { ...acc}
            if(weekData[curr]) obj = { ...obj, [curr]: weekData[curr]}
            return obj
        }, {}))

        // Check currently bushiness is open
        checkIsOpen(weekData)
        // Check bushiness is open in every second
        const interval = setInterval(()=>checkIsOpen(weekData),1000);
        return ()=>clearInterval(interval)
    }, [data]);

  return (<>
    <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]" style={{marginTop: data?.companyLogo != '' ? '0px' : '20px'}}>
        <div className="flex flex-row justify-start items-center space-x-[8px] xs:space-x-[17px] w-full mb-[10px]">
            <div className="w-[30px] xs:w-[44px] h-[30px] xs:h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4311 15.6925C15.3001 15.6925 15.1681 15.6585 15.0471 15.5875L11.2771 13.3385C11.0511 13.2025 10.9111 12.9575 10.9111 12.6935V7.84546C10.9111 7.43146 11.2471 7.09546 11.6611 7.09546C12.0761 7.09546 12.4111 7.43146 12.4111 7.84546V12.2675L15.8161 14.2975C16.1711 14.5105 16.2881 14.9705 16.0761 15.3265C15.9351 15.5615 15.6861 15.6925 15.4311 15.6925Z" fill="#767C83"/>
                </svg>
            </div>
            <p className="font-medium text-[13px] xs:text-base sm:text-xl text-black" style={{fontFamily: data?.font_text}}>{t('bushiness.open_hours')} - <span style={{ color: isOpen ? 'green' : 'red', textAlign: 'left' }}>{weekDays && isOpen ? t('global.open_now') : t('global.closed')}</span></p>
        </div>
        <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
        <div className="flex flex-col items-center justify-center text-[10px] xs:text-sm sm:text-base w-full px-[10px] mb-[10px] mt-[20px] space-y-[px]" id="openingBlock">
            
            {Object.keys(weekDays).map((day, index) => (
                <div className="w-full space-y-[px]" key={index}>
                    <div className="flex flex-row items-start justify-between w-full" key={index}>
                        <div className="text-black" style={{fontFamily: data?.font_text}}>{weekDays[day].length > 0 || undefined ? t(`bushiness.${day.toLowerCase()}`) + " :" : ""}</div>
                        <div className="flex flex-col space-y-[5px]">
                            {weekDays[day]
                                ? weekDays[day].map(function (item, index) {
                                    return (
                                        <div key={index}>
                                            <p  className="text-[#767C83]" key={index + item.from + item.to} style={{fontFamily: data?.font_text}}>{moment(item.from, "hh:mm a").format("hh:mm a")} -{" "}{moment(item.to, "hh:mm a").format("hh:mm a")}</p>
                                        </div>
                                    );
                                })
                            : ""}
                        </div>
                    </div>
                    {index !== Object.keys(weekDays).length - 1 && weekDays[day].length > 0 && 
                        <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full my-[10px]" style={{marginTop: "10px", marginBottom: "10px"}}></div>
                    }
                </div>
            ))}
        </div>
    </div>
  </>
  );
};

export default WeekHours;
