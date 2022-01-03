var pokemon = [{
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    },
    sushi: 'helo i am sushi'
},
{
    firstname: 'poke',
    lastname: 'man ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    },
    sushi: 'helo i am pokeman'
}];

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
for (let i = 0 ; i < pokemon.length ; i++){
    // pokemonName.call(pokemon[i], pokemon[i].sushi, 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon[i],[pokemon[i].sushi, 'algorithms']);
let x = pokemonName.bind(pokemon[i]);
x(pokemon[i].sushi, 'algorithms')
}
