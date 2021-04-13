# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

def show_menu
  puts "-=" * 40
  puts "Calculator".center(75) #TODO You can use .center to make it look nice.
  puts "-=" * 40 #El cheapo dividing line
  puts "[+] - Addition"
  puts "[-] - Subtraction"
  puts "[x] - Multiplication"
  puts "[/] - Division"
  puts "[sq] - Square Root"
  puts "[exp} - Exponent"
  puts "[q] - Quit"
end

show_menu
print "Enter the operator: "
operator = gets.chomp
puts "Note that, where there is more than 1 number, the calculator will evaluate from left to right."

print "Enter the number(s) that you would like to work on separated by commas: "

numbersArray = gets.chomp.split(",").map(&:to_i)

until operator == 'q'

  case operator

  when '+'
    total = 0
    numbersArray.each do |arrayNum|
      total += arrayNum
    end

    puts "the result is #{total}"

  when '-'
    total = numbersArray[0]
    numbersArray[1..-1].each do |arrayNum|
      total -= arrayNum
    end

    puts "the result is #{total}"

  when 'x'
    puts "You have chosen multiplication"

    total = numbersArray[0]
    numbersArray[1..-1].each do |arrayNum|
      total = total * arrayNum
    end

    puts "the result is #{total}"

  when '/'
    puts "You have chosen division"

    total = numbersArray[0]
    numbersArray[1..-1].each do |arrayNum|
      total = total / arrayNum.to_f
    end

    puts "the result is #{total}"

  when 'sq'
    puts Math.sqrt(numbersArray[0])

  when 'exp'
    puts numbersArray[0]**numbersArray[1r]

  else
    puts "Invalid selection, you idiot."
  end

  show_menu
  print "Enter the operator: "
  operator = gets.chomp
  print "Enter the number(s) that you would like to work on separated by commas: "
  numbersArray = gets.chomp.split(",").map(&:to_i)

end

puts "Thanks for using this crappy calculator - we really appreciate your support"
