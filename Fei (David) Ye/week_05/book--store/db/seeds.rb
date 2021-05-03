Book.destroy_all
Book.create(:title => 'A Song of Ice and Fire', :genre => 'Fantasy', :publish_year => '1995', :cover => 'https://static.wikia.nocookie.net/iceandfire/images/b/b6/Game_of_thrones.jpeg')
Book.create(:title => 'Harry Potter', :genre => 'Fantasy', :publish_year => '1996', :cover => 'https://www.rif.org/sites/default/files/Book_Covers/sorcerersstone.jpg')
Book.create(:title => 'The History of England', :genre => 'History', :publish_year => '1754', :cover => 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3340/9781334061240.jpg')
puts "#{ Book.count } books created."


Author.destroy_all
Author.create(:name => 'George R.R. Martin', :nationality => 'American', :dob => '1948-09-20', :image => 'https://media.vanityfair.com/photos/53235792932cac31720001be/master/w_2560%2Cc_limit/george-rr-martin.jpg')
Author.create(:name => 'J.K Rowling', :nationality => 'British', :dob => '1965-07-31', :image => 'http://www.gstatic.com/tv/thumb/persons/174909/174909_v9_bb.jpg')
Author.create(:name => 'Adam Hume', :nationality => 'British', :dob => '1711-05-07', :image => 'https://cdn.britannica.com/08/131908-050-404073CE/David-Hume-oil-canvas-Allan-Ramsay-Scottish-1766.jpg')
puts "#{ Author.count } authors created."

# martin = Author.first
# rowling = Author.all[1]
# hume = Author.last

# icefire = Book.first
# potter = Book.all[1]
# england = Book.last

# martin.books << icefire
# rowling.books << potter
# hume.books << england