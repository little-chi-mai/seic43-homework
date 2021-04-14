if menu_choice == 'd'
      puts `clear`

  if $loop_times > 0
    puts "Do you want to use your stored number? (y/n)"
    use_stored = gets.chomp.downcase
    if use_stored == "y"
      puts `clear`
      print "What would you like to divide #{$storage_1} by: "
      first_num_d = gets.to_f
      answer_d = $storage_1 / first_num_d
      puts `clear`
      puts "#{$storage_1} / #{first_num_d} = #{answer_d}"
      $storage_1 = answer_d
  end

else print "What is the number you would like to divide: "
      start_num_d = gets.to_f
      puts `clear`
      print "What would you like to divide #{start_num_d} by: "
      first_num_d = gets.to_f
      answer_d = start_num_d / first_num_d
      puts `clear`
      puts "#{start_num_d} / #{first_num_d} = #{answer_d}"
      $loop_times = $loop_times + 1
      $storage_1 = answer_d
  end

  continue_d = "y"
    while continue_d == "y"
    print "Would you like to divide #{answer_d} by another number (y/n): "
    continue_d = gets.chomp.downcase
      if continue_d == "y"
        puts `clear`
        print "What would you like to divide #{answer_d} by: "
        second_num_d = gets.to_f
        puts `clear`
        puts "#{answer_d} / #{second_num_d} = #{answer_d / second_num_d}"
        answer_d = answer_d / second_num_d
        $storage_1 = answer_d
      end
    end
    puts `clear`
puts "-=-=-=- Your number (#{answer_d}) has been stored for future use -=-=-=-"
puts " "
puts "Press enter/return to continue"
anykey = gets.chomp.downcase
puts `clear`
end
