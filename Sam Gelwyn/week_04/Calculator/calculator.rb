def show_menu
  puts "Calculator"
  puts "-=" *40
  puts "[a] - Addition"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  
  case menu_choice
  when 'a'
    puts "you have chosen addition"
  else
    puts "invalid choice. You idiot!"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"