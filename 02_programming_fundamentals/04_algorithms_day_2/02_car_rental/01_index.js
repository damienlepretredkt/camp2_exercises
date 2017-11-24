const driver = {
  driverLicense: "C",
  licenseIssued: new Date().getFullYear() - 5, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.9,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {
  if (
    isAuthorizedLicence(driver.driverLicense) &&
    driver.licenseIssued <= (new Date().getFullYear() - 2) &&
    (driver.numberOfAccident === 0 || driver.bonus >= 0.7)
  ) {
    return true;
  } else {
    return false;
  }
}

function isAuthorizedLicence(licence) {
  if (licence.startsWith("B")) {
    return true;
  } else {
    return false;
  }
}


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
