require "pry"

def plan_trip (input)
  #Splits the input string into one big array
  input = input.split(" ")

  #these are for cross referencing the use substrings from the above array
  lines_array = ["n", "l", "6"]
  stations_array = ["Times", "34th", "8th", "6th", "Union", "3rd", "1st", "Grand", "33rd", "28th", "23rd", "Astor"]

  #These functions return an unsorted array of the origin line, destination line, origin stop, and destination stop.
  lines_match = lines_array & input
  stations_match = stations_array & input

  #This confirms which line is the origin line and which is destination line based on their order in the initial input
  def line_finder (lines_match, input_string)
    if lines_match.length == 1
      origin_line = lines_match[0]
      destination_line = lines_match[0]
    elsif input_string.index(lines_match[0]) < input_string.index(lines_match[1])
      origin_line = lines_match[0]
      destination_line = lines_match[1]
    else
      origin_line = lines_match[1]
      destination_line = lines_match[0]
    end
    ouput = [origin_line, destination_line]
  end

  #ordered array of lines (origin first, then destination)
  lines = line_finder lines_match, input

  #This ensures that we know which stop is the origin and the destination
  def station_finder (stations_match, input_string)
    if stations_match.length == 1
      origin_stop = stations_match[0]
      destination_stop = stations_match[0]
    elsif input_string.index(stations_match[0]) < input_string.index(stations_match[1])
      origin_stop = stations_match[0]
      destination_stop = stations_match[1]
    else
      origin_stop = stations_match[1]
      destination_stop = stations_match[0]
    end
    output = [origin_stop, destination_stop]
  end

  #ordered array of stations (origin first, then destination)
  stations = station_finder stations_match, input

  #Adds "Square", "Place", and "Central" back to the names of the relevant stops
  def add_squares_places (stations_array)
    stations_array[0] = stations_array[0] + " Square" if stations_array[0] == "Union"
    stations_array[1] = stations_array[1] + " Square" if stations_array[1] == "Union"
    stations_array[0] = stations_array[0] + " Square" if stations_array[0] == "Times"
    stations_array[1] = stations_array[1] + " Square" if stations_array[1] == "Times"
    stations_array[0] = stations_array[0] + " Place" if stations_array[0] == "Astor"
    stations_array[1] = stations_array[1] + " Place" if stations_array[1] == "Astor"
    stations_array[0] = stations_array[0] + " Central" if stations_array[0] == "Grand"
    stations_array[1] = stations_array[1] + " Central" if stations_array[1] == "Grand"
    return stations_array
  end

  #ordered array of stations with correct naming
  stations_with_squares = add_squares_places stations

  #Arrays for trip planning. Should have used Hashes though!
   n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
   l = ["8th", "6th", "Union Square", "3rd", "1st"]
   six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
   output = ""

   #this isn't really necessary but this gives me more semantic names to use later
   origin_line = lines[0]
   destination_line = lines[1]
   origin_stop = stations_with_squares[0]
   destination_stop = stations_with_squares[1]

   origin_line_name = origin_line
   destination_line_name = destination_line

   #Map the input line string to the correct array. Hashes instead of arrays would have prevented this.
   origin_line = n if origin_line == "n"
   origin_line = l if origin_line == "six"
   origin_line = six if origin_line == "6"
   destination_line = n if destination_line == "n"
   destination_line = l if destination_line == "l"
   destination_line = six if destination_line == "6"

  #figure out whether single or multi line trip
  trip_type = "single" if origin_line == destination_line
  trip_type = "multi" if origin_line != destination_line

  #if single line, create a string with all the stops.
  if trip_type == "single"
    #Reverses the array if we need to go backwards
    origin_line.reverse!() if origin_line.index(origin_stop) > origin_line.index(destination_stop)

    trip_1 = (origin_line[origin_line.index(origin_stop)..origin_line.index(destination_stop)-1]).join(", ")

    output = "To get from #{origin_stop} on the #{origin_line_name} to #{destination_stop} on the #{destination_line_name}, your trip takes you from #{trip_1}, stopping at #{destination_stop}."

  end

  #if trip is multi line
  if trip_type == "multi"
    origin_line.reverse!() if origin_line.index(origin_stop) > origin_line.index("Union Square")
    destination_line.reverse!() if destination_line.index("Union Square") > destination_line.index(destination_stop)

    trip_1 = (origin_line[origin_line.index(origin_stop)..origin_line.index("Union Square")]).join(", ")
    trip_2 = (destination_line[destination_line.index("Union Square")..destination_line.index(destination_stop)-1]).join(", ")

    output = "To get from #{origin_stop} on the #{origin_line_name} to #{destination_stop} on the #{destination_line_name}, your trip takes you from #{trip_1}. Change at Union Square to the #{destination_line_name}. Your trip constinues on via #{trip_2}, stopping at #{destination_stop}."
  end

  #if multi line, create a string from origin to union and then from union to destination_line
  return output
end

input = nil
until input == "q" || input == "n"

  puts "<>" * 20
  puts "WELCOME TO THE"
  puts "M"
  puts "T"
  puts "A"
  puts "<>" * 20
  puts "Here's a nice map!"
  puts "N LINE: Times Square - 34th - 28th - 23rd - Union Square - 8th"
  puts "L LINE: 8th - 6th - Union Square - 3rd - 1st"
  puts "6 LINE: Grand Central - 33rd - 28th - 23rd - Union Square - Astor Place"
  puts "<>" * 20
  puts "Let's plan a trip!"
  puts "Tell me where you would like to go!"
  puts "For example: Times Square on the n to 8th on the n"
  print "So, whats the trip? "
  input = gets.chomp
  puts "Here are your Directions..."
  puts plan_trip input if input != "q"
  puts "<>" * 20
  print "Plan another trip (y/n)? "
  input = gets.chomp
end
