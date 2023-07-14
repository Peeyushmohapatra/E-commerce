export const reducer = (state={product:[],dataToShow:[],inCart:[]},action) => {
    if(action.type === "products"){
        return {
            ...state,
            product:action.data,
            dataToShow:action.data
        }
    }
    else if(action.type === "data-to-show"){
        console.log(action.data);
        return {
            ...state,
            dataToShow:action.data
        }
    }
    else if(action.type === "add-to-cart"){
        if(state.inCart.length === 0){
            console.log("Hello");
            return {
                ...state,
                inCart:[action.data]
            }
        }
        else if(state.inCart.length !== 0){
            console.log("Hello2");
            let boolean = false
            for(let i=0; i<state.inCart.length; i++){
                console.log(state.inCart[i].id == action.data.id);
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
    return state
}