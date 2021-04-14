def show_menu
    puts " Calculator"#to-do you can use .center to make it look nicer
    puts "-=" *40
    puts "[a] - addition"
    puts "[b] - substraction"
    puts "[c] - multiplication"
    puts "[d] - division"
    puts "[e] - exponent"
    puts "[f] - square root"
    puts "[q] - Quit"
    print "enter your choice: "
end
puts "enter first number: "
first_num = gets.to_f
puts "enter second number: "
second_num = gets.to_f
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

    case menu_choice
        
    when 'a'
        puts "you have choosen addition"
        print "The result is #{first_num + second_num}" 
    when 'b'
        puts "you have choosen substraction"
        print "The result is #{first_num - second_num}"  
    when 'c'
        puts "you have choosen multiplication"
        print "The result is #{first_num * second_num}"
    when 'd'
        puts "you have choosen division"
        print "The result is #{first_num / second_num}"
    when 'e'
        puts "You have choosen exponent"
        print "the result is #{first_num ** second_num}"
    when 'f'
        puts "you have choosen square root"
        print "The result is #{first_num ** ( 1 / second_num)}"
    else
        puts "Invalid selection."
    end

    show_menu 
    
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"

