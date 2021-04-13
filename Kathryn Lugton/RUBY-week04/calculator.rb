def show_menu #a function to display the menu in below calculator
  puts "Calculator".center(80) #I just picked 80 out of nowhere I think you could find out how many chars in each command line and remove the chars in your heading from that to get the answer
  puts "=-" * 40 #dividing line
  puts "[e] - Exponent"
  puts "[r] - Square root"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu #this is calling the function
menu_choice = gets.chomp.downcase #takes the menu selection and makes it lowercase just in case

until menu_choice == 'q' #keep runing program until the user decides to quit the calculator function
  case menu_choice
  when 'e' #exponent or to the power of
    print "Please type the exponential problem you would like solved (a**b): "
    exp_array = gets.chomp.split('**')
    exponential = exp_array[0].to_f ** exp_array[1].to_f
    puts "The answer is #{ exponential }."
  when 'r' #square root
    print "Please type the square root problem you would like solved (a^2): "
    sqrt_array = gets.chomp.split('^')
    square_root = Math.sqrt(sqrt_array[0].to_f)
    puts "The answer is #{ square_root }."
  when 'd' #division
    print "Please type the division problem you would like solved (a/b): "
    div_array = gets.chomp.split('/')
    division = div_array[0].to_f / div_array[1].to_f
    puts "The answer is #{ division }."
  when 'm' #multiplication
    print "Please type the multiplication problem you would like solved (a*b): "
    mult_array = gets.chomp.split('*')
    multiplication = mult_array[0].to_f * mult_array[1].to_f
    puts "The answer is #{ multiplication }."
  when 'a' #addition
    print "Please type the addition problem you would like solved (a+b): "
    add_array = gets.chomp.split('+')
    addition = add_array[0].to_f + add_array[1].to_f
    puts "The answer is #{ addition }."
  when 's' #subtraction
    print "Please type the subtraction problem you would like solved (a-b): "
    subt_array = gets.chomp.split('-')
    subtraction = subt_array[0].to_f - subt_array[1].to_f
    puts "The answer is #{ subtraction }."
  else
  puts "Invalid selection. try again"
  end
 show_menu
 menu_choice = gets.chomp.downcase
end

puts "Thanks for using this very limitingly helpful calculator!"
