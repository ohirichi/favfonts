const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const {googleUrl} = require("./secrets");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env:{
          apiUrl:"http://localhost:3000/api/fonts",
          googleUrl
      }
    }
  }

  return {
    env:{
        apiUrl:"https://favfonts.now.sh/api/fonts",
        googleUrl
    }
  }
}