const episodes = require("./episodes.json").episodes;

class Episode {
  static find() {
    return Promise.resolve(
      episodes.map((e) => ({
        id: e.id,
        name: e.name,
        season: e.season,
        number: e.number,
        image: e.image.medium,
        summary: e.summary,
      }))
    );
  }

  static findById(id) {
    const episode = episodes.find((e) => e.id === Number(id));

    if (episode) {
      return Promise.resolve({
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
        image: episode.image.medium,
        summary: episode.summary,
      });
    }

    return Promise.resolve(null);
  }
}

module.exports = Episode;
