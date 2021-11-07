const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (obj) => {
  for (let pass of obj) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes)
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });