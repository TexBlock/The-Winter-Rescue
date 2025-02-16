onEvent('recipes', (event) => {
	let recipes = [
    {output:
        ['3x rankine:fire_clay_ball'],input:
        ['4x kubejs:kaolin_dust', '4x kubejs:impure_alumina_dust', 'minecraft:clay_ball']},
    {output:
        [Fluid.of('kubejs:sulfuric_acid', 500)],input:
        ['2x #forge:dusts/sulfur', Fluid.of('minecraft:water', 500)]},
    {output:
        [Fluid.of('kubejs:cryolite', 500)],input:
        ['2x minecraft:glowstone_dust', 'kubejs:aluminium_hydroxide_dust', Fluid.of('kubejs:sulfuric_acid', 500)]},
    {output:
        ['3x rankine:vulcanized_rubber'],input:
        ['immersiveengineering:dust_sulfur', Fluid.of('rankine:latex', 500)]},
    {output:
        [Fluid.of('kubejs:lime_water', 1000)],input:
        ['rankine:quicklime', Fluid.of('minecraft:water', 1000)]},
    {output:
        ['2x kubejs:limed_coal'],input:
        ['kubejs:anthracite_dust', Fluid.of('kubejs:lime_water', 100)]},
    {output:
        ['1x kubejs:limed_coal'],input:
        ['kubejs:subbituminous_coal_dust', Fluid.of('kubejs:lime_water', 100)]},
    {output:
        ['1x kubejs:limed_coal'],input:
        ['kubejs:coal_dust', Fluid.of('kubejs:lime_water', 100)]},
    {output:
        ['3x kubejs:limed_coal'],input:
        ['kubejs:bituminous_coal_dust', Fluid.of('kubejs:lime_water', 200)]},
    {output:
        ['2x kubejs:limed_coal'],input:
        ['3x kubejs:lignite_dust', Fluid.of('kubejs:lime_water', 200)]},
	{output:
        ['frostedheart:raw_rye_bread'],input:
        ['2x frostedheart:rye_flour', Fluid.of('minecraft:water', 1000)]},
	{output:
        ['minecraft:slime_ball'],input:
        ['create:dough','minecraft:lime_dye']},
	{output:
        ['stone_age:raw_bread'],input:
        ['create:dough','minecraft:sugar']},
	{output:
        ['kubejs:bounded_graphite'],input:
        ['4x #forge:dusts/hop_graphite',Fluid.of('kubejs:tar',1000)]}
    
	]
	let heated = [
    {output:
        ['2x rankine:high_refractory_brick'],input:
        ['4x rankine:fire_clay_ball', '2x rankine:magnesia', '2x rankine:quicklime']},
    {output:
        ['kubejs:aluminium_hydroxide_dust'],input:
        ['rankine:sodium_hydroxide', '2x kubejs:washed_ore_bauxite']},
	{output:
        [Fluid.of('frostedheart:hot_water', 1000)],input:
        ['kubejs:activated_carbon', Fluid.of('minecraft:water', 1000)]},
        {output:
        [Fluid.of('kubejs:magnesium_chlorine', 250)],input:
        ['rankine:magnesia', Fluid.of('kubejs:hydrochloric_acid', 500)]},
		{output:
        [Fluid.of('kubejs:hydrochloric_acid', 1000)],input:
        [Fluid.of('minecraft:water', 1000), Fluid.of('frostedheart:chlorine', 500)]}
	]
	//event.recipes.createMixing(Fluid.of('frostedheart:hot_water', 1000),Fluid.of('watersource:purified_water', 1000)).processingTime(10000).heated();
	recipes.forEach((recipe) => {
        event.recipes.createMixing(recipe.output, recipe.input);
    });
	heated.forEach((recipe) => {
        event.recipes.createMixing(recipe.output, recipe.input).heated();
    });
});