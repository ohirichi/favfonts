const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env:{
          apiUrl:"http://localhost:3000/api/fonts"
      }
    }
  }

  return {
    env:{
        apiUrl:"http://localhost:3000/api/fonts"
    }
  }
}