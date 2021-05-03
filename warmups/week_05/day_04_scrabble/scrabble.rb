# # Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word. Do this using classes.
# ```ruby
# game = Scrabble.new
# game.score "cabbage"
# # => 14
# ```
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user. 
# ## Letter Values
# | Letters                      | Values |      
# | -----------------------------|:-------|
# | A, E, I, O, U, L, N, R, S, T | 1      |
# | D, G                         | 2      |
# | B, C, M, P                   | 3      |
# | F, H, V, W, Y                | 4      |
# | K                            | 5      |
# | J, X                         | 8      |
# | Q, Z                         | 10     |
# ## Source
# Inspired by the [Extreme Startup](https://github.com/rchatley/extreme_startup) game

require 'pry'

class Scrabble
    def initialize
        @scores = {
            'a' => 1,
            'e' => 1,
            'i' => 1,
            'o' => 1,
            'u' => 1,
            'l' => 1,
            'n' => 1,
            'r' => 1,
            's' => 1,
            't' => 1,
            'd' => 2,
            'g' => 2,
            'b' => 3,
            'c' => 3,
            'm' => 3,
            'p' => 3,
            'f' => 4,
            'h' => 4,
            'v' => 4,
            'w' => 4,
            'y' => 4,
            'k' => 5,
            'j' => 8,
            'x' => 8,
            'q' => 10,
            'z' => 10
        }
    end

    def score string
        total_score = 0
        
        string.split('').each do |char|
            total_score += @scores[char.downcase]
        end
        
        p total_score
        p "The score of the word #{string} is #{total_score}"
    end

end


binding.pry

