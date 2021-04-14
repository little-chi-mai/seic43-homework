require 'pry'

def self.logo
  puts"

███╗   ███╗████████╗ █████╗
████╗ ████║╚══██╔══╝██╔══██╗
██╔████╔██║   ██║   ███████║
██║╚██╔╝██║   ██║   ██╔══██║
██║ ╚═╝ ██║   ██║   ██║  ██║
╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝


                  &&&&&&&&&
                &&&
                &&
                &  _____ ___________
                II__|[] | |   I I   |
                |        |_|_  I I  _|
                < OO----OOO   OO---OO
*********************************************************"


end

def set_trip
  self.logo
  puts " "
  puts "Welcome to MTA trip planner"
  puts "type [s] to start"
  puts "type [q] to quit"
end

set_trip
menu_choice = gets.chomp.downcase


$routes = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
# sl = starting line, ss = starting stop, el = endling line, es = ending stop
def plan_trip(sl, ss, el, es)
#This is the case for same line travel
  if sl == el
    index_ss = $routes[sl].index(ss)
    index_es = $routes[el].index(es)
    total_stops = (index_es - index_ss).abs
    if index_ss < index_es
      stops = $routes[sl][index_ss..index_es]
    else
      backwards = $routes[sl].reverse()
      index_ss = backwards.index(ss)
      index_es = backwards.index(es)
      stops = backwards[index_ss..index_es]
    end

    stops.shift

    puts "You must travel through the following stops: #{stops} "
    puts "#{total_stops} stops in total"
#This is the case for different line travel
  else
    #First part of the journey
    index_ss = $routes[sl].index(ss)
    index_change1 = $routes[sl].index("Union Square") #union square index from starting line
    total_stops = (index_change1 - index_ss).abs

    if index_ss < index_change1
      stops = $routes[sl][index_ss..index_change1]
    else
      backwards = $routes[sl].reverse()
      index_ss = backwards.index(ss)
      index_change1 = backwards.index("Union Square")
      stops = backwards[index_ss..index_change1]
    end

    stops.shift
    puts "You must travel through the following stops on the #{sl} line: #{stops}"


    puts ">> Change at Union Square"

    index_change2 = $routes[el].index("Union Square") #union square index from ending line
    index_es = $routes[el].index(es)
    total_stops += (index_es - index_change2).abs

    if index_change2 < index_es
      stops = $routes[el][index_change2..index_es]
    else
      backwards = $routes[el].reverse()
      index_es = backwards.index(es)
      index_change2 = backwards.index("Union Square")
      stops = backwards[index_change2..index_es]
    end

    stops.shift

    puts "your journey continues through the following stops on the #{el} line: #{stops}"
    puts ">> #{total_stops} stops in total"
  end

end

until menu_choice == 'q'
  puts `clear`
  case menu_choice

  when 's'
    print "Which line are you on now: "
    sl = gets.chomp.upcase
    print "Which stop are you at on this line: "
    ss = gets.chomp
    print "Which line do you want to go to: "
    el = gets.chomp.upcase
    print "Which stop do you want to get to: "
    es = gets.chomp

    plan_trip(sl, ss, el, es)

  else
    puts "Invalid selection"

  end

  set_trip
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this trip planner, enjoy your trip"
# plan_trip('N', 'Times Square', '6', 'Grand Central')
