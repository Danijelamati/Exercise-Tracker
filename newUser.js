const User = require("./user");
const find = require("./find");

const newUser = async function(req, res) {
  try {
    const { username } = req.body;

    const finder = await find(User, "name", username);

    if (finder.length) return res.send("User exists");

    const usery = new User({ name: username });

    usery.save(err => {
      if (err) console.log(err);
    });

    res.json({ username: username, _id: usery._id });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = newUser;
