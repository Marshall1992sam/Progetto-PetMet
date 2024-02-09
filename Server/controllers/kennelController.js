const Kennel = require('../models/Kennel');
const kennel = require('../models/Kennel')

exports.create = async (req, res) => {
    try {
      const { firstName,secondName,email,password } =
        req.body;
     
  
  
      const createdKennel = await kennel.create({
        firstName,secondName,email,password 
      });
  
      res.json({ message: "Pet created successfully.", createdPet });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email,password } =   req.body;
     
      const user = await kennel.findOne({
         email 
      });
  
      if(!user){
        res.json({ message: "Kennel Not Found." });
      }

      if (password == user.password){
        res.json({ message: "Pet created successfully." });
      }else {
        res.json({ message: "Password incorrect" });

      }
    
  
    
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  