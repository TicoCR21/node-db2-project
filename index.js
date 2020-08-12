const server = require( "./api/server" );
const PORT_NUMBER = process.env.PORT || 5000;
server.listen( PORT_NUMBER, () => console.log( "Server Up and Running..." ) );