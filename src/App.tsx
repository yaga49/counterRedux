import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';

import './App.css';

import {BrowserRouter, Link, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {
    initState,
    resetValueAC,
    setEndValueAC,
    setIncValueAC,
    setStartValueAC,
    settingReducer
} from "./store/state/settingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";



export function App() {

    return <BrowserRouter>


        <Routes>
            <Route path={"/setting"} Component={Settings }/>
            <Route path={"/counter"} Component={B}/>
            <Route path={"/"} Component={() => <Navigate to={'/counter'}/>}/>
        </Routes>
    </BrowserRouter>


}


export const B = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const countData = useSelector((state: AppRootStateType) => state.settingReducer)


    const incrementValue = () => {
        dispatch(setIncValueAC())
    }
    const resetValue = () => dispatch(resetValueAC())

    return <div>
        <div style={{
            color: countData.value === countData.maxValue ? 'red' : 'black'
        }}>

            {countData.value}
        </div>

        <button onClick={incrementValue}>inc</button>
        <button onClick={resetValue}>reset</button>
        <Link to={"/setting"}>setting</Link>

    </div>
}


export const Settings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [minValue, setMinValue] = useState(0)
    const [endValue, setEndValue] = useState(0)

    useEffect(() => {
        let startValue = localStorage.getItem('StartValue');
        let lastValue = localStorage.getItem('lastValue');
        if(startValue && lastValue){
            let newStartValue = JSON.parse(startValue)
            let newLastValue = JSON.parse(lastValue)
            setMinValue(newStartValue)
            setEndValue(newLastValue)
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('StartValue', JSON.stringify(minValue));
        localStorage.setItem('lastValue', JSON.stringify(endValue));
    }, [minValue, endValue]);

    const handleInputMinNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value))
    }
    const handleInputEndNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEndValue(Number(event.target.value))
    }

    const handleSetSettingsCLick = () => {
        dispatch(setStartValueAC(minValue))
        dispatch(setEndValueAC(endValue))
        navigate('/counter')
    }


    return <div>
        min
        <input value={minValue} type={"number"} onChange={handleInputMinNumberChange}/>
        max
        <input value={endValue} type={"number"} onChange={handleInputEndNumberChange}/>

        <button onClick={handleSetSettingsCLick}>set</button>
        <div>
            <p>This is my component. SETTING</p>
        </div>

    </div>
}