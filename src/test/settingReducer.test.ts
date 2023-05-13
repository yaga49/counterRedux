import {setEndValueAC, setIncValueAC, setStartValueAC, settingReducer} from "../store/state/settingReducer";


test('setting start value', ()=>{
    const startState ={
        minValue: 0,
        maxValue: 5,
        value: 0
    }

    const action = setStartValueAC(6)
    const endState = settingReducer(startState,action)

    expect(endState.minValue).toBe(6)
    expect(endState.value).toBe(6)
})

test('setting end value', ()=>{
    const startState ={
        minValue: 0,
        maxValue: 5,
        value: 0
    }

    const action = setEndValueAC(6)
    const endState = settingReducer(startState,action)

    expect(endState.maxValue).toBe(6)
})

test('set increment value', ()=>{
    const startState ={
        minValue: 0,
        maxValue: 5,
        value: 1
    }

    const action = setIncValueAC()
    const endState = settingReducer(startState,action)

    expect(endState.value).toBe(2)
})


