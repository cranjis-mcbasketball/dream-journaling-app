const cassandra = require('cassandra-driver');

CREATE KEYSPACE dreamentries WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1};

CREATE TABLE IF NOT EXISTS dreamentries.entryitem (id INT, username TEXT, date DATE, dreamtext TEXT, created TIMESTAMP, PRIMARY KEY (id));

INSERT INTO dreamentries.entryitem (id, username, date, dreamtext, created) VALUES (1,'SillyBrainCrank','2020-06-12', 'I was working at a university in Mexico and the sizes I was working and we’re a lot larger than normal. I remember there was one girl who was mad at me because she did not agree with something I said and because I was made to look like the bad guy, I was punished by a guy who looked like my surgeon who reattached my hand in 2015. I was to receive 12 punishments and they gave me the choice between getting stabbed with a knife that was dipped in ghost pepper paste and getting pepper sprayed in the face and I could use whatever accommodation I wanted of stabs and sprays it so that it equaled 12. I ended up choosing seven stabs and five sprays.',toTimestamp(now()));


//Ensure all queries are executed before exit
// function execute(query, params, callback) {
//   return new Promise((resolve, reject) => {
//     client.execute(query, params, (err, result) => {
//       if(err) {
//         reject()
//       } else {
//         callback(err, result);
//         resolve()
//       }
//     });
//   });
// }

//Execute the queries
// var query = 'SELECT name, price_p_item FROM entries.fruit_stock WHERE name=? ALLOW FILTERING';
// var q1 = execute(query, ['oranges'], (err, result) => { assert.ifError(err); console.log('The cost per orange is $' + result.rows[0].price_p_item)});
// var q2 = execute(query, ['pineapples'], (err,result) => { assert.ifError(err); console.log('The cost per pineapple is $' + result.rows[0].price_p_item)});
// var q3 = execute(query, ['apples'], (err,result) => { assert.ifError(err); console.log('The cost per apple is $' + result.rows[0].price_p_item)});
// Promise.all([q1,q2,q3]).then(() => {
//   console.log('exit');
//   process.exit();
// });