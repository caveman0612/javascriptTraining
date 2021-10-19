const fs = require("fs");
const prompt = require("prompt");

const path = "C:/Users/cavem/PycharmProjects/javascriptTraining/scripts/main";

prompt.start();

prompt.get("name", function (err, result) {
  if (err) {
    return onErr(err);
  }

  let file = `${path}/${result.name}`;

  try {
    if (!fs.existsSync(file)) {
      fs.mkdirSync(file);
    }

    fs.writeFileSync(`${file}/${result.name}.js`, "");
    fs.writeFileSync(
      `${file}/${result.name}.test.js`,
      `const ${result.name} = require('./${result.name}')`
    );
  } catch (err) {
    console.log(err);
  }
});

function onErr(err) {
  console.log(err);
  return 1;
}
