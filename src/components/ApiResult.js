import React from 'react';

const ApiResult = (props) => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger" role="alert">{props.error}</div>
            }
            <div className="col-md-2">
                {
                    props.temperature &&
                    <div>
                        <img src={require(`../img/${props.icon}.svg`)} className="img-responsive center-block" alt="Weather" />
                        <h2 className="text-center myH2"><strong>{props.temperature}°F</strong></h2>
                    </div>
                }
                {
                    props.humidity &&
                    <p className="text-center">Humidity: <span>{props.humidity}%</span></p>
                }
                {
                    props.description &&
                    <p className="text-center">Conditions: <span>{props.description}</span></p>
                }
            </div>
            <div className="col-md-2">
                {
                    props.fDate1 &&
                    <div>
                        <p className="text-center"><strong>{props.fDay1}</strong></p>
                        <img src={require(`../img/${props.fIcon1}.svg`)} className="img-responsive center-block smallIcon" alt="Weather" />
                        <p className="text-center">{props.fTemp1}°F</p>
                    </div>
                }
            </div>
            <div className="col-md-2">
                {
                    props.fDate2 &&
                    <div>
                        <p className="text-center"><strong>{props.fDay2}</strong></p>
                        <img src={require(`../img/${props.fIcon2}.svg`)} className="img-responsive center-block smallIcon" alt="Weather" />
                        <p className="text-center">{props.fTemp2}°F</p>
                    </div>
                }
            </div>
            <div className="col-md-2">
                {
                    props.fDate3 &&
                    <div>
                        <p className="text-center"><strong>{props.fDay3}</strong></p>
                        <img src={require(`../img/${props.fIcon3}.svg`)} className="img-responsive center-block smallIcon" alt="Weather" />
                        <p className="text-center">{props.fTemp3}°F</p>
                    </div>
                }
            </div>
            <div className="col-md-2">
                {
                    props.fDate4 &&
                    <div>
                        <p className="text-center"><strong>{props.fDay4}</strong></p>
                        <img src={require(`../img/${props.fIcon4}.svg`)} className="img-responsive center-block smallIcon" alt="Weather" />
                        <p className="text-center">{props.fTemp4}°F</p>
                    </div>
                }
            </div>
            <div className="col-md-2">
                {
                    props.fDate5 &&
                    <div>
                        <p className="text-center"><strong>{props.fDay5}</strong></p>
                        <img src={require(`../img/${props.fIcon5}.svg`)} className="img-responsive center-block smallIcon" alt="Weather" />
                        <p className="text-center">{props.fTemp5}°F</p>
                    </div>
                }
            </div>
        </div >
    )
}
export default ApiResult;