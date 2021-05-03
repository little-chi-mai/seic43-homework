# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour


def show_menu
  puts"-=" * 40
  puts "Calculator".center(80) # todo use .center to make it look nice
  puts"-=" * 40 # elcheapo underline
  puts"[a] - Addition"
  puts"[s] - Subtraction"
  puts"[m] - Multiplication"
  puts"[d] - Division"
  puts"[e] - Exponent"
  puts"[f] - Square root"
  puts"[q] - Quit"
  print"Enter your choice: "
end

show_menu

menu_choice = gets.chomp.downcase

def get_operands
  [gets, gets].map{ |s| s.chomp.to_i }
end

until menu_choice == 'q'

  case menu_choice

  when 'a'
    puts "You have chosen addition"
    print "Which numbers would you like to add? :\n"
    operator = :+

  when 's'
    puts "You have chosen subtraction"
    print "Which numbers would you like to subtract? :\n"
    operator = :-

  when 'm'
    puts "You have chosen multiplication"
    print "Which numbers would you like to multiply? :\n"
    operator = :*

  when 'd'
    puts "You have chosen division"
    print "Which numbers would you like to divide? :\n"
    operator = :/

  when 'e'
    puts "You have chosen Exponent"
    print "Enter number, then to the power of number :\n"
    operator = :**

  when 'f'
    puts "You have chosen Square root"
    print "Enter number? :\n"
    operand = gets.to_i

  else
    menu_choice.clear
    print "Invalid selection, try again: "
    menu_choice = gets.chomp.downcase
  end

  if menu_choice == 'f'
    puts"-=" * 40
    puts "     The answer is -> #{ Math.sqrt(operand) }"
    puts"-=" * 40
    show_menu()
    menu_choice = gets.chomp.downcase
  else
    answer = get_operands.inject(operator)
    puts"-=" * 40
    puts "     The answer is -> #{ answer }"
    puts"-=" * 40
    show_menu()
    menu_choice = gets.chomp.downcase
  end

end
puts "Thanks for using this crappy calculator"
