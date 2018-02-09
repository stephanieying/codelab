var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var theLinks = [];
  var linksFolder = path.join(__basedir, 'public/tests/animejs/examples/anime');
  fs.readdir(linksFolder, (err, paths)=>{
    console.log(JSON.stringify(paths, null, 4));
    paths.forEach(path=>{
      theLinks.push(
        {'title': path,
        'url': ('tests/animejs/examples/anime/' + path)
        }
      )
    })
    res.render('index', { title: 'codeLab', links:theLinks });
  })
});

router.get('/stephanie', function(req, res, next){

  var links = [
  {text: "Google",
  url:"https://www.google.com/"},
  {text:"Facebook",
  url: "https://www.facebook.com/"},
  {text: "New York Times",
  url:"https://www.nytimes.com/"}]

  var theResult = links[2].url + ", " + links[1].text




  res.render('steph_view', {title: 'Steph Page', data: links})
})

module.exports = router;
