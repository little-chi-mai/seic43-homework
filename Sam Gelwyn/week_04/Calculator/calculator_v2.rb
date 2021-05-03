def show_menu
  puts "\n"*2
  puts "Calculator"
  puts "-=" *60
  puts "[+] - Addition"
  puts "[-] - Subtraction"
  puts "[*] - Multiplication"
  puts "[/] - Division"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def addition
  puts "Enter first number: "
  num1 = gets.to_f
  puts "Enter second number: "
  num2 = gets.to_f
  puts "\n"*2
  puts "#{num1} + #{num2} = #{num1 + num2}"
  puts "\n"*2
end 

def multiplication
  puts "Enter first number: "
  num1 = gets.to_f
  puts "Enter second number: "
  num2 = gets.to_f
  puts "\n"*2
  puts "#{num1} * #{num2} = #{num1 * num2}"
  puts "\n"*2 
end 

def subtraction
  puts "Enter first number: "
  num1 = gets.to_f
  puts "Enter second number: "
  num2 = gets.to_f
  puts "\n"*2
  puts "#{num1} - #{num2} = #{num1 - num2}"
  puts "\n"*2
end

def division
  puts "Enter the numerator: "
  num1 = gets.to_f
  puts "Enter the denominator: "
  num2 = gets.to_f
  puts "\n"*2
  puts "#{num1} / #{num2} = #{num1 / num2}"
  puts "\n"*2
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  
  case menu_choice
  when '+'
    
    puts "you have chosen Addition"
    addition
   
  when '-'
    puts "you have chosen Subtraction"
    subtraction
  when '*'

    puts "you have chosen Multiplication"
    multiplication

  when '/'
    puts "you have chosen Division"
    division
  
  else
    puts "invalid choice. You idiot!"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"