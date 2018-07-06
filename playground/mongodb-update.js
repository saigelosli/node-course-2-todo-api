//const MongoClient = require( 'mongodb' ).MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log( 'Unable to connect to MongoDB server' );
  }
  console.log( 'Connected to MongoDB server' );

  // db.collection( 'Todos' ).findOneAndUpdate({
  //   _id: new ObjectID('5b3ecfd13866582402544949')
  // }, {
  //   // Use $set update operator
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   // Options
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log( result );
  // });

  db.collection( 'Users' ).findOneAndUpdate({
    _id: new ObjectID( '5b39b4ea643e38123086433c' )
  }, {
    $set: {
      name: 'Saige'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log( result );
  });

  //db.close();
});
