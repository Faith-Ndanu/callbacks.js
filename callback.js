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
}
fetchAndLogUserData()


//QUESTION 3





