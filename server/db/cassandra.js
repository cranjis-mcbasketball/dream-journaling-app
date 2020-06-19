var assert = require('assert');
//”cassandra-driver” is in the node_modules folder. Redirect if necessary.
var cassandra = require('cassandra-driver');

//Replace Username and Password with your cluster settings
var authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');

//Replace PublicIP with the IP addresses of your clusters
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'dreamentries'
});

client.connect((err, result) => {
  if (err) {
    console.log('cassandra error: ', err);
  } else {
    console.log('cassandra connected');
  }
});



module.exports = client;