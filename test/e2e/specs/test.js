module.exports = {
  "Test home page": function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    console.log("connecting to: " + devServer);

    browser
      .url(devServer + "/fr")
      .waitForElementVisible("body", 1000)
      .assert.elementPresent(".VueToNuxtLogo")
      .assert.elementCount(".Triangle", 4)
      .assert.containsText("h1", "Template Nuxt")
      .assert.elementCount("a", 3)
      .click(".lang-switcher a")
      .assert.containsText("h1", "Nuxt Template")
      .end();
  }
};
