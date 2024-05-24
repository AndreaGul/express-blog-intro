const { readJSON } = require('../utils');

module.exports = {
  list: (req, res) => {
    const posts = readJSON('posts');
    res.format({
      html: () => {
        let html = '<main><ul>';
        posts.forEach(({ titolo, contenuto, immagine, tags }) => {
          html += `<li>Film</li>
          <li>titolo: ${titolo}</li>
          <li>titolo: ${contenuto}</li>
          <li>titolo: ${immagine}</li>
          <li>titolo: ${tags}</li>`;
        });
        html += '</ul><main>';
        res.send(html);
      },
      json: () => {
        res.json(posts);
      },
    });
  },
};
