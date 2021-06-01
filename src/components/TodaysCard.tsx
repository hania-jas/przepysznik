//@ts-nocheck
import React from 'react';


const TodaysCard = ({src, description}) => {
return (
        <div className="todays">
          <img src={src} alt="" className="todaysPic"/>
        </div>
)
}

export default TodaysCard;