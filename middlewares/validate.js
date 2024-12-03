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
 

// User schema
const userSchema = yup.object({
    body: yup.object({
      username: yup
        .string()
        .required("Username is required")
        .min(2, "Username must be at least 2 characters")
        .max(5, "Username must be at most 5 characters"),
      password: yup
        .number()
        .required("Password is required")
        .typeError("Password must be a number"),
      birthday: yup
        .date()
        .required("Birthday is required")
        .max(new Date(), "Birthday must be in the past")
        .typeError("Birthday must be a valid date"),
    }),
  });
  
 
module.exports = { validate, contactSchema, userSchema };