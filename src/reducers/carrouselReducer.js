
import { BUTTON_BEFORE,BUTTON_NEXT} from "../types";

export const carrouselReducers = (state,action)=>{
  
    switch(action.type){
        case BUTTON_NEXT:
            state =  {
                ...state,
                valueSlider: state.valueSlider + 1
            } 
            
            if(state.valueSlider === 4){
                state = {
                    ...state,
                    valueSlider: 1
                }
            }
            return state
            case BUTTON_BEFORE:
              state =  {
                  ...state,
                  valueSlider: state.valueSlider -1
              }
              
              if(state.valueSlider === 0){
                 state = {
                     ...state,
                     valueSlider: 3
                 }
              }
              return state
       default:
           return state
    }
}


