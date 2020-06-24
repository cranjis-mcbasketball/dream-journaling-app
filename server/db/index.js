var ExpressCassandra = require('express-cassandra');

var models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    // port cassandra is to listen on
    protocolOptions: { port: 9042 },
    keyspace: 'entries',
    queryOptions: { consistency: ExpressCassandra.consistencies.one }
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe',
  }
});

var EntryModel = models.loadSchema('dreamentries', {
  fields: {
    id: 'int',
    // will be determined based on who is signed in; defaults to 'anonymous-user'
    username: 'text',
    // string in format yyyy-mm-dd
    date: 'date',
    dreamText: 'text',
    created: 'timestamp'
  },
  key: ['id']
});

// EntryModel or models.instance.Entries can now be used as the model instance
console.log(models.instance.entryitem === EntryModel);

EntryModel.syncDB(function (err, res) {
  if (err) {
    throw err;
  }
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});

module.exports = EntryModel;