
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '12345GHTK4578JKL9', make: 'jeep', model: 'cherokee', mileage: '101350.5', transmission: 'manual', title: 'clear'},
      ]);
    });
};
