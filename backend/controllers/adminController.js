
//Api for adding dctr

const addDoctor = async (req, res) => {

try{
const{name,email,password,speciality,degree,experience,about,available,fees,address} = req.body

const imageFile=req.file
// console.log({name,email,password,speciality,degree,experience,about,available,fees,address},imageFile);

if(!name || !email || !password || !speciality || !degree || !experience || !about || !available || !fees || !address){
    return res.json({status:"failed",message:"Missing details"})
}
}catch(error){

}
}

export {addDoctor}