export const reducer = (state={product:[],dataToShow:[],inCart:[],itemCount:[]},action) => {
    if(action.type === "products"){
        return {
            ...state,
            product:action.data,
            dataToShow:action.data
        }
    }
    else if(action.type === "data-to-show"){
        return {
            ...state,
            dataToShow:action.data
        }
    }
    else if(action.type === "add-to-cart"){
        if(state.inCart.length === 0){
            return {
                ...state,
                inCart:[action.data]
            }
        }
        else if(state.inCart.length !== 0){
            let boolean = false
            for(let i=0; i<state.inCart.length; i++){
                // console.log(state.inCart[i].id == action.data.id);
                if(state.inCart[i].id == action.data.id){
                    boolean = true
                }
            }
            if(boolean === false){
                return {
                    ...state,
                    inCart:[...state.inCart,action.data]
                }
            }
        }
    }
    else if(action.type === "add-to-cart1"){
        return {
            ...state,
            inCart:action.data
        }
    }
    else if(action.type === "item_counts"){
        return {
            ...state,
            itemCount:action.data
        }
    }
    
    return state
}