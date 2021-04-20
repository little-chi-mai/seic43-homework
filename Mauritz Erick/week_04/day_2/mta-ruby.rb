MTA = { #3 lines N L 6 
     "N" => ["NTimes Square", "N34th", "N28th", "N23rd", "NUnion Square", "N8th"],
     "L" => ["L8th", "L6th", "Union Square", "L3rd","L1st"],
     "6" => ["Grand Central", "6-33rd", "6-28th", "6-23rd", "Union Square", "Astor Place"]
}

def user_choice_line #Ask for input for starting line
puts "what line would you like to get on?: L, N or 6: "
gets.chomp
end

on_line = user_choice_line

def user_choice_onstop #Ask for input for starting stop
puts "what station would you like to get on?: "
gets.chomp
end
on_stop = user_choice_onstop

def user_choice_offline #Ask for input for destination line
puts "what line would you like to get off at?: L, N or 6: "
gets.chomp
end

off_line = user_choice_offline

def user_choice_offstop #Ask for input for destination stop
puts "what station would you like to get off at?: "
gets.chomp
end

off_stop = user_choice_offstop 



index_onstop = MTA[on_line].index(on_stop)

onStop_US = MTA[on_line].index("Union Square")

if onStop_US > index_onstop
stops_onLine = MTA[on_line][index_onstop+1..onStop_US]
elsif index_onstop > onStop_US
  stops_onLine = MTA[on_line][onStop_US..index_onstop-1].reverse
end

offStop_US = MTA[off_line].index("Union Square")

index_offStop = MTA[off_line].index(off_stop)

if on_line == off_line #If same line, do this
   if index_offStop > index_onstop
     on_stops_if_same_line = MTA[on_line][index_onstop+1..index_offStop]
  else
    MTAonlinereverse = MTA[on_line].reverse
    on_stops_if_same_line = MTAonlinereverse[index_offStop+1..index_onstop]
  end
end

if index_offStop > offStop_US
off_stops = MTA[off_line][offStop_US+1..index_offStop]
elsif offStop_US > index_offStop
  off_stops = MTA[off_line][index_offStop..offStop_US-1].reverse
end

total_stops = stops_onLine.length + off_stops.length

if on_line == off_line
  puts "You must travel through the following stops on the #{on_line} line : #{on_stops_if_same_line}. #{on_stops_if_same_line.length} stops in total"
else
puts "You must travel through the following stops on the #{on_line} line: #{stops_onLine}. Change at Union Square
Your journey continues through the following stops: #{off_stops}.
#{total_stops} stops in total."
end
