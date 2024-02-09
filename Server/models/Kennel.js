const mongoose = require("mongoose");

const KennelSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
      secondName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
}
  
   
);

module.exports = Kennel = mongoose.model("Kennel", KennelSchema);