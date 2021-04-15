require 'pry'

def planTrip (startLine, startStation, swapLine, stopStation)

  lines = {
    'N'=> ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L'=> ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6'=> ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
binding.pry
  if startLine = swapLine
    stops = []
    stations = lines.keys(startLine)
    a = (stations.index(startStation))
    b = (stations.index(stopStation))
    if a < b
      loop do
      a+= 1
      stops.push(stations[a])
    end
    if a > b
      loop do
      a-= 1
      stops.push(stations[a])
    end
      stopsSum = stops.length - 1 # -1 excludes starting station in total

    print "Not including your start point, there are #{ stopsSum } total stops. \n Start travel from #{ startLine } line, and continue on #{ startLine } line through: \n #{ stops.join }"
  end

else
      #first array of stations from starting train line
    stops = []
    stations = lines[startLine]
    a = (stations.index(startStation))
    b = (stations.index('Union Square'))
    if a < b
      loop do
      a+= 1 #iteration + 1 to include last station
      stops.push(stations[a])
    end
    if a > b
      loop do
      a-= 1 #reverse of iteration above - 1 to include laststation
      stops.push(stations[a])
    end
  #second array of stations from 'swap to' train line
    extraStops = []
    extraStations = lines[swapLine];
    c = (extraStations.index('Union Square'))
    d = (extraStations.index(stopStation))
    if c < d
      loop do
      c += 1 #iterates from the station AFTER Union Square so not to repeat
      extraStops.push(extraStations[c])
    end
    if c > d
      loop do
      c -= 1 #iterates from the station BEFORE Union Square so not to repeat
      extraStops.push(extraStations[c])
      sum = stops.length + extraStops.length - 1 #-1 excludes starting station in total
    end
    if (startStation == 'Union Square')
        print "Not including your start point, there are #{ sum } total stops. \n You are already at #{ startStation }, so swap to #{ swapLine } line and travel from #{stops.pop()} through \n #{ extraStops.join } \n"
      end
      else
        print "Not including your start point, there are #{ sum } total stops. \n Start travel from #{ startLine } line, and travel through #{ stops.join() } \n Then swap to #{ swapLine } line and continue travel from #{ stops.pop() } through \n #{ extraStops.join } \n"
      end
    end
  end
end

print planTrip('N', '34th', 'N', '8th' ) #Single line random stations, forward
print planTrip('N', 'Union Square', 'N', 'Times Square' ) #Single line random stations, reversed
print planTrip('L', '8th', '6', 'Astor Place' ) #Changing lines, forward
print planTrip('6', '23rd', 'L', '6th' ) #Changing lines, reversed
print planTrip('6', 'Union Square', 'N', 'Times Square' ) #Case if starting from Union Square
end
end
end
