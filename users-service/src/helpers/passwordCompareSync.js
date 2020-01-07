import bcrypt from 'bcryptjs';

const passwordCompareSync = (passwordToTest, passwordHash) => {
  return bcrypt.compareSync(passwordToTest, passwordHash)
};

export default passwordCompareSync;