//custome sleep function

const sleep = async (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Ran after ${time}ms`)
        }, time)
    })
}
