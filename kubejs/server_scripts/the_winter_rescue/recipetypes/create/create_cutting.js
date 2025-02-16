onEvent('recipes', (event) => {
    var data = {
        recipes: [

		{output:'9x minecraft:iron_ingot',input:'minecraft:iron_block'},
		{output:'9x minecraft:gold_ingot',input:'minecraft:gold_block'},
		{output:'9x minecraft:diamond',input:'minecraft:diamond_block'},
		{output:'9x minecraft:emerald',input:'minecraft:emerald_block'},
		{output:'9x minecraft:lapis_lazuli',input:'minecraft:lapis_block'},
		{output:'9x minecraft:netherite_ingot',input:'minecraft:netherite_block'},
		{output:'2x engineersdecor:metal_bar',input:'#forge:plates/steel'},
                {output:'4x frostedheart:charcoal_stick',input:'kubejs:charcoal_briquette'},
                {output:'4x frostedheart:coal_stick',input:'kubejs:coal_briquette'}
        ]
    };
    const woods = []
	//auto bulk slab recipes
	Ingredient.of("#minecraft:planks").getItemIds().forEach((name)=>{
		woods.push(name.replace("_planks",""));
	});
	Ingredient.of("#minecraft:logs").getItemIds().forEach((name)=>{
		if(name.indexOf("stripped_")!=-1){
			if(name.indexOf("log")!=-1){
				event.recipes.createCutting("4x "+name.replace("_log","").replace("stripped_","")+"_planks",name);
			}else if(name.indexOf("stem")!=-1){
				event.recipes.createCutting("4x "+name.replace("_stem","").replace("stripped_","")+"_planks",name);
			}else if(name.indexOf("wood")!=-1){
				event.recipes.createCutting("4x "+name.replace("_wood","").replace("stripped_","")+"_planks",name);
			}
		}else if(name.indexOf("log")!=-1||name.indexOf("stem")!=-1){
			var rl=name.split(":")
			event.remove({output:rl[0]+":stripped_"+rl[1],type:"create:cutting"});
			event.recipes.createCutting(rl[0]+":stripped_"+rl[1],name);
		}else if(name.indexOf("wood")!=-1){
			var rl=name.split(":")
			event.remove({output:rl[0]+":stripped_"+rl[1],type:"create:cutting"});
			event.recipes.createCutting(rl[0]+":stripped_"+rl[1],name);
			
		}
	});
	woods.forEach((wood)=>{
		event.remove({output: wood+"_slab", type: 'minecraft:crafting_shaped'});
		data.recipes.push({output:'2x '+wood+"_slab",input:wood+"_planks"})
	});
    data.recipes.forEach((recipe) => {
        event.recipes.createCutting(recipe.output, recipe.input);
    });
});
