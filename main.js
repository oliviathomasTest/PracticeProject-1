//Javascript closures
function parent(outerVariable){
    let message = "Practice program";
    function child(){
        console.log(message + ' '+ outerVariable);
    }
    return child;
}

let childFn = parent(1);
childFn();
