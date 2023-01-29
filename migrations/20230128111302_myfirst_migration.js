/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Personnes', function(table){
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

    }).createTable('PersonnInfo', function (table) {
        table.string('User_id');
        table.foreign('User_id').references('Personnes.User_id');
        table.string('Status', 100).notNullable();
        table.integer('Experience').unsigned();
        table.string('Sierger', 50).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema
        .dropTable('Personnes')
        .dropTable("PersonnInfo");
};
