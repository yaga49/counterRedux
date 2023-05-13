

export let initState = {
    minValue: 3,
    maxValue: 10,
    value: 3
}

export const settingReducer = (state: any = initState, action: any)=>{
    switch (action.type){
        case "SET-START-VALUE":{

            return {...state, minValue: action.minValue, value: action.minValue}

        }
        case "SET-END-VALUE":{
            return {...state, maxValue: action.maxValue}
        }
        case "INCREMENT-VALUE": {
            if(state.value < state.maxValue){
                return {...state, value: state.value + 1}
            }
           return {...state}
        }
        case "RESET-VALUE":{
            return {...state, value: state.minValue}
        }
        default:
            return state

    }
}

export const setStartValueAC = (minValue: number) => {
  return {type: "SET-START-VALUE", minValue}
}

export const setEndValueAC = (maxValue: number) => {
    return {type: "SET-END-VALUE", maxValue}
}

export const setIncValueAC = () => {
    return {type: "INCREMENT-VALUE"}
}

export const resetValueAC = () => {
    return {type: "RESET-VALUE"}
}