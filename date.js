
//don activiation the function here 

module.exports = getDate;


function getDate(){
    let today = new Date();
let options ={
    weekday : "long",
    day :"numeric",
    month :"long"
};
return today.toLocaleDateString("en-US",options);

}


//if you wanrt to several functions instead of one use 
//.name_of_function to export it and use same apprach for .js function calling 