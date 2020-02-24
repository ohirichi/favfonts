const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env:{
          apiUrl:"http://localhost:3000/api/fonts",
          googleUrl: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAFYko9IB-11qtZEDihlFXZS5t9PNUtnKg&sort=popularity"
      }
    }
  }

  return {
    env:{
        apiUrl:"https://favfonts.now.sh/api/fonts",
        googleUrl: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAFYko9IB-11qtZEDihlFXZS5t9PNUtnKg&sort=popularity"
    }
  }
}