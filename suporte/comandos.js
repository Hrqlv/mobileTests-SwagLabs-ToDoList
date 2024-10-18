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

  const scrollarEAguardarClique = async (accessibilityID, direcao = 'down') => {
    let elemento;

    if (driver.isAndroid) {
        elemento = await driver.$(
            `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityID}"))`
        );
    } else {
        elemento = await driver.$(`~${accessibilityID}`);
    }
    if (await elemento.isDisplayed()) {
        await elemento.click();
    } else {
        throw new Error(`Elemento ${accessibilityID} não encontrado após o scroll.`);
    }
};

const continuarScrollAndroid = async (accessibilityID, direcao) => {
  await driver.execute('mobile: scroll', { direction: direcao });
  const elemento = await driver.$(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityID}"))`
  );

  if (!(await elemento.isDisplayed())) {
      return continuarScrollAndroid(accessibilityID, direcao);
  }
};

const continuarScrollIOS = async (accessibilityID, direcao) => {
  await driver.execute('mobile: scroll', { direction: direcao });
  const elemento = await driver.$(`~${accessibilityID}`);

  if (!(await elemento.isDisplayed())) {
      return continuarScrollIOS(accessibilityID, direcao);
  }
};


  module.exports = { obterElementoPorID, obterElementoPorTexto, scrollarEAguardarClique }