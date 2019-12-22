const User = require("./user");
const find = require("./find");
const time = require("./time");

async function log(req, res) {
  try {
    const { userId, from, to, limit } = req.query;
    console.log(userId, from, to, limit);

    const usery = await find(User, "_id", userId);

    if (usery === undefined) return res.send(`UserId: ${userId} not found`);
    if (limit !== undefined && isNaN(limit))
      return res.send("Limit must be a number");

    let exercises = usery[0].exercises;

    if (from !== undefined || to !== undefined) {
      let begin = time(from);
      let end = time(to);

      if (begin == "Invalid Date" || end == "Invalid Date")
        return res.send("Invalid from or to Date, both dates need to be valid");

      exercises = exercises.filter(x => begin <= x.date && x.date <= end);
    }

    let count = exercises.length;

    if (limit !== undefined) {
      count = limit < count ? limit : count;
      exercises = exercises.slice(0, count);
    }

    res.json({
      _id: userId,
      username: usery[0].name,
      count: count,
      log: exercises
    });
  } catch (error) {
    console.log(error);
    res.send("Error has happend");
  }
}

module.exports = log;
