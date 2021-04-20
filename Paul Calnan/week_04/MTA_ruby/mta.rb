require 'pry'
def plan_trip (start_line, start_station, swap_line, stop_station)

  lines = {
    'N'=> ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L'=> ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6'=> ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
if start_line == swap_line

    stops = []
    stations = lines[start_line]
    a = lines[start_line].index(start_station)
    b = lines[start_line].index(stop_station)
    if a < b
      while a < b
        a+= 1
        stops.push(stations[a])
      end
    end
    if a > b
      while a > b
        a-= 1
        stops.push(stations[a])
      end
    end
    stops_sum = stops.length - 1 # -1 excludes starting station in total
    print "Not including your start point, there are #{ stops_sum } total stops. \n Start travel from #{ start_line } line, and continue on #{ start_line } line through: \n #{ stops.join(' ') }\n"
end
if start_line != swap_line
      #first array of stations from starting train line
    stops = []
    stations = lines[start_line]
    a = lines[start_line].index(start_station)
    b = lines[start_line].index('Union Square')
    if a < b
      while a < b
        a+= 1 #iteration + 1 to include last station
        stops.push(stations[a])
      end
    end
    if a > b
      while a > b
        a-= 1 #reverse of iteration above - 1 to include laststation
        stops.push(stations[a])
      end
    end
    #second array of stations from 'swap to' train line
    extra_stops = []
    extra_stations = lines[swap_line]
    c = lines[swap_line].index('Union Square')
    d = lines[swap_line].index(stop_station)
    if c < d
      while c < d
        c+= 1 #iterates from the station AFTER Union Square so not to repeat
        extra_stops.push(extra_stations[c])
      end
    end
    if c > d
      while c > d
        c-= 1 #iterates from the station BEFORE Union Square so not to repeat
        extra_stops.push(extra_stations[c])
      end
    end
    sum = stops.length + extra_stops.length - 1 #-1 excludes starting station in total
      if (start_station == 'Union Square')
        print "Not including your start point, there are #{ sum } total stops. \n You are already at #{ start_station }, so swap to #{ swap_line } line and travel from #{stops.pop } through \n #{ extra_stops.join(' ') }\n"
      else
        print "Not including your start point, there are #{ sum } total stops. \n Start travel from #{ start_line } line, and travel through #{ stops.join(' ') } \n Then swap to #{ swap_line } line and continue travel from #{ stops.pop } through \n #{ extra_stops.join(' ') }\n"
      end
    end
end

print plan_trip('N', '34th', 'N', '8th' )#Single line random stations, forward
print plan_trip('N', 'Union Square', 'N', 'Times Square' )#Single line random stations, reversed
print plan_trip('L', '8th', '6', 'Astor Place' ) #Changing lines, forward
print plan_trip('6', '23rd', 'L', '6th' ) #Changing lines, reversed
print plan_trip('6', 'Union Square', 'N', 'Times Square' ) #Case if starting from Union Square
