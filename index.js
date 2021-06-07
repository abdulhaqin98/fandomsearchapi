// Resources

// https://www.mediawiki.org/wiki/API:Cross-site_requests
// https://friends.fandom.com/api.php?action=parse&pageid=1627&wrapoutputclass&format=json
// https://friends.fandom.com/api.php?action=query&list=search&srsearch=abstain&format=json
// https://www.mediawiki.org/w/api.php?action=help&modules=main
// url1: https://friends.fandom.com/api.php?action=opensearch&search=joey&format=json&origin=*

// fetch(url).then(res =>
//   res.json()).then(d => {
//     console.log(d);
//   });

window.onload = function () {
  
  document.getElementById('btn01').addEventListener("click", fetchMovies);
}

const url = ['https://friends.fandom.com/',
  'https://how-i-met-your-mother.fandom.com/',
  'https://theoffice.fandom.com/',
  'https://bigbangtheory.fandom.com/',
  'https://batman.fandom.com/',
  'https://harrypotter.fandom.com/',
  'https://breakingbad.fandom.com/',
  'https://gameofthrones.fandom.com/'
];

const series = ['Friends', 'H.I.M.Y.M', 'The Office (US)', 'The Big Bang Theory',
  'Batman', 'Harry Potter', 'Breaking Bad', 'G.O.T' ];

var title;
var link;
var html = '';

async function fetchMovies() {

  const key = document.getElementById('querykey').value;

  html = '';
  document.getElementById('result').innerHTML = null;

  for (i = 0; i < 8; i++) {

    const response = await fetch(url[i] + 'api.php?action=opensearch&search=' + key + '&format=json&origin=*').then(res =>
      res.json()).then(d => {
        console.log(d);

        title = d[1];
        link = d[3];
      });

    console.log(title);
    console.log(link);
    // console.log(len);

    len = title.length;

    // len == 0 ? alert(series[i] + ' no data'): null;

    html += `<p class="text-white">${series[i]}</p>`;
    for (j = 0; j < len; j++) {
      console.log(title[j] + link[j]);

      html += `
        <div class="card my-2 py-0">
        <div class="card-body d-flex justify-content-between py-1">
                      <h6 class="card-title my-auto">${title[j]}</h6>
                      <a href="${link[j]}" target="_blank" class="btn btn-primary p-2">Link</a>
                    </div>
                    </div>`;
    } // end of for loop

    document.getElementById('result').innerHTML += html;

    html = '';
    title = '';
    link = '';

  } // end of for loop
}

// fetchMovies();
// console.log('bye');