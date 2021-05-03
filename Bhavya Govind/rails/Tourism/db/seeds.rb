City.destroy_all
City.create(:name => 'Delhi', :country => 'India', :image => 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=400&h=400&s=1')
City.create(:name => 'Sydney', :country => 'Australia', :image => 'https://lp-cms-production.imgix.net/2019-06/65830387.jpg')
City.create(:name => 'Bali', :country => 'Indonesia', :image => 'https://cache.marriott.com/marriottassets/marriott/DPSKS/dpsks-infinity-pool-7200-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*')

Location.destroy_all

Location.create(:name => 'Lotus Temple', :time_to_visit => 'October to March', :image => 'https://www.kahajaun.com/wp-content/uploads/2020/03/Lotus-Temple-Delhi-Kahajaun-1200x900.jpg', :info => 'Being a central highlight of Delhi,Lotus Temple is one of those religious attractions that bring all the religions together as its chief philosophy accepts every religion with an open heart. This monument was accomplished in 1986 and is a foremost site to visit in Delhi. It is built in the shape of a lotus and is stunning in its architecture and structural design which can blow anyone’s mind!')
Location.create(:name => 'Pura Tanah Lot', :time_to_visit => '6pm - 7pm', :image => 'https://www.planetware.com/photos-large/INA/bali-pura-tanah-lot-tourists.jpg', :info => "For the Balinese people, it is one of the most sacred of all the island's sea temples.The largest and holiest Hindu temple in Bali is Pura Besakih, but recently local hagglers have been harassing visitors. Every evening, throngs of tourists from Kuta, Legian, and Sanur find their way through a labyrinth of lanes lined by souvenir sellers to watch the sun setting behind the temple.")
