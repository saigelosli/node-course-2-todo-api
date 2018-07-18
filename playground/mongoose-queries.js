const {ObjectID} = require( 'mongodb' );
const {mongoose} = require( './../server/db/mongoose' );
const {Todo} = require( './../server/models/todo' );
const {User} = require( './../server/models/user')

// var id = '5b4e200f4e4f339b0c17210a11';
//
// if ( !ObjectID.isValid( id ) ) {
//   console.log( 'ID not valid.' );
// }

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log( 'Todos', todos );
// });

// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log( 'Todo', todo );
// });

// Todo.findById( id ).then( (todo) => {
//   if (!todo) {
//     return console.log( 'Id not found' );
//   }
//   console.log( 'Todo', todo );
// }).catch( (e) => console.log( e ) );

// Query the users collection, grab id from a user in users collection
// Need to load user mongoose model
// User.findbyid
// Cases:
// Query works, but there is no user
// User was found, print to screen
// On error, print error object

var userID = '5b4d39c744a528ca6d85db1c';
// User.findById( userID ).then( (user) => {
//   if (!user) {
//     return console.log( 'userID not found' );
//   }
//   console.log( 'User', user );
// }).catch( ( e ) => console.log( e ) );

User.findById( userID ).then( (user) => {
  if (!user) {
    return console.log( 'Unable to find user' );
  }
  console.log( JSON.stringify( user, undefined, 2) );
}, (e) => {
  console.log( e );
})
