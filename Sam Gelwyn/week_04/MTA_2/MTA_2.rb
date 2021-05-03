# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)


# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

# find line to which stops belong

# get start and finish stops

# if on the same line then find the stops between and the order
  # display ordered list of stops
# if not on the same line then find the stops (and their order) between start and Union Square on the start line, and find the stops(and their order) between union square and the finsh on the finish line.
  # display sorted list of first leg,  say transfer at union square, display sorted list of last leg.

subway_lines = {
  "N_Line" => {
    :stops => [ "Times Square", "thirty-fourth", "twenty-eighth", "twenty-third", "Union Square", "eighth"]
  },
  "L_Line" => {
    :stops => [ "8th", "6th", "Union Square", "3rd", "1st"]
  },
  "6_Line" => {
    :stops => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  },
}

def show_menu_start_line
  puts "\n"*3
  puts "MTA Trip Planner"
  puts "\n"*3
  puts "Please choose your starting line:"
  puts "\n"
  puts "[n] - N Line"
  puts "[l] - L Line"
  puts "[6] - 6 Line"
  puts "[q] - Quit"
  puts "\n"*3
  print "Enter your choice: "
  
end

def show_menu_finish_line
  puts "\n"*3
  puts "Please choose your finish line:"
  puts "\n"
  puts "[n] - N Line"
  puts "[l] - L Line"
  puts "[6] - 6 Line"
  puts "\n"*3
  print "Enter your choice: "
end

show_menu_start_line
start_line_choice = gets.chomp.downcase

# if start_line_choice == "q"
#   puts "have a nice day"
#   exit(true)
# end

until start_line_choice == "q"
  
  case start_line_choice
  when "n"
    puts "\n"
    puts "you have chosen N Line"
    start_line = subway_lines["N_Line"]


  when "l"
    puts "\n"
    puts "you have chosen L Line"
    start_line = subway_lines["L_Line"]

  when "6"
    puts "\n"
    puts "you have chosen 6 Line"
    start_line = subway_lines["6_Line"]
  
  when "q"
    puts "have a nice day"
    exit(true)

  else
    puts "I'm sorry Dave, I cannot let you do that"
    show_menu_start_line
    start_line_choice = gets.chomp.downcase
  end
    
  # show_menu_start_line
  # start_line_choice = gets.chomp.downcase

# end
