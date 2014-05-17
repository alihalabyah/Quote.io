var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );



var Email = new Schema({
    user_id    : String,
    email_address    : String,
    updated_at : Date
});

mongoose.model( 'Email', Email );



mongoose.connect( 'mongodb://localhost/express-todo' );
