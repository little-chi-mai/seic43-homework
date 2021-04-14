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


# Bonus
## Mortgage Calculator
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
  puts "Calculator" # TODO: you can use .center to make it looks nice (ysed ti center a string)
  puts "-=" * 40 #dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[sqrt] - Square root"
  puts "[mort] - Mortgage calculator"
  puts "[q] - Quit"
  puts "[bmi] - BMI calulator"
  puts "[t] - Trip calculator"
  print "Enter your choice: "
end

def get_num1
  print "The first number is: "
  num_1 = gets.to_i
end

def get_num2
  print "The second number is: "
  num_2 = gets.to_i
end

show_menu

menu_choice = gets.chomp.downcase


until menu_choice == 'q'

  case menu_choice
  when 'a'
    puts "You have chosen addition"
    num_1 = get_num1
    num_2 = get_num2
    puts "Result: #{num_1 + num_2}"

  when 's'
    puts "You have chosen subtraction"
    num_1 = get_num1
    num_2 = get_num2
    puts "Result: #{num_1 - num_2}"

  when 'm'
    puts "You have chosen multiplication"
    num_1 = get_num1
    num_2 = get_num2
    puts "Result: #{num_1 * num_2}"

  when 'd'
    puts "You have chosen division"
    num_1 = get_num1
    num_2 = get_num2
    puts "Result: #{num_1 / num_2}"

  when 'e'
    puts "You have chosen exponent"
    print "The number is: "
    num = gets.to_i
    print "This number will be calculated to the power of: "
    power_of = gets.to_i
    puts "Result: #{num ** power_of}"

  when 'sqrt'
    puts "You have chose to square root"
    print "The number to be square rooted is: "
    num = gets.to_i
    puts "Result: #{ Math.sqrt(num) }"

  when "mort"

    # M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    #
    # P = principal loan amount
    #
    # i = monthly interest rate
    #
    # n = number of months required to repay the loan

    puts "You have chosen the mortgage calculator"
    print "Enter the mortgage principal: "
    mortgage_principal = gets.to_i
    print "Enter the annual interest rate (%): "
    interest_rate = gets.to_f
    monthly_interest_rate = (interest_rate / 100) / 12
    print "Enter the term of the mortgage in years: "
    mort_term = gets.to_i

    monthly_payment = mortgage_principal * (monthly_interest_rate * (1 + monthly_interest_rate)** (mort_term * 12)) / ( (1 + monthly_interest_rate) ** (mort_term * 12) - 1)
    puts "Your monthly payment will be: #{monthly_payment}"

  when 'bmi'
    print "Enter height (m): "
    height = gets.to_f
    print "Enter weight (kg): "
    weight = gets.to_f
    bmi = (weight / height / height).round(1)
    puts "Your BMI is: #{bmi}"

    if bmi < 18.5
      puts "Eat more! You are underweight"
    elsif bmi < 25
      puts "Awesome! Normal weight range"
    elsif bmi < 30
      puts "Hmmm.. watch what you're eating, you're in the overweight range"
    else
      puts "Take care of your health, you fall within the obesity range"
    end

  when 't'
    puts "You have chosen the trip calculator"
    print "Enter distance (miles): "
    distance = gets.to_f
    print "Enter miles per gallon: "
    miles_per_gallon = gets.to_f
    print "Enter price per gallon ($): "
    price_per_gallon = gets.to_f
    print "Enter speed in miles per hour: "
    speed = gets.to_f

    trip_time = distance / speed
    cost = ((distance / miles_per_gallon) * price_per_gallon).round(2)

    puts "Total trip time: #{trip_time} hours"
    puts "Total cost: $#{cost}"


  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"
