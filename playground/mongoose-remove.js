const {ObjectID} = require( 'mongodb' );

const {mongoose} = require( './../server/db/mongoose' );
const {Todo} = require( './../server/models/todo' );
const {User} = require( './../server/models/user');

// Remove all Todos from our database
// Todo.remove({}).then( (result) => {
//   console.log( result );
// })

// Todo.findOneAndRemove( (doc) => {})
// Todo.findByIdAndRemove( (doc) => {})

Todo.findOneAndRemove( {_id: '5b4f8f2bc52614d21c383987'} ).then( (todo) => {
  
});

Todo.findByIdAndRemove( '5b4f8f2bc52614d21c383987' ).then( (todo) => {
  console.log( todo );
});
