//@ts-nocheck
import React from 'react';


const TodaysCard = ({src, description}) => {
return (
        <div className="todays todaysDarken">
          <img src={src} alt="" className="todaysPic"/>
          <div class="recipieTitle">{description}</div>
        </div>
)
}

export default TodaysCard;