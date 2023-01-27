/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('personnelles', function(table){
        table.string('User_id', 225).primary();
        table.string('Nom', 225).notNullable();
        table.string('Prenom', 225).notNullable();
        table.date('DateDeNaissance').notNullable();
        table.string('LieuDeNaissance',100).notNullable();
        table.string('NumeroDeTelephone', 100).notNullable();
        table.string('CodeTuteur', 100).notNullable();
        table.string('Photo', 225).notNullable();
        table.string('Raison',100).notNullable();
        table.string('ValueRaison', 100).notNullable();
        table.text('Detailes', 'mediumtext').notNullable();

    }).then(result=>console.log(result)).catch(err=>console.log(err))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('personnelles')
};
