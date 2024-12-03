const db = require("../database/database")

async function createContact(req, res, next){
    const {Contact} = await db();
    const {fullName, phone} = req.body;
    await Contact.create({fullName, phone});
    res.redirect('/contacts');
}


async function findAll(req, res, next){

    try {    
        const { Contact } = await db();
        const contacts = await Contact.findAll();
        res.render('contact.twig', { title: "My Form", contacts: contacts})
    } catch(e){
        console.log(e);
        res.status(500).send("Internal Error");
    }
}


async function deleteContact(req, res, next) {
    try {
        const { Contact } = await db(); 
        const {id} = req.params;     

        
        await Contact.destroy({ where: {id} });

        res.redirect(('/contacts'));
        


    } catch (e) {
        console.error("Error during contact deletion:", e);
        res.status(500).send("Internal Server Error");
    }
}

async function updateContact(req, res, next) {
    try {
        const { Contact } = await db();   
        const {id,fullName, phone } = req.body; 

        
         await Contact.update(
            { fullName, phone },       
            { where: { id } }          
        );
        res.redirect('/contacts');

    } catch (e) {
        console.error("Error during contact update:", e);
        res.status(500).send("Internal Server Error");
    }
}


async function updateForm(req,res,next){
    const { Contact } = await db(); 
    const foundContact= await Contact.findOne({where:{
        id:req.params['id']
    }});
    res.render("update.twig",{contact: foundContact})
}



module.exports = {createContact, findAll, deleteContact, updateContact}