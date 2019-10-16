import React from 'react';
const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" name="city" id="city" placeholder="Ex: Buenos Aires..." />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Check Weather</button>
            </div>
            <hr className="mybold-line" />
        </form>
    )
}
export default Form;