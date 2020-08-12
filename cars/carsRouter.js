const express = require( "express" );
const db = require( "../data/connection" );

const router = express.Router();

router.get( "/", ( req, res ) => 
{
  db( "cars" )
    .then( response => res.status( 200 ).json( response ) )
    .catch( error => res.status( 500 ).json( error ) );
} );

router.get( "/:id", ( req, res ) => 
{
  db( "cars" )
    .where( "id", req.params.id )
    .first()
    .then( response => res.status( 200 ).json( response ) )
    .catch( error => res.status( 500 ).json( error ) );
} );

router.post( "/", ( req, res ) =>
{
  db( "cars" )
    .insert( req.body )
    .then( ids => 
      {
        db( "cars" )
          .where( "id", { id : ids[ 0 ] } )
          .first()
          .then( car => { res.status( 200 ).json( car ) } )
      } )
    .catch( error => res.status( 500 ).json( error ) );
} )

router.put( "/:id", ( req, res ) =>
{
  db( "cars" )
    .where( "id", req.params.id )
    .update( req.body )
    .then( response => { response > 0 ? res.status( 200 ).json( response ) : res.status( 404 ).json( "Record Not Found!" ) } )
    .catch( error => res.status( 500 ).json( error ) );
} )

router.delete( "/:id", ( req, res ) =>
{
  db( "cars" )
    .where( "id", req.params.id )
    .del()
    .then( response => { response > 0 ? res.status( 200 ).json( response ) : res.status( 404 ).json( "Record Not Found!!!" ) } )
    .catch( error => res.status( 500 ).json( error ) );
} )

module.exports = router;