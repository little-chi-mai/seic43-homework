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
  puts "calculator"  # use .center method
  puts "-=" * 40 # chepo dividing line
  puts"['a']/['+'] - Addition"
  puts"['s']/['-'] - Substraction"
  puts"['m']/['*']- Multiplication"
  puts"['d']/['/']- Division"
  puts"['r']/['√']- Square root" # option + v to get symbol
  puts"['e']/['**']- Exponent"
  puts"['BMI']- Body mass index"
  puts"['mc']- Mortgage Calculation"
  puts"['tt']- Trip Calculator"
  puts"['q']/ - quit"

  print "Enter your choice for calculator: "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
    when 'a', '+'
      puts "you have choosen addition"
      print "Enter first number: "
      n1 = gets.to_f
      print "Enter second number you want to add: "
      n2 = gets.to_f
      add = n1 + n2
      puts "#{n1} + #{n2} is #{add}"

    when 's', '-'
      puts "you have choosen substraction"
      print "Enter first number: "
      n1 = gets.to_f
      print "Enter second number you want to substract: "
      n2 = gets.to_f
      substraction = n1 - n2
      puts "#{n1} - #{n2} is #{substraction}"

    when 'm', '*'
      puts "you have choosen multiplication"
      print "Enter first number: "
      n1 = gets.to_f
      print "Enter number you want to myltiply by: "
      n2 = gets.to_f
      multiplication = n1 * n2
      puts "#{n1} * #{n2} is #{multiplication}"

    when 'd', '/'
      puts "you have choosen division"
      print "Enter number you want to devide: "
      n1 = gets.to_f
      print "Enter number want to divide by: "
      n2 = gets.to_f
      division = n1 / n2
      puts "#{n1} / #{n2} is #{division}"

    when 'r', '√'
      puts "you have choosen Square root"
      print "Enter number for square root value: "
      n1 = gets.to_f
      square_root = Math.sqrt(n1)
      puts "Square roor of #{n1} is #{square_root}"

    when 'e', '**'
      puts "you have choosen Exponent"
      print "Enter first number: "
      n1 = gets.to_f
      print "Enter second number: "
      n2 = gets.to_f
      exponent = n1 ** n2
      puts "#{n1} ** #{n2} is #{exponent}"

    when 'mc'
      puts "you have choosen Mortgage Calculation"
      print "enter loan amount: "
      loan_amount = gets.chomp.to_i
      print "Enter length of time in months: "
      time = gets.chomp.to_i
      print "Enter interest rate: "
      inrerest_rate = gets.chomp.to_f/100

      i = (1+inrerest_rate /12)**(12/12)-1
      annuity = (1-(1/(1+i))**time)/i

      payment = loan_amount/annuity

      puts "\n$%.2f per month" % [payment]

    when 'bmi'
      print "you have choosen BMI: "
      print "Please enter your height in meter: "
      height = gets.to_f
      print "Please enter weight in kg: "
      weight = gets.to_f
      body_mass_index = weight / (height * height)
       if body_mass_index < 18.5
           puts "BMI is #{body_mass_index.round(2)}. You are underweight"
       elsif body_mass_index >= 18.5 && body_mass_index < 25.0
           puts "BMI is #{body_mass_index.round(2)}. Healthy weight range"
       elsif body_mass_index >= 25.0 && body_mass_index < 30.0
           puts "BMI is #{body_mass_index.round(2)}.you are overweight"
       else
           puts "BMI is #{body_mass_index.round(2)}. you are obese"
       end

    when 'tt'
       puts " You have choosen trip Calculator"

       print "Enter distance: " # 1000 mile
       distance = gets.to_f
       # distance = distance / 100 # to get an average for 100, 1 mile == 1.6km
       print "Enter miles per gallon: " # 25 miles/gallon
       miles = gets.to_f
       fuel_required = distance / miles # get gallon per 100 miles
       print "price per gallon: " # 1.50
       fuel_price = gets.to_f
       fuel_price_calculation = fuel_required * fuel_price
       print "speed in miles per hour: " # 18 miles/hour
       speed = gets.to_i
       time = distance / speed

          puts "Total trip cost #{fuel_price_calculation.round(2)}$ and it will take #{time} hours}"
    else
      puts "Invalid selection"
  end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thank you for using calculator"
