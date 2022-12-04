const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin1:admin1@cluster0.xsg0sio.mongodb.net/?retryWrites=true&w=majority';

class Database {
     constructor() {
          this.conectar();
     }

     conectar() {
          mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
               .then(resultado => console.log('Se conectó a Mongodb Atlas'))
               .catch(error => console.log(error));
     }
}

module.exports = new Database();