
async function getData(){
const response= await fetch('https://ugzptqatywysefonuqip.supabase.co/rest/v1/pets',{
 method:"GET",
 headers:
 {"apikey": apikey},


       
    }


);


const result=await response.json();
console.log(result);
}
getData();