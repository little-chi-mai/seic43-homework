def show_menu
  puts 'Calculator'.center(30) #TODO: You can use .center to make it look nice.
  puts '-=' * 40 # El cheapo dividing line
  puts '[a] - Addition'
  puts '[b] - Subtraction'
  puts '[c] - Multiplication'
  puts '[d] - Division'
  puts '[e] - Square Roots'
  puts '[f] - Exponents'
  puts '[q] - Quit'
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  if menu_choice == 'e'
    print 'Please enter the number: '
    num = gets.to_i
  else
    print 'Please enter first number: '
    first_num = gets.to_i
    print 'Please enter second number: '
    second_num = gets.to_i
  end

  case menu_choice
  when 'a'
    puts "The result is #{first_num + second_num}"
  when 'b'
    puts "The result is #{first_num - second_num}"
  when 'c'
    puts "The result is #{first_num * second_num}"
  when 'd'
    puts "The result is #{first_num / second_num.to_f}"
  when 'e'
    puts "The result is #{Math.sqrt(num)}"
  when 'f'
    puts "The result is: #{first_num**second_num}"
  else
    puts 'Invalid selection.'
  end

  puts '-=' * 40

  show_menu
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using this calculator'

puts '-=' * 40

puts 'Mortgage Calculator'.center(30)
print 'Please enter total mortgage amount: '
mortgage = gets.to_i # input 100,0000
print 'Please enter annual interest rate: '
rate = gets.to_f # why input 20% result is 210,0000? How debug
puts "Your monthly replayment is: #{mortgage * (1 + rate) / 12}"

puts '-=' * 40

puts 'BMI Calculator'.center(30)
print 'Please enter your height(m): '
height = gets.to_f
print 'Please enter your weight(kg): '
weight = gets.to_f
puts "Your BMI is: #{(weight / height ** 2).round(2)}"

puts '-=' * 40

puts 'Travel Calculator'.center(30)
print 'Please enter distance(miles): '
distance = gets.to_f
print 'Please enter miles per gallon: '
miles = gets.to_f
print 'Please enter prices per gallon: '
prices = gets.to_f
print 'Please enter speed in miles per hour: '
speed = gets.to_f
puts "trip time is #{(distance / speed).round(2)} hours and cost is $#{(distance / miles * prices).round(2)}"

puts '-=' * 40

# index = 0 # global variable? scope of Ruby?

def my_repl
  # index += 1
  print '> '
  input = gets.chomp.to_s
  if input.start_with?("puts") 
    print eval(input).to_s
  else
    puts eval(input).to_s
  end 
  my_repl
end

puts 'Welcome to Ruby REPL'.center(30)
my_repl
