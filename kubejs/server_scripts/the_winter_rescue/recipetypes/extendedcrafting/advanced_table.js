onEvent('recipes', (event) => {
    let recipes = [
        shapedRecipe('steampowered:bronze_flywheel', [' DED ', 'DACAD', 'ECBCE', 'DACAD', ' DED '], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:shaft',
            D: '#forge:ingots/bronze',
            E: '#forge:plates/bronze'
        }),
        shapedRecipe('steampowered:bronze_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:fluid_pipe',
            D: '#forge:plates/bronze',
            E: 'create:propeller',
            F: 'create:shaft'
        }),
        shapedRecipe('create:blaze_burner', ['EC CE', 'EBDBE', 'EBBBE', 'AAAAA'], {
            A: 'kubejs:cast_iron_plate',
            B: '#forge:plates/constantan',
            C: '#forge:plates/bronze',
            D: 'minecraft:lava_bucket',
			E: '#forge:ingots/cast_iron'
        }),
        shapedRecipe('immersiveindustry:electrolyzer', ['FFEFF','ABCBA', 'AAAAA', 'ACBCA', 'FFDFF'], {
            A: 'immersiveengineering:plate_steel',
            B: '#forge:ingots/silver',
            C: '#forge:ingots/gold',
            D: 'immersiveengineering:wirecoil_copper',
            E: 'immersiveengineering:circuit_board',
			F: '#forge:ingots/steel'
        })
    ]

    let j = 0;
    recipes.forEach(function (recipe) {
        event.recipes.extendedcrafting.shaped_table(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:extendedcrafting/advanced_table/new/' + j);
        j++;
    });
});