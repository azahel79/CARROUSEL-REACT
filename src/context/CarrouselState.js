import { useReducer } from "react"
import { carrouselReducers } from "../reducers/carrouselReducer";
import { BUTTON_BEFORE, BUTTON_NEXT } from "../types";
import carrouselContext from "./carrouselContext";

const CarrouselState = (props)=>{
  
    const initialState = {
         valueSlider: 1
    }


    const [state,dispatch] = useReducer(carrouselReducers,initialState);





    ///FUNCION PARA LOS BOTONES DE CONTROL
    const btn_controllers_next_fn = (change)=>{
        dispatch({
            type: BUTTON_NEXT,
            payload: change
        })
    } 
    const btn_controllers_before_fn = (change)=>{
        dispatch({
            type:BUTTON_BEFORE,
            payload: change
        })
    }

    return (
        <carrouselContext.Provider  value={{
          valueSlider: state.valueSlider,
          btn_controllers_next_fn,
          btn_controllers_before_fn
        }}>
            {props.children}
        </carrouselContext.Provider>
    )
}

export default CarrouselState;