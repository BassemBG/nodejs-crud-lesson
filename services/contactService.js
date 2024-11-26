const db = require("../database/database")

async function createContact(req, res, next){
    const {Contact} = await db();
    const {fullName, phone} = req.body;
    await Contact.create({fullName, phone});
    res.json({message: "added successfully"});

}

module.exports = {createContact}