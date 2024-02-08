

function callback(fun:()=>void){
    setTimeout(
        fun
    , 5000);
}

callback(()=>{
    console.log("hi pepps")
})
//this is the commnet that should be ignored during the process of conversion from the tsc file to js file for production purpose