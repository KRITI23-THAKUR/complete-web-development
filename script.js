let pr=new Promise((res,rej)=>){
    setTimeout(()=>){
        res("promise resolved data");
    },3000)
    })
    console.log('start')
    pr
       .then((res)=>{
        console.log(res)
       })
       .catch((res))

}
function fetchData(){
    console.log('world');
    def()
        .then((x)=>{
            console.log(x);
        }

}
}
