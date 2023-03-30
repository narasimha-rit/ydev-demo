const getTitles = (posts) => {
  const titles = [];
  posts.map((post) => {
    titles.push(post.title);
  });
  return titles;
};

module.exports = { getTitles };
