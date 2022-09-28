const cheerio = require("cheerio");
const fs = require("fs-extra");

const copyFromClient = () => {
  fs.ensureDir(__dirname + "/../app/", (err) => {
    if (err) return console.log(err); // => null

    // dir has now been created, including the directory it is to be placed in

    // clean first
    fs.remove(__dirname + "/../app/", (err) => {
      if (err) return console.log(err);
      console.log("> Clean success!");

      // copy phaser dist
      fs.copy(
        __dirname + "/../../client/dist",
        __dirname + "/../app/",
        (err) => {
          if (err) return console.error(err);
          console.log(">> Phaser dist copied!");

          // copy phaser assets
          fs.copy(
            __dirname + "/../../client/assets",
            __dirname + "/../app/assets",
            (err) => {
              if (err) return console.error(err);
              console.log(">>> Phaser assets copied!");

              const indexHtml = __dirname + "/../app/index.html";
              const $ = cheerio.load(fs.readFileSync(indexHtml));

              const script_element = $("script");
              const old_script_src = script_element[0].attribs.src;

              script_element.attr("src", "." + old_script_src);

              // overwrite index.html for <script src="">
              fs.writeFile(indexHtml, $.html() + "", (err) => {
                if (err) return console.error(err);
                console.log(">>>> Index html edited!");
              });
            }
          );
        }
      );
    });
  });
};

copyFromClient();
