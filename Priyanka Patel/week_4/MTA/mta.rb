require 'pry'
$subway_lines = {
  :N => ['Times Square', '34th', 'n28th', 'n23rd', 'Union Square', 'n8th'],
  :L => ['l8th', '6th', 'Union Square', '3rd', '1st'],
  :six => ['Grand Central', '33rd', 'six28th', 'six23rd', 'Union Square', 'Astor Place'],
  }

def trip_plan (first_line, starting_stop, second_line, last_stop)
  first_line_name = first_line.to_sym
  second_line_name = second_line.to_sym

  first_line = $subway_lines[first_line_name]
  second_line = $subway_lines[second_line_name]
  first_stop = first_line.index(starting_stop)
  first_line_junction = first_line.index('Union Square')
  second_line_junction = second_line.index('Union Square')
  end_stop = second_line.index(last_stop)

  if first_stop >= first_line_junction
    first_trip = first_line[first_line_junction..first_stop]
    $first_line_total_stops = first_trip.length
    first_line_trip = first_trip.reverse!().join(',')
    p  "You must travel through the following stops on the #{first_line_name} line: #{first_line_trip}."
    $first_line_total_stops = first_trip.length

  elsif first_stop < first_line_junction
    first_trip = first_line[first_stop..first_line_junction]
    $first_line_total_stops = first_trip.length
    first_line_trip = first_trip.join(',')
    p  "You must travel through the following stops on the #{first_line_name} line: #{first_line_trip}."
    $first_line_total_stops = first_trip.length
  end

  if end_stop >= second_line_junction
    second_trip = second_line[second_line_junction..end_stop]
    second_trip.shift
    $second_line_total_stops = second_trip.length
    second_line_trip = second_trip.join(',')
    p "changed at Union Square"
    p  "Your journey continue through the following stops on the #{second_line_name} line: #{second_line_trip}."

    $second_line_total_stops = second_trip.length
    total_stops = $second_line_total_stops + $first_line_total_stops
    p "#{total_stops} stops in total"

  elsif end_stop < second_line_junction
    second_trip = second_line[end_stop..second_line_junction]
    second_trip.pop()
    $second_line_total_stops = first_trip.length
    second_line_trip = second_trip.reverse!().join(',')
    $second_line_total_stops = second_trip.length
    total_stops = $second_line_total_stops + $first_line_total_stops
    p "changed at Union Square"
    p  "Your journey continue through the following stops on the #{second_line_name} line: #{second_line_trip}."
    p "#{total_stops} stops in total"
  end
end

trip_plan('six', 'Union Square', 'N', 'Times Square');
trip_plan('L', '1st', 'six', '33rd')
trip_plan('N', 'Times Square', 'L', '1st')
trip_plan('N', '34th', 'L', 'l8th')
trip_plan('L', '6th', 'six', 'Astor Place')
trip_plan('six', 'Union Square', 'N', 'Times Square');
trip_plan("L", "1st", "six", "Union Square");
