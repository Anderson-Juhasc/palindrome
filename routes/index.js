var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Palindrome' });
});

router.post('/', function (req, res) {
  var phrase = (req.body.phrase).toLowerCase();

  function isPalindrome(str) {
    var len = str.length
      , i = 0
      , result = true;

    if (len <= 1) { return true };

    if (str.charAt(i) != str.charAt(len - i - 1)) {
      return false;
    } else {
      i++;
      isPalindrome(str.substr(1,str.length -2));
    }

    return result;
  }

  var test = isPalindrome(phrase);

  if (test) {
    res.status(200).send(true);
  } else {
    res.status(400).send(false);
  }
});

module.exports = router;
