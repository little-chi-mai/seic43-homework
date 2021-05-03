# # Sales by Match
# There is a large pile of socks that must be paired by color. 
# Write a function that accept an array of integers representing the color of each sock, and return the number of pairs of socks with matching colors.
# ```ruby
# sock_merchant [1, 2, 1, 2, 1, 3, 2]
# # => expect to return 2
# # Because there is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
# ```

def sock_merchant array
    socks_count = {}
    pairs_count = {}

    array.each do |color|
        if socks_count.keys.include? color
            socks_count[color] += 1
        else
            socks_count[color] = 1
        end
    end

    p socks_count

    socks_count.map do |k, v|
        if v % 2 == 0
            pairs_count[k] = v/2
        else 
            pairs_count[k] = (v - 1)/2
        end
    end

    p pairs_count

    p result = pairs_count.values.sum
end

sock_merchant [1, 2, 1, 2, 1, 3, 2]