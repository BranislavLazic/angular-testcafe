const createTestCafe = require("testcafe");

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc;
    const liveRunner = testcafe.createRunner();
    return liveRunner
      .src("e2e/src/*.test.js")
      .browsers(["chrome"])
      .run({
        selectorTimeout: 1000, // milliseconds
        assertionTimeout: 1000
      });
  })
  .then(() => {
    testcafe.close();
  })
  .catch(error => {
    console.log("error", error);
    testcafe.close();
    process.exit(1);
  });
