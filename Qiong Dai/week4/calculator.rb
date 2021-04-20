=begin 
Explanation
You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

Specification:
A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu

Phase 1
Calculator functionality
Calculator should be able to do basic arithmetic (+,-, *, /)

Phase 2
Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots) 
=end




def show_menu
  puts "Calculator".center(75) 
  puts "-=" * 40 # El cheapo dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Divion"
  puts "[e] - Exponents"
  puts "[sr] - Square Roots"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  case menu_choice
  when 'a'
    puts "You have chosen addition" 
  print "Your first number: "
  num1 = gets.to_i
  print "Your second number: "
  num2 = gets.to_i
  puts "The answer is #{num1+num2}"

  when 's'
    puts "You have chosen subtraction" 
  print "Your first number: "
  num1 = gets.to_i
  print "Your second number: "
  num2 = gets.to_i
  puts "The answer is #{num1-num2}"

  when 'm'
    puts "You have chosen multiplication" 
  print "Your first number: "
  num1 = gets.to_i
  print "Your second number: "
  num2 = gets.to_i
  puts "The answer is #{num1*num2}"
  
  when 'd'
    puts "You have chosen division" 
  print "Your first number: "
  num1 = gets.to_f
  print "Your second number: "
  num2 = gets.to_i
  puts "The answer is #{num1/num2}"

  when 'e'
    puts "You have chosen Exponents" 
  print "Your first number: "
  num1 = gets.to_i
  print "Your second number: "
  num2 = gets.to_i
  puts "The answer is #{num1**num2}"

  when 'sr'
    puts "You have chosen Square Roots" 
  print "Your number: "
  num1 = gets.to_f
  puts "The answer is #{Math.sqrt(num1)}"


else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"