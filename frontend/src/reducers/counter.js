const counterReducer = (state= 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            let myNum =  0;
            myNum = (Math.atan(Math.random()) * Math.pow(10,(Math.random()*5)));
            console.log(myNum);
            console.log('appappapappapapapapap');
           return  state + 1
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }
}

export default counterReducer;