exports.up = function( knex ) 
{
  return knex.schema.createTable( "cars", table =>
  {
    table.increments( "id" );
    table.string( "vin", 17 ).unique().notNullable();
    table.string( "make", 80 ).notNullable();
    table.string( "model", 80 ).notNullable();
    table.decimal( "mileage" ).defaultTo( 0 );
  } );
};

exports.down = function( knex ) 
{
  return knex.schema.dropTableIfExists( "cars" );
};