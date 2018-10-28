const { Nuxt, Builder } = require("nuxt");
const { resolve } = require("path");

// 1. Init Nuxt.js and start the dev server listening on localhost:4000
const rootDir = resolve(__dirname, "../..");
let config;
try {
  config = require(resolve(rootDir, "nuxt.config.js"));
} catch (e) {
  config = {};
}
config.rootDir = rootDir; // project folder
config.dev = false; // production build
config.mode = "universal"; // Isomorphic application
const nuxt = new Nuxt(config);
new Builder(nuxt).build().then(() => {
  nuxt.listen(4000, "localhost").then(() => {
    // 2. run the nightwatch test suite against it
    // to run in additional browsers:
    //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
    //    2. add it to the --env flag below
    // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
    // For more information on Nightwatch's config file, see
    // http://nightwatchjs.org/guide#settings-file
    let opts = process.argv.slice(2);
    if (opts.indexOf("--config") === -1) {
      opts = opts.concat(["--config", "test/e2e/nightwatch.conf.js"]);
    }
    if (opts.indexOf("--env") === -1) {
      opts = opts.concat(["--env", "chrome"]);
    }

    const spawn = require("cross-spawn");
    const runner = spawn("./node_modules/.bin/nightwatch", opts, {
      stdio: "inherit"
    });

    runner.on("exit", function(code) {
      nuxt.close();
      process.exit(code);
    });

    runner.on("error", function(err) {
      nuxt.close();
      throw err;
    });
  });
});
