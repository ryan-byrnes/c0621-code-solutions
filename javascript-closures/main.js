function graduate(credential) {
  return function name(fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

const medTitle = medicalSchool('Ryan Byrnes');

const lawTitle = lawSchool('Ryan Byrnes');

console.log('medTitle', medTitle);

console.log('lawTitle', lawTitle);
