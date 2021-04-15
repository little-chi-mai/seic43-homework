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


##

train = {
    "lineN" => ['Times Square', '34th', '28th', '23rd', 'Union Square','8th'],
    "lineL" => ['8th', '6th', 'Union Square', '3rd','1st'],
    "line6" =>['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

puts "Select strating line #{train.keys}"
#puts "Enter starting line: "
startingLine = gets.chomp
#puts "Enter starting place: "
puts "Select starting location from the list: #{train[startingLine]}"
startingPlace = gets.chomp
puts "Select destnation line #{train.keys}"
destinationLine = gets.chomp
puts "Select destination location from the list: #{train[destinationLine]}"
destinationPlace = gets.chomp
junction = "Union Square"
number_of_stops = 0


def get_path(line,start,destination,train)
    starting_index = train[line].index(start)
    destination_index = train[line].index(destination) 
    path_way = []
    if starting_index < destination_index
        path_way = train[line].slice(starting_index + 1, (destination_index - starting_index))    
    else
        path = train[line].slice(destination_index , (starting_index - destination_index))
        path_way = path.reverse
    end
    return path_way
end

if startingLine == destinationLine
    path_way = get_path(startingLine,startingPlace,destinationPlace,train)
    puts "#{path_way}"
    puts "You must travel through the folowing stops on the #{startingLine} line: #{path_way.join(',')}."
    puts "#{path_way.size} stops in total."
else
    if startingPlace == junction
        puts "Change at Union Square"
        path_way = get_path(destinationLine,junction,destinationPlace,train)
        number_of_stops = path_way.size
        puts "Your journey continues through the following stops: #{path_way.join(',')}."
        puts "#{number_of_stops} stops in total"

    elsif destinationPlace == junction
        path_way = get_path(startingLine,startingPlace,junction,train)
        puts  "You must travel through the following stops on the #{startingLine} line: #{path_way.join(',')}"
        puts  "Change at Union Square."
        number_of_stops = path_way.size
        puts "#{number_of_stops} stops in total"

    else
        path_way = get_path(startingLine, startingPlace,junction,train)
        puts "You must travel through the following stops on the #{startingLine.chomp} line: #{path_way.join(',')}."
        puts "Change at Union Square."
        number_of_stops = path_way.size
        path_way = get_path(destinationLine,junction,destinationPlace,train)
        number_of_stops = number_of_stops + path_way.size
        puts "Your journey continues through the following stops: #{path_way.join(',')}."
        puts "#{number_of_stops} stops in total."
    end
end

