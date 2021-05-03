# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Product.destroy_all

Product.create(:name => 'A-Passioni Retinol Cream', :size => '30  ml', :price => 113.00, :description =>  'Combining vegan retinol with skin-nourishing superfood ingredients, this treatment helps restore bounce, resilience and youthfulness to the skin. Continued use over time reveals a brighter, more even complexion and fewer signs of ageing. This product features a convenient pump applicator.', :ingredients => 'Water/aqua/eau, glycerin, coco-caprylate, stearic acid, coconut alkanes, glyceryl stearate, niacinamide, caprylic/capric triglyceride, cetearyl alcohol, pentylene glycol, passiflora edulis seed oil, retinol, simmondsia', :rating => 4.4)
Product.create(:name => 'C-Firma Day Serum', :size => '30  ml', :price => 122.00, :description => 'Formulated with vitamin C, potent antioxidants and fruit enzymes, this anti-ageing day serum works to neutralise the damaging effects of pollution, environmental stressors and free radicals to reveal firmer, brighter, smoother and more even skin.', :ingredients => 'Water/Aqua/Eau, Dimethyl Isosorbide, Ascorbic Acid, Laureth-23, Glycerin, Lactobacillus/Pumpkin Ferment Extract, Sclerocarya Birrea Seed Oil, Dipotassium Glycyrrhizate, Glycyrrhiza Glabra (Licorice) Root Extract, Vitis Vinifera (Grape) Juice Extract, Phyllanthus Emblica Fruit Extract', :rating => 4.2)
Product.create(:name => 'Luna Sleeping Night Oil', :size => '35  ml', :price => 160.00, :description => 'An evening retinol oil treatment that targets the visible signs of ageing including plumping fine lines and wrinkles, correcting discoloration caused by the sun and pollution, reducing the appearance of pores and nourishing dry skin. Blended with blue tansy and avocado oil, this treatment also soothes redness and irritation to ensure skin looks luminous the following morning. ', :ingredients => 'Persea gratissima (extra virgin, cold pressed avocado) oil, vitis vinifera (organic, cold pressed concord grape) seed oil, rubus fruticosus (cold pressed blackberry) seed oil, salvia hispanica (cold pressed chia) oil, dimethyl isosorbide (and) hydroxypinacolone retinoate (retinol), chamomila recutita (matricaria) flower oil', :rating => 4.5)

puts "#{ Product.count } products created."

Brand.destroy_all

Brand.create(:name => 'Drunk Elephant', :motto =>'The skincare revolutionary now from head to toe.', :description => "This game-changing brand is committed to using only ingredients that actually directly benefit the skin. That means heavy-hitting actives that get serious results, combined with nourishing ingredients to care for the skin whether it's on your face, your scalp, or your body.", :established => 2012)

Brand.create(:name => 'Sunday Riley', :motto =>'Science meets proven botanicals.', :description => "Sunday Riley isn’t just the brand founder, she’s the brand formulator. Every product reflects her belief that in order for results to count, they have to be quick to show on the complexion. Her range features powerful, targeted treatment heroes designed to improve the quality of your skin.", :established => 2009)

puts "#{ Brand.count } brands created."
