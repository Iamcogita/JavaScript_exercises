// //exercício 1: escrever uma função getFirstArticle que retorna uma Promise para os detalhes da primeira notícia
// const apiUrl = "https://hn.algolia.com/api/v1/search";
// function getFirstArticle(url){
//     return fetch(url)
//         .then((response) => response.json())
//         .then((json) => json.hits[0].objectID)
//         .then((objID) => fetch("http://hn.algolia.com/api/v1/items/".concat(objID)))
//         .then((response) => response.json());
// }
// getFirstArticle(apiUrl).then(console.log);
// exercício 2: escrever uma função getPoints que retorna uma Promise para o somatório de todos os pontos em uma página
// const apiUrl2 = "https://hn.algolia.com/api/v1/search";
// function getPoints(url){
//     return fetch(url).then((response) => response.json())
//         .then((json) => json.hits)
//         .then((hits) => hits.map( e => e.points)
//             .reduce((acc,curr) => acc + curr, 0));
// }
// getPoints(apiUrl2).then(console.log);
//exercício 3: escrever uma função get40news que obrigatoriamente faz dois fetches e retorna uma Promise para um array de notícias.
// const apiPage0 = fetch("https://hn.algolia.com/api/v1/search?page=0");
// const apiPage1 = fetch("https://hn.algolia.com/api/v1/search?page=1");
// function get40news(){
//     const arrayOfPromises = [
//         apiPage0.then(response => response.json()).then(json => json.hits),
//         apiPage1.then(response => response.json()).then(json => json.hits)
//     ];
//     return Promise.all(arrayOfPromises).then(array => array.flat());    // [[0,20], [21,40]] => [0.....40]
// }
// get40news().then(console.log);
//exercício 4: escrever uma função getFullArticles que retorna uma Promise para um array com os detalhes de cada notícia.
const urlPage4 = "https://hn.algolia.com/api/v1/search?page=4";
function getFullArticles(url){
    return fetch(url).then(response => response.json())
        .then(json => json.hits)
        .then(news => news.map(elem => elem.objectID))
        .then(idArray => idArray.map(id => fetch("http://hn.algolia.com/api/v1/items/".concat(id))))
        .then(arrProm => arrProm.map(elem => elem.then(e => e.json())))
        .then(array => Promise.all(array));
}
getFullArticles(urlPage4).then(console.log);