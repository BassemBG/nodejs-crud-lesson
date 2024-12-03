const yup = require("yup");
 
 
const validate = (schema) => async (req, res, next) =>{
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        }); 
        next();
    } catch(err) {
        return res.status(400).json({ type: err.name, message: err.message });
    }
}
 
 
const contactSchema = yup.object({
    body: yup.object({
        fullName: yup.string().min(2).max(22).required(),
        phone: yup.number().required()
    })
});
 
 
module.exports = { validate, contactSchema };