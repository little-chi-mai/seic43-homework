puts "Welcome to David's REPL"
puts "Enter q to quit anytime"

input = nil

until input == "q"
print "> "
input = gets.chomp

puts eval(input)

end
