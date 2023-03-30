const axios = require("axios");
const { getTitles } = require("../util/getTitle");

const httpGetTitles = async (req, res) => {
  const posts = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  const titles = getTitles(posts);
  res.status(200).json({ titles });
};

module.exports = { httpGetTitles };
