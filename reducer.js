



const reducer = (state, action)=>{

    switch(action.type){
        case "plus":{
            const newState = {...state};


            console.log(`action.type is ${action.type} payload is ${JSON.stringify(action.payload)}`)

            newState.numberOfItems = newState.numberOfItems + 1;

            if(newState.cartItems.has(action.payload.name)){
                const item = newState.cartItems.get(action.payload.name);
                item.total = item.total + 1;
            }
            else{
                newState.cartItems.set(action.payload.name, {...action.payload, total:1})
            }

            return newState;
        }
        default:
            return state;

    }

}

export default reducer;