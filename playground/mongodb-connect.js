//const MongoClient = require( 'mongodb' ).MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log( 'Unable to connect to MongoDB server' );
  }
  console.log( 'Connected to MongoDB server' );

  // db.collection( 'Todos' ).insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log( 'Unable to insert Todo', err );
  //   }
  //
  //   console.log( JSON.stringify( result.ops, undefined, 2 ) );
  // })

  // Insert new doc into User (name, age, location)
  // db.collection( 'Users' ).insertOne({
  //   name: 'Saige',
  //   age: 54,
  //   location: 'Beaverton, OR 97006'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log( 'Unable to insert User' );
  //   }
  //
  //   console.log( JSON.stringify( result.ops, undefined, 2 ) );
  // })

  db.close();
});
