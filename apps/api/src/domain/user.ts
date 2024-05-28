class User {
    constructor(firstName, lastName, email, password, birthDate, phone, client) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.birthDate = birthDate;
      this.phone = phone;
      this.client = client;
    }
  
    setPassword(password) {
      // Aquí podríamos aplicar reglas de validación de contraseña si es necesario
      this.password = password;
    }
  }
  
  module.exports = User;