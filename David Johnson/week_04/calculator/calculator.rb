def show_menu
  puts "<>" * 40
  puts "+-/* Welcome to the Calculator +-/*" #lookup the center method
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[sr] - Square Root"
  puts "[cr] - Cube Root"
  puts "[q] - Quit"
  puts "[mort] - Mortage Repayments"
  puts "[bmi] - BMI Calculator"
  puts "[trip] - Trip Cost Calculator"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def get_number
  print "Enter a number: "
  num = gets.to_f
end

def addition (a, b)
  a + b
end

def subtraction (a, b)
  a - b
end

def multiply (a, b)
  a * b
end

def divide (a, b)
  a / b
end

def exponent (a, b)
  a ** b
end

def bmi_calculator (weight, height)
  weight / (height ** 2)
end

def mortgage_calculator (p, r, n)
  numerator = p * (r * ((1 + r) ** n))
  denominator = ((1 + r) ** n) - 1
  a = numerator / denominator
end

def trip_calculator (distance, mpg, ppg, speed)
  cost = (distance / mpg) * ppg
end

until menu_choice == "q"
  case menu_choice
  when 'a'
    puts "You have chosen Addition. "
    num1 = get_number
    num2 = get_number
    puts "ANSWER: #{addition num1, num2}"
  when 's'
    puts "You have chosen Subtraction"
    num1 = get_number
    num2 = get_number
    puts "ANSWER: #{subtraction num1, num2}"
  when 'm'
    puts "You have chosen Multiplication"
    num1 = get_number
    num2 = get_number
    puts "ANSWER: #{multiply num1, num2}"
  when 'd'
    puts "You have chosen Multiplication"
    num1 = get_number
    num2 = get_number
    puts "ANSWER: #{divide num1, num2}"
  when 'e'
    puts "You have chosen Exponent"
    puts "Let's get a base number."
    num1 = get_number
    puts "Now let's get an exponent."
    num2 = get_number
    puts "ANSWER: #{exponent num1, num2}"
  when 'sr'
    puts "You have chosen Square Root"
    puts "Which number would you like the Square Root of?"
    num1 = get_number
    puts "ANSWER: #{Math.sqrt(num1)}"
  when 'cr'
    puts "You have chosen Cube Root"
    puts "Which number would you like the Cube Root of?"
    num1 = get_number
    puts "ANSWER: #{Math.cbrt(num1)}"
  when "mort"
    puts "How much have you borrowed?"
    p = get_number
    puts "What is the annual interest rate (whole numbers, e.g. 1% = 1)?"
    r = (get_number / 12) / 100
    puts "What is the term of the loan (in years?)"
    n = get_number * 12
    puts "Your monthly repayment is $#{(mortgage_calculator p, r, n).round(2)}."
  when "bmi"
    puts "How much do you weigh in kilograms?"
    weight = get_number
    puts "What is your height in centimetres?"
    height = get_number / 100
    puts "Your BMI is #{bmi_calculator weight, height}."
  when "trip"
    puts "How many miles are you travelling?"
    distance = get_number
    puts "How many miles to the gallon does your car get?"
    mpg = get_number
    puts "What is the price per gallon?"
    ppg = get_number
    puts "What is your desired speed in mph?"
    speed = get_number
    time = distance / speed
    hours = (distance / speed).floor
    minutes = ((time - hours) * 60).round(0)
    puts "The total time will be #{hours} hours and #{minutes} minutes. The trip will cost will be $#{trip_calculator distance, mpg, ppg, speed}"
  end
show_menu
menu_choice = gets.chomp.downcase
end
