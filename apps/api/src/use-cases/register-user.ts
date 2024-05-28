const User = require('../domain/user');

class RegisterUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const { firstName, lastName, email, password, birthDate, phone, clientId } = userData;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('El correo electrónico ya está en uso.');
    }

    const user = new User(firstName, lastName, email, password, birthDate, phone, clientId);
    user.setPassword(password);

    await this.userRepository.save(user);

    return 'Usuario registrado correctamente.';
  }
}

module.exports = RegisterUserUseCase;