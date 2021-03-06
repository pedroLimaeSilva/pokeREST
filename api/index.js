'use strict';

module.exports = function(app) {

  app.route('/')
    .get(
      (req, res) => {
        res.sendFile('index.html', { root: __dirname + "" });
      }
    )

  // Pokemon Routes
  var pokemonList = require('./pokemon/pokemon.controller');
  app.route('/pokemon')
    .get(pokemonList.list_all_pokemon)
    .post(pokemonList.create_a_pokemon);
  app.route('/pokemon/:pokemonId')
    .get(pokemonList.read_a_pokemon)
    .put(pokemonList.update_a_pokemon)
    .patch(pokemonList.update_a_pokemon)
    .delete(pokemonList.delete_a_pokemon);

  // Pokedex Routes
  var pokedex = require('./pokedex/pokedex.controller');
  app.route('/pokedex')
    .get(pokedex.get_pokedex);
    // .post(pokedex.add_entry);
  app.route('/pokedex/:dexNumber')
    .get(pokedex.get_entry);
/*
    .put(pokemonList.update_an_entry)
    .delete(pokemonList.delete_an_entry);
*/

  // Level Routes
  var levelTable = require('./level/level.controller');
  app.route('/level')
    .get(levelTable.get_levels)
    .post(levelTable.add_entry);
  app.route('/level/:level')
    .get(levelTable.read_a_level);

  // Evolution Routes
  var evolutionTable = require('./evolution/evolution.controller');
  app.route('/evolution')
    .get(evolutionTable.get_evolutions)
    .post(evolutionTable.add_entry);
  app.route('/evolution/:dex')
    .get(evolutionTable.read_evolutions);

  // Trainer Routes
  var trainerTable = require('./trainer/trainer.controller');
  app.route('/trainers')
    .get(trainerTable.get_all_trainers);
  app.route('/trainers/:trainerId')
    .get(trainerTable.get_trainer)
    .patch(trainerTable.update_trainer);
  app.route('/trainers/:trainerId/dex')
    .get(trainerTable.get_trainer_dex)
    .post(trainerTable.add_dex);

  var adventureList = require('./adventures/adventure.controller');
  app.route('/adventures')
     .get(adventureList.get_adventures)
     .post(adventureList.add_adventure);
  app.route('/adventures/:id')
     .get(adventureList.get_adventure)
     .patch(adventureList.updateAdventure);
};