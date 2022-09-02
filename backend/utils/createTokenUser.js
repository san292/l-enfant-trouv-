const createTokenUser = (user) => {
  return { name: user.name, user: user._id, role: user.role };
};

module.exports = createTokenUser;
