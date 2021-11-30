const Episode = require("./data");

Episode.find().then((episodes) => {
  episodes.forEach((episode) => {
    console.log(JSON.stringify(episode));
  });
});
