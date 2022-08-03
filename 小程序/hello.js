var a=new Promise(function(resolve,reject){
    let b=1;
    if(b===1)resolve('success');
    else reject('fail');
});
a.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
