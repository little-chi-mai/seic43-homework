Habitat.destroy_all

Habitat.create(:name => 'Forest', :location => 'The Amazon, The Tropical Rainforest of Borneo', :characteristics => 'high animal and vegetal diversity, high average temperatures', :image => 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-935746242-1567619461.jpg')

Habitat.create(:name => 'Tundra', :location => 'Alaska, Canada, Russia, Greenland, Iceland, and Scandinavia', :characteristics => 'low temperatures, short vegetation, long winters, limited drainage', :image => 'https://media.nationalgeographic.org/assets/photos/264/066/c6a95d8b-9d45-4b01-a13e-c7f92e1f765b.jpg')

Habitat.create(:name => 'Grasslands', :location => 'African Savanna, plains of the Midwest, US', :characteristics => 'dominated by grasses, few large trees, extreme dry and rainy seasons', :image => 'https://www.insidescience.org/sites/default/files/2020-06/african-savannah_cropped.jpg')

Habitat.create(:name => 'Aquatic', :location => 'Pacific Ocean, Great Barrier Reef', :characteristics => 'Wet. duhh..., diverse assortment of wildlife', :image => 'https://cdn.britannica.com/66/194766-050-5908DD25/canyon-swell-reef-sunlight-water-surface-Pacific.jpg')

puts "#{ Habitat.count } habitats were created."

Animal.destroy_all

Animal.create(:name => 'Jaguar', :scientific_name => 'Panthera onca', :weight => '56 - 96 kg', :diet => 'Carnivores', :funfact => "The word 'jaguar' comes from the indigenous word 'yaguar', which means 'he who kills with one leap'.", :image => 'https://psmag.com/.image/t_share/MTU4OTM5MDU3NzgxNDgzMTU3/gettyimages-162203296.jpg')

Animal.create(:name => 'Polar Bear', :scientific_name => 'Ursus maritimus', :weight => '250 - 450 kg', :diet => 'Carnivores', :funfact => 'Polar bears have black skin and males can weigh up to 2 times of a female', :image => 'https://thsclarion.com/wp-content/uploads/2021/03/bear.jpg')

Animal.create(:name => 'African Lion', :scientific_name => 'Panthera leo', :weight => '130 - 190 kg', :diet => 'Carnivore', :funfact => 'Lion have integrated spikes on their toungues to lick of meat from bones of their prey', :image => 'https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg' )

Animal.create(:name => 'Whale Shark', :scientific_name => 'hincodon typus', :weight => '19,000 kg', :diet => 'Omnivores', :funfact => 'hale Sharks are Filter Feeders That Can’t Bite nor Chew', :image => 'https://www.ecomagazine.com/images/Newsletter/0_2019/Week_1-21-19/whale-1010429.jpg')

puts "#{ Animal.count } animals were created."


## Associations ##########################################################

forest = Habitat.first
jaguar = Animal.first
forest.animals << jaguar

aquatic = Habitat.last
w_shark = Animal.last
aquatic.animals << w_shark

habitats = Habitat.all
animals = Animal.all

tundra = habitats[1]
polar_b = animals[1]
tundra.animals << polar_b

savanna = habitats[2]
lion = animals[2]
savanna.animals << lion
