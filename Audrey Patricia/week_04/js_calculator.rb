# # The Calculator
#
# ## Part 1
# - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
# - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
# - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
# - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
# - Bonus: Round the result so there are only two digits after the decimal.

# def square_number
#   print "what is the number you want squared: "
#   number = gets.to_i
#   puts "The number #{number} squared is #{number ** 2}"
#   return number ** 2
# end

# square_number

# def half_number
#   print "Number to be halved: "
#   number = gets.to_f
#   puts "The number #{number} halved is #{number / 2}"
#   return number / 2
# end
#
# half_number

# def percent_of
#   print "First number: "
#   number1 = gets.to_f
#   print "Second number: "
#   number2 = gets.to_f
#   puts "#{number1} is #{ (number1 / number2) * 100}% of #{number2}"
#   return (number1 / number2) * 100
# end
#
# percent_of
#
# def area_circle
#   print "The radius of the circle: "
#   radius = gets.to_f
#   area = Math::PI * (radius ** 2)
#   puts "The area of a circle with radius #{radius} is #{area.round(2)}"
#   return area.round(2)
# end
#
# area_circle


# ## Part 2
# Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
# - Take half of the number and store the result.
# - Square the result of #1 and store that result.
# - Calculate the area of a circle with the result of #2 as the radius.
# - Calculate what percentage that area is of the squared result (#3).

def half_number(num)
  puts "The number #{num} halved is #{num / 2}"
  return num / 2
end

def square_number(num)
  puts "The number #{num} squared is #{num ** 2}"
  return num ** 2
end

def area_circle(radius)
  area = Math::PI * (radius ** 2)
  puts "The area of a circle with radius #{radius} is #{area.round(2)}"
  return area.round(2)
end

def percent_of(number1, number2)
  puts "#{number1} is #{ (number1 / number2) * 100}% of #{number2}"
  return (number1 / number2) * 100
end

def calculator
  print "Give me a number: "
  num = gets.to_f
  halved = half_number(num)
  squared = square_number(halved)
  area = area_circle(squared)
  percent_of(area, squared)
end

calculator
