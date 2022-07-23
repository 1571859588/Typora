async function f()
{
    try{
        return await Promise.resolve('成功了');
    }catch(e)
    {
        return await Promise.reject('出错了');
    }
}
f().then(v=>console.log(v)).catch(e=>console.log(e));