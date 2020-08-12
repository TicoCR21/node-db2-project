exports.seed = function( knex ) 
{
   return knex( 'cars' ).truncate()
    .then( function () {
      return knex( 'cars' ).insert( [
          { vin : "123456789ABCDEFGH", make : "Nissan", model : "Sentra SL", mileage : 40000 },
          { vin : "123456789ABCDEFGI", make : "Nissan", model : "Versa SR", mileage : 76000 },
          { vin : "123456789ABCDEFGJ", make : "Honda", model : "Civic Sport", mileage : 8000 }
        ] );
    } );
};