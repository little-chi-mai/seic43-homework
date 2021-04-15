# # The Calculator
#
# ## Part 1
# - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
# - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
# - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
# - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
# - Bonus: Round the result so there are only two digits after the decimal.
#
# ## Part 2
# Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
# - Take half of the number and store the result.
# - Square the result of #1 and store that result.
# - Calculate the area of a circle with the result of #2 as the radius.
# - Calculate what percentage that area is of the squared result (#3).

def square_number(number)
  # print "Please enter number to square it: "
  # num = gets.to_i
  # puts "The result of squaring the #{num} is #{num * num}"
  result = number * number
  # puts "The result of squaring the #{number} is #{result}"
end

square_number(3)

def half_number(number)
  result = number / 2
  # puts "Half of #{number} is #{number / 2}."
end

half_number(10)

def percent_of (num1, num2)
  result = (num1 * 100) / num2
  # puts "#{num1} is #{result} of #{num2}"
end

percent_of(2, 4)

def area_of_circle(radius)
area = 22/7 * (radius * radius).round(2);
# puts "The area for a circle with radius #{radius} is #{area}."
end

area_of_circle(3)

def perform_calculation (number)
  half_of_number = half_number(number)
  square_of_number = square_number(half_of_number)
  area_of_circle = area_of_circle(square_of_number)
  percentage = percent_of(area_of_circle, square_of_number)

  puts "Half of #{number} is #{half_of_number}
  square of that #{half_of_number} is #{square_of_number}
  area os the circle with #{square_of_number} as radius is #{area_of_circle}
  #{area_of_circle} is #{percentage} % of #{square_of_number}"

end

perform_calculation(20)
