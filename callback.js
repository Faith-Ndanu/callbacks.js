 //QUESTION1  
   function repeatMessage(message,delayTime){
    setTimeout(()=>{
    console.log(message)},delayTime);
}
repeatMessage("Hello Faith",3000)

//QUESTION2
const userIds=['user1','user2','user3'];
async function fetchAndLogUserData(){
    for(const userId of userIds){
        try{
            const userId = await
            getUserData(userId)
            console.log(userData)
        }
        catch(error){
            console.log(`An error occured for user ${userId}:${error}`);
        }
    }
}
function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userData = {id,name:`user ${id},age:20`}
            resolve(userData)
        },1000)
    });
};
fetchAndLogUserData()


//QUESTION 3
async function callPerformTask(){
    try{
        await callPerformTask()
        console.log(`The task was successful`)
    }
    catch (error){
        console.log(`there was an error`, + error)
    }
}

function performTask(){
    return newPromise((resolve,reject)=>{
        const isSuccess =true
        setTimeout(()=>{
        if(isSuccess){
          resolve()
        }
else{
    reject(`something went wrong`)
}},1000);
    })
}
callPerformTask();

// //QUESTION 4
// function unstableTask(taskname,failurePropablity){
//     return newPromise((resolve,reject)=>{
//         const randomNum = Math.random
//     })
// }













