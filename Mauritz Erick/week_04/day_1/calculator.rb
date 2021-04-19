def show_menu
    puts "Calculator".center(80) #Todo: center to make it look nice
    puts "=" * 80 #El cheapo dividing line
    puts "[a] - Addition"
    puts "[s] - Substract"
    puts "[m] - Multipilication"
    puts "[d] - Division"
    puts "[e] - Exponential"
    puts "[sq] - Square root"
    #Todo: add other options here
    
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

    case menu_choice
    when 'a'
        puts "You have chosen addition" #todo:actually do the addition
        #Todo:add support for other operation
        print "Input 1: "
        input1 = gets.to_i
        print "Input 2: "
        input2 = gets.to_i
        result = input1 + input2
        print "The result of Addition is: #{ result } \n" 

    when 's'
        puts "You have chosen substraction"
        print "Input 1: "
        input1 = gets.to_i
        print "Input 2: "
        input2 = gets.to_i
        result = input1 - input2
        print "The result of Substraction is: #{ result } \n" 

    when 'm'
        puts "You have chosen multiplication"
        print "Input 1: "
        input1 = gets.to_i
        print "Input 2: "
        input2 = gets.to_i
        result = input1 * input2
        print "The result of Multiplication is: #{ result } \n" 

    when 'd'
        puts "You have chosen division"
        print "Input 1: "
        input1 = gets.to_i
        print "Input 2: "
        input2 = gets.to_i
        result = input1 / input2
        print "The result of Division is: #{ result } \n " 

    when 'e'
        puts "You have chosen exponential"
        print "Input 1: "
        input1 = gets.to_i
        print "Input 2: "
        input2 = gets.to_i
        result = input1 ** input2
        print "The result of Exponential is: #{ result } \n " 

    when 'sq'
        puts "You have chosen square root"
        print "Input 1: "
        input1 = gets.to_i
        result = Math.sqrt(input1)
        print "The result of Square Root is: #{ result } \n " 

        
    else
        puts "Invalid selection"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this Calculator"



