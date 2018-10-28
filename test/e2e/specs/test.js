module.exports = {
  "Test home page": function(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    console.log("connecting to: " + devServer);

    browser
      .url(devServer)
      .waitForElementVisible("body", 3000)
      .assert.elementPresent(".VueToNuxtLogo")
      .assert.elementCount(".Triangle", 4)
      .assert.containsText("h1", "nuxt-template")
      .assert.containsText(
        "h2",
        "A comprehensive template for nuxt-based projects."
      )
      .assert.elementCount("a", 2)
      .end();
  }
};
