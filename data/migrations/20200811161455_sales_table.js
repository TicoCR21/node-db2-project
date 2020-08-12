exports.up = function( knex ) 
{
  return knex.schema.createTable( "sales", table =>
  {
    table.increments( "id" );
    table.integer( "car_id" );
    table.boolean( "sold" ).defaultTo( false );
    table.foreign( "car_id" ).references( "cars.id" );
  } );
};

exports.down = function( knex ) 
{
  return knex.schema.dropTableIfExists( "sales" );
};