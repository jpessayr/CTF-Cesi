const bcrypt = require('bcrypt');

const password1= 'admin';
bcrypt.hash(password1, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Mot de passe haché:', hashedPassword);
});

const password2 = 'noel';
bcrypt.hash(password2, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Mot de passe haché:', hashedPassword);
});
const password3 = 'jairatelavion';
bcrypt.hash(password3, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Mot de passe haché:', hashedPassword);
});