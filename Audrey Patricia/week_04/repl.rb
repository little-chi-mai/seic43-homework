# # Bonus Challenge
#
# ## Do-It-Yourself Ruby REPL
#
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.
#
# ### Sample Session
#
# ```
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >
# ```
puts "Dobby is at your service"
puts "**" * 40
puts "to exit type in 'exit'"

prompt = "> "

print prompt

while (input = gets.chomp)
  break if input == "exit"

  # system(input)
  puts eval(input)
  print prompt
end

puts "Goodbye, Dobby is a free elf"

# puts "Welcome to my very own REPL"
# puts "Dobby is at your service"
# puts "**" * 40
# puts "to exit type in 'exit'"
#
# require 'readline'
#
# while input = Readline.readline("> ", true)
#   break if input == "exit"
#
#   puts eval(input)
# end
#
# puts "Goodbye, Dobby is a free elf"
