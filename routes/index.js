var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Palindrome' });
});

router.post('/', function (req, res) {
  var phrase = (req.body.phrase).toLowerCase();

  function isPalindrome(str) {
    var len = str.length;

    for (var i = 0; i < Math.floor(len/2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  var test = isPalindrome(phrase);

  if (test) {
    res.status(200).send(true);
  } else {
    res.status(400).send(false);
  }
});

module.exports = router;
