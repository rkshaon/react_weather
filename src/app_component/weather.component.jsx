import React from 'react';

const Weather = (props) => {
    return(
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;C</h1>) : null}
                {/** show max and min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max){
    if(min && max){
        return(
            <h3>
              <spa className="px-4">{min}&deg;C</spa>
              <spa className="px-4">{max}&deg;C</spa>
            </h3>
        );
    }    
  }

export default Weather;