/**
 * Module dependencies.
 */

// mongoose setup
require( './db' );

var express = require( 'express' );
var routes  = require( './routes' );
var http    = require( 'http' );
var path    = require( 'path' );
var app     = express();
var engine  = require( 'ejs-locals' );

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use( express.favicon());
app.use( express.logger( 'dev' ));
app.use( express.cookieParser());
app.use( express.bodyParser());
app.use( express.json());
app.use( express.urlencoded());
app.use( express.methodOverride());
app.use( routes.current_user );
app.use( app.router );
app.use( express.static( path.join( __dirname, 'public' )));

// development only
if( 'development' == app.get( 'env' )){
  app.use( express.errorHandler());
}

// Routes
app.get(  '/',            routes.index );
app.post( '/create',      routes.create );
app.get(  '/destroy/:id', routes.destroy );
app.get(  '/edit/:id',    routes.edit );
app.post( '/update/:id',  routes.update );

app.get('/login', routes.login);

app.get('/terms', routes.terms);

app.get('/about', routes.about);

app.get('/subscribe', routes.subscribe);

app.post('/addEmail', routes.addEmail);

app.get('/test', routes.test);

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
