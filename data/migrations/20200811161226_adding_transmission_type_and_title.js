exports.up = function( knex ) 
{
  return knex.schema.table( "cars", table =>
  {
    table.string( "transmission", 30 ).defaultTo( "automatic" );
    table.string( "title", 30 );
  } );
};

exports.down = function( knex ) 
{
  return knex.schema.table( "cars", table => 
  {
    table.dropColumn( "transmission" );
    table.dropColumn( "title" );
  } )  
};