//const MongoClient = require( 'mongodb' ).MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log( 'Unable to connect to MongoDB server' );
  }
  console.log( 'Connected to MongoDB server' );

  // deleteMany
  // db.collection( 'Todos' ).deleteMany({text: 'Eat lunch'}).then( (result) => {
  //   console.log( result );
  // });

  // deleteOne
  // db.collection( 'Todos' ).deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log( result );
  // });

  // findOneAndDelete
  // db.collection( 'Todos' ).findOneAndDelete({completed: false}).then( (result) => {
  //   console.log( result );
  // });

  // Task:
  // Look for any duplicated names use deleteMany
  // db.collection( 'Users').deleteMany({name: 'Saige'}).then( (result) => {
  //   console.log( result );
  // });

  // findOneAndDelete to delete by id
  db.collection( 'Users' ).findOneAndDelete({_id: new ObjectID( '5b3ed1753866582402544a44' )}).then( (result) => {
    console.log( result );
  });

  //db.close();
});
