def menu
  puts "|//\\|" * 10
  puts "Welcome On Board!".center(50)
  puts ">><<" *14
  puts "The MTA lines and stations are below:"

  puts "N: Times Square, 34th, 28th, 23rd, Union Square, 8th"

  puts "L:8th, 6th, Union Square, 3rd, 1st"

  puts "6: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place"

  puts ">><<" *14

end

menu

#get user input and store in variables for later use

print "Please confirm your start station: "
start_station = gets.chomp

print "Please confirm what line that station is on: "

start_line_key = gets.chomp.to_sym

print "Please confirm your end station: "
end_station = gets.chomp

print "Please confirm what line that station is on: "

end_line_key = gets.chomp.to_sym

puts ">><<" *14

#create object containing each line in the system

all_lines = {
        :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

        :L => ["8th", "6th", "Union Square", "3rd", "1st"],

        :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    };

#function to name every stop on a single line between specified stops
def name_line_stops (line_array, start_station, end_station)

  start_index = line_array.index(start_station)
  end_index = line_array.index(end_station)

  stops_to_name = []
  if start_index < end_index
    stops_to_name = line_array[start_index..end_index]

  elsif start_index > end_index
    stops_to_name = line_array[end_index..start_index].reverse
  end

  stops_to_name

end

#Pull the relevant arrays for the start and end lines from the all_lines object based on the key that the user entered
start_line_array = all_lines [start_line_key]
end_line_array = all_lines [end_line_key]

#Create sub-arrays which note only the stops that the user will actually traverse in each line
first_line_stops = name_line_stops(start_line_array,start_station,"Union Square").drop(1)
end_line_stops = name_line_stops(end_line_array,"Union Square",end_station).drop(1)

#Calculate the number of stops by adding the two arrays together and taking the length
number_of_stops = (first_line_stops + end_line_stops).size

#if the start station is Union Square, you only need to list the stops in the end line as the first line doesn't in practice exist
if start_station == "Union Square"
puts "You must travel through the following stops on the #{end_line_key} line: #{end_line_stops.join(", ")}."

#otherwise, list all of the stops in the start line
else puts "You must travel through the following stops on the #{start_line_key} line: #{first_line_stops.join(", ")}."
end

#If the end or start stations are  Union Square, you won't need to change - only print the change and second line if this isn't the case
unless end_station == "Union Square" || start_station == "Union Square"
  puts "Change at Union Square. Your journey continues through the following stops: #{end_line_stops.join(", ")}."
end

puts "#{number_of_stops} stops in total"
