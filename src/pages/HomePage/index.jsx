import React, { useState } from 'react';
import './HomePage.css';
import { FiDelete } from 'react-icons/fi';

export default function HomePage() {
    const [displayValue, setDisplayValue] = useState('');

    const allowedValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatingValues = ['+', '-', '*', '÷'];
    const specialValues = ['0', '.'];

    function handleButtonClick(buttonValue) {
        if (buttonValue === 'AC') {
            setDisplayValue('');
        }

        if (buttonValue === 'X') {
            setDisplayValue((prevDisplay) => prevDisplay.slice(0, -1));
        }

        if (allowedValues.includes(buttonValue)) {
            setDisplayValue((prevDisplay) => prevDisplay + buttonValue);
        }

        if (operatingValues.includes(buttonValue) && !isNaN(displayValue.slice(-1)) && (displayValue.length > 0)) {
            setDisplayValue((prevDisplay) => prevDisplay + buttonValue);
        }

        if (specialValues.includes(buttonValue) && !isNaN(displayValue.slice(-1))) {
            setDisplayValue((prevDisplay) => prevDisplay + buttonValue);
        }

        if (buttonValue === '=') {
            setDisplayValue((prevDisplay) => eval(prevDisplay).toString());
        }

    }

    return (
        <div className="container mt-5 vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-8 col-10 bg-light p-4 rounded bg-dark">
                    <input value={displayValue} type="text" className="form-control mb-3 text-right" id="display" readOnly />
                    <div className="row align-items-center custom-row">
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('AC')} type="button" className="btn btn-light btn-lg btn-block rounded-circle custom-btn p-2">AC</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('+/-')} type="button" className="btn btn-light btn-lg btn-block rounded-circle custom-btn p-2">+/-</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('÷')} type="button" className="btn btn-light btn-lg btn-block rounded-circle custom-btn">÷</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('X')} type="button" className="btn btn-warning btn-lg btn-block rounded-circle custom-btn"> <FiDelete size={20} className='btn-icon' color='white' /> </button>
                        </div>
                    </div>
                    <div className="row align-items-center custom-row">
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('7')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">7</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('8')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">8</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('9')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">9</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('*')} type="button" className="btn btn-warning btn-lg btn-block rounded-circle custom-btn text-white">*</button>
                        </div>
                    </div>
                    <div className="row align-items-center custom-row">
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('4')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">4</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('5')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">5</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('6')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">6</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('-')} type="button" className="btn btn-warning btn-lg btn-block rounded-circle custom-btn text-white">-</button>
                        </div>
                    </div>
                    <div className="row align-items-center custom-row">
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('1')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">1</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('2')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">2</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('3')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">3</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('+')} type="button" className="btn btn-warning btn-lg btn-block rounded-circle custom-btn text-white">+</button>
                        </div>
                    </div>
                    <div className="row align-items-center custom-row">
                        <div className="col-6">
                            <button onClick={() => handleButtonClick('0')} type="button" className="btn btn-secondary btn-lg btn-block rounded-pill custom-btn custom-btn-zero">0</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('.')} type="button" className="btn btn-secondary btn-lg btn-block rounded-circle custom-btn">.</button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => handleButtonClick('=')} type="button" className="btn btn-warning btn-lg btn-block rounded-circle custom-btn text-white">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
