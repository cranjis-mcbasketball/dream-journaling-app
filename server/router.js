/* A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern. */

const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/null', controllers.main.get);

router.get('/dream-entries', controllers.dreamentries.get);

router.post('/dream-entries', controllers.dreamentries.post);



module.exports = router;