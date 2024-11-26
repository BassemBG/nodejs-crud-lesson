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


module.exports = {createContact, findAll}