let  storage = [];

const defaultController = (req,res) => {

    console.log("defaultController render");

    res.render('index',{Volunteer:storage});
 
}
const addVolunteerController = (req,res)=>{

    console.log("addVolunteerController render",req.body);

    let obj ={ 
        id:storage.length + 1,
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        skills:req.body.skills
    }

      storage = [...storage,obj];

      console.log("AddVolunteer",storage);

    res.redirect('/');

}

const editVolunteerController = (req,res)=>{

    console.log("editVolunteerController render",req.params.id);

    let {id} = req.params;

    const singleVolunteer = storage.find((data)=>{

        return data.id == id;

    })

    console.log("singleVolunteer",singleVolunteer);

    res.render('edit',{singleVolunteer});

}

const updateVolunteerController = (req,res) =>{

    let {id} = req.params;
    let {name} = req.body;
    let {email} = req.body;
    let {number} = req.body;
    let {skills} = req.body;

    const updateVolunteer = storage.find((data)=>{
        return data.id == id;
    })

    updateVolunteer.name = name;
    updateVolunteer.email = email;
    updateVolunteer.number = number;
    updateVolunteer.skills = skills;
    console.log("updateVolunteer",updateVolunteer);

    res.redirect('/');
}

const deleteVolunteerController = (req,res) =>{
    let {id} = req.params;
    console.log("deleteVolunteeroController",id);

    const deleteVolunteer = storage.filter((Volunteer)=>{

        return Volunteer.id != id

    })

    storage = deleteVolunteer;

    res.redirect('/');

}

 
module.exports = {defaultController,addVolunteerController,editVolunteerController,updateVolunteerController,deleteVolunteerController}