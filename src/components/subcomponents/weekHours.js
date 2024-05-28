import { useEffect, useState } from "react";
import moment from "moment";
import React from "react";

let WeekHours = ({ data, title }) => {
    const [weekDays, setWeekDays] = useState(data.weekDays);
    const [isOpen, setIsOpen] = useState();
    useEffect(() => {
        const intervalId = setInterval(() => {
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
        sortedWeekDays[day] = weekDays[day];
        }

        setWeekDays(sortedWeekDays);

        // Check currently bushiness is open
        const now = new Date();
        const time = now.toLocaleTimeString("en-US", { hour12: false });
        const currentTime = time.slice(0, 5);



        setWeekDays(Object.keys(weekDays).reduce((acc, curr) => {
            let obj = { ...acc}
            if(weekDays[curr]) obj = { ...obj, [curr]: weekDays[curr]}
            return obj
        }, {}))

        
        if (weekDays[moment().format("dddd")]) {

            for (const hour of weekDays[moment().format("dddd")]) {

                // Check if the current time is between the "from" and "to" times

                if (hour.from < hour.to) {
                    if ((currentTime >= hour.from && currentTime <= hour.to)) {
                        setIsOpen(true);
                        // return;
                    }
                } else {
                    if ((currentTime >= hour.from && currentTime >= hour.from)) {
                        setIsOpen(true);
                        // return;

                    }
                }

            }
        }
        
        //console.log({weekDays})
        //console.log(moment().format("dddd"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 1000);
    }, []);


  return (<>
    <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
        <div className="flex flex-row justify-start items-center space-x-[8px] xs:space-x-[17px] w-full mb-[10px]">
            <div className="w-[35px] xs:w-[44px] h-[35px] xs:h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4311 15.6925C15.3001 15.6925 15.1681 15.6585 15.0471 15.5875L11.2771 13.3385C11.0511 13.2025 10.9111 12.9575 10.9111 12.6935V7.84546C10.9111 7.43146 11.2471 7.09546 11.6611 7.09546C12.0761 7.09546 12.4111 7.43146 12.4111 7.84546V12.2675L15.8161 14.2975C16.1711 14.5105 16.2881 14.9705 16.0761 15.3265C15.9351 15.5615 15.6861 15.6925 15.4311 15.6925Z" fill="#767C83"/>
                </svg>
            </div>
            <p className="font-medium text-sm xs:text-base sm:text-xl text-black" style={{fontFamily: data?.font_text}}>Open hours - <span style={{ color: isOpen ? 'green' : 'red', textAlign: 'left' }}>{weekDays && isOpen ? "Open Now" : "Closed"}</span></p>
        </div>
        <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
        <div className="flex flex-col items-center justify-center text-[10px] xs:text-sm sm:text-base w-full px-[10px] mb-[10px] mt-[20px] space-y-[px]">
            
            {Object.keys(weekDays).map((day, index) => (
                <div className="w-full space-y-[px]" key={index}>
                    <div className="flex flex-row items-start justify-between w-full" key={index}>
                        <div className="text-black" style={{fontFamily: data?.font_text}}>{weekDays[day].length > 0 || undefined ? day + " :" : ""}</div>
                        <div className="flex flex-col space-y-[5px]">
                            {weekDays[day]
                                ? weekDays[day].map(function (item, index) {

                                    return (
                                        <div key={index}>
                                            <p  className="text-[#767C83]" key={index + item.from + item.to} style={{fontFamily: data?.font_text}}>{moment(item.from, 'hh:mm a').format('hh:mm a')} -{" "}{moment(item.to, 'hh:mm a').format('hh:mm a')}</p>
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
