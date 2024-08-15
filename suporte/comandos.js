const obterElementoPorID = ({ testID, attribute }) => {
    if (driver.isAndroid) {
      if (attribute) {
        return `//*[@resource-id="${testID}" and ${attribute}]`;
      } else {
        return `//*[@resource-id="${testID}"]`;
      }
    } else {
      return `~${testID}`;
    }
  }

const obterElementoPorTexto = (text) => {
    if (driver.isAndroid) {
      return `//*[@text="${text}"]`;
    } else {
      return `//*[@label="${text}"]`;
    }
  };

  module.exports = { obterElementoPorID, obterElementoPorTexto }