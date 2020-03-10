const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const {googleUrl, firebaseConfig} = require("./secrets");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env:{
          apiBaseUrl:"http://localhost:3000/api/",
          googleUrl,
          firebaseConfig
      }
    }
  }

  return {
    env:{
        apiBaseUrl:"https://favfonts.now.sh/api/",
        googleUrl,
        firebaseConfig
    }
  }
}