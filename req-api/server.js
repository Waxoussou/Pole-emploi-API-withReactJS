const http = require('http');
const fetch = require('node-fetch');
const hostname = '127.0.0.1';
const port = 3001;

const reqTokentPE = 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?grant_type=client_credentials&realm=/partenaire&client_id=PAR_42coders_1df14f5e502a0fab7d1f79df201513536890eca03469cd66c9289840c7ad14b3&client_secret=0b9eefd44de989e6b4f246559b2c73cb3f8ac604dfe09179a840593eb169c07e&scope=application_PAR_42coders_1df14f5e502a0fab7d1f79df201513536890eca03469cd66c9289840c7ad14b3 api_offresdemploiv2 o2dsoffre&mode=no-cors';
const apireq = 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?range=0-50&departement=31&motsCles=developpeur';
let poleEmploiApi = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?`;
let resultToken = '';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        if (body) {
            body = JSON.parse(body)
            let { word, departement, range } = body;
            if (range === '' || range === undefined) range = 149;
            fetch(
                `${poleEmploiApi}range=0-${range}&motsCles=${word}&departement=31`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${resultToken}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    let resultats = data.resultats;
                    resultats.forEach(resultat => {
                        let dateOffre = resultat.dateCreation;
                        dateOffre = new Date(dateOffre);
                    })
                    res.end(JSON.stringify({ resultats }))
                })
                .catch(err => console.log(err))
        } else {
            fetch(reqTokentPE, {
                method: 'POST'
            })
                .then(res => res.json())
                .then(json => {
                    resultToken = json.access_token;
                    fetch(apireq, {
                        method: 'GET',
                        headers:
                        {
                            'Authorization': `Bearer ${json.access_token}`
                        }
                    })
                        .then((res) => res.json())
                        .then(data => {
                            let resultats = data.resultats;
                            resultats.forEach(resultat => {
                                let dateOffre = resultat.dateCreation;
                                dateOffre = new Date(dateOffre);

                            })
                            res.end(JSON.stringify({ resultats }))
                        })
                })
                .catch(err => console.error(err))
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
