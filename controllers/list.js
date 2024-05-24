const { readJSON } = require('../utils');

let array = [
  {
    titolo: 'Il Signore degli Anelli',
    contenuto: 'Una trilogia epica fantasy scritta da J.R.R. Tolkien.',
    immagine: 'https://esempio.com/immagini/lotr.jpg',
    tags: 'fantasy, avventura, epico',
  },
  {
    titolo: '1984',
    contenuto:
      'Un romanzo distopico di George Orwell che esplora i temi del totalitarismo e della sorveglianza.',
    immagine: 'https://esempio.com/immagini/1984.jpg',
    tags: 'distopia, politica, classico',
  },
  {
    titolo: 'Il Grande Gatsby',
    contenuto:
      "Un romanzo di F. Scott Fitzgerald ambientato negli anni '20, che racconta la vita di Jay Gatsby e il sogno americano.",
    immagine: 'https://esempio.com/immagini/gatsby.jpg',
    tags: "classico, anni '20, sogno americano",
  },
  {
    titolo: 'To Kill a Mockingbird',
    contenuto:
      'Un romanzo di Harper Lee che affronta temi di razzismo e ingiustizia nel sud degli Stati Uniti.',
    immagine: 'https://esempio.com/immagini/mockingbird.jpg',
    tags: 'razzismo, giustizia, classico',
  },
  {
    titolo: 'Il Codice da Vinci',
    contenuto:
      "Un thriller di Dan Brown che segue il professor Robert Langdon in una serie di misteri legati all'arte e alla religione.",
    immagine: 'https://esempio.com/immagini/davinci.jpg',
    tags: 'thriller, mistero, arte',
  },
];

module.exports = {
  list: (req, res) => {
    // const posts = readJSON('posts');
    res.format({
      html: () => {
        let html = '<main><ul>';
        array.forEach(({ titolo, contenuto, immagine, tags }) => {
          html += `<li>Film</li>
          <li>titolo: ${titolo}</li>
          <li>titolo: ${contenuto}</li>
          <li>titolo: ${immagine}</li>
          <li>titolo: ${tags}</li>`;
        });
        html += '</ul><main>';
      },
      json: () => {
        res.json(posts);
      },
    });
  },
};