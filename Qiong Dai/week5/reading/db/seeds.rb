# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all

Book.create(:name => 'Norman Lindsay', :nationality => 'Australian', :dob => '1879-02-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/Norman_Lindsay_1931.jpg')
Book.create(:name => 'Russell Drysdale', :nationality => 'Australian', :dob => '1912-02-07', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Russell_Drysdale_Max_Dupain_1945.jpg')
Book.create(:name => 'James Gleeson', :nationality => 'Australian', :dob => '1915-11-21', :period => '20th century', :image => 'https://media.artgallery.nsw.gov.au/uploads/artists/James_Gleeson_nla.jpg')
Book.create(:name => 'Sidney Nolan', :nationality => 'Australian', :dob => '1917-04-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Portrait_of_Sidney_Nolan.jpg')
Book.create(:name => 'Arthur Boyd', :nationality => 'Australian', :dob => '1920-07-24', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/9/98/Arthur_Boyd.jpg')
Book.create(:name => 'Jeffrey Smart', :nationality => 'Australian', :dob => '1921-07-26', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b0/Australian_artist_Jeffrey_Smart.jpg')
Book.create(:name => 'Brett Whiteley', :nationality => 'Australian', :dob => '1939-04-07', :period => '20th century', :image => 'https://www.portrait.gov.au/files/b/9/4/f/i9331.jpg')

puts "#{ Book.count } books created."


Author.destroy_all

Author.create(:title => 'Thieves Kitchen', :year => '1929', :medium => 'etching', :style => 'Romantic', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Author.create(:title => 'The Rabbiters', :year => '1947', :medium => 'oil on canvas', :style => 'Sun-burnt dinge', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=5520')
Author.create(:title => 'The Darkening Stage', :year => '1991', :medium => 'oil on canvas', :style => 'Surrealist', :image => 'https://content.ngv.vic.gov.au/col-images/api/EPUB001055/1280')
Author.create(:title => 'Carcass', :year => '1953', :medium => 'oil and enamel paint on composition board', :style => 'Sun-burnt splendour', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=57510')
Author.create(:title => 'Bride Running Away', :year => '1957', :medium => 'oil and tempera on composition board', :style => 'Sun-burnt primitivism', :image => 'http://www.abc.net.au/news/image/4197918-3x2-940x627.jpg')
Author.create(:title => 'Portrait of Clive James', :year => '1991 - 1992', :medium => 'oil on canvas', :style => 'Modernist', :image => 'https://media.artgallery.nsw.gov.au/thumbnails/collection_images/2/276.1992%23%23S.jpg.505x464_q85.jpg')
Author.create(:title => 'The Naked Studio', :year => '1981', :medium => '1981', :style => 'Impressionist', :image => 'https://mona.net.au//media/37522/brett-whiteley-the-naked-studio-mona-01.jpg')

puts "#{ Author.count } authors created."