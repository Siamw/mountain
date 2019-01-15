var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Aloha' });
});


router.get('/jiwon', function(req, res, next) {

  res.render('index', { title: 'jiwon' });
});




//검색창을 만들고, 검색창 form 을 url로 보내면 된다.


//var request = require('request');


//mntnNm 이름
//mntnHght 높이
//mntnAdd 소재지



//var url = 'http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice?mntnNm=가리왕산&serviceKey=Itv7shc%2Bbaj8d7bWFSU9ajh3J4qTcbf5wDqFOg4nwB9Oo%2BmlzkcIAwXCSt665hf0sTTSuNKCXSLHSakuZr1vlg%3D%3D';







//request({
//    url: url + queryParams,
//    method: 'GET'
//}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
//});
-->

module.exports = router;
