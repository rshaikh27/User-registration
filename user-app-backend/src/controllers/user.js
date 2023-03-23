const User = require("./../models/User");

async function saveUser(request, response) {
  try {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    const createdUser = await newUser.save();
    response.status(201).json(createdUser);
  } catch (err) {
    response.status(500).json({ message: err });
  }
}

module.exports = { saveUser };
