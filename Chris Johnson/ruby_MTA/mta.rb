# Key     ss = Starting Station    sl = Starting Line   fs = Final Station    fl = Final Line
def trip_planner(ss, sl, fs, fl)
  $trains = {'n' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th', '9th'], 'l' => ['8th', '6th', 'Union Square', '3rd', '1st'],'6' => ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'],}

  if (sl == fl); reverse_if(sl, ss, fs)
    puts "Travel on the #{sl}-line through #{get_stops(sl, ss, fs).join(', ')} and then #{fs}. #{get_stops(sl, ss, fs).length} stops in total."

  else; reverse_if(sl, ss, "Union Square");reverse_if(fl, "Union Square", fs)
    num_stops = (get_stops(sl, ss, "Union Square").length) + (get_stops(fl, "Union Square", fs).length)
      puts "Travel on the #{sl}-line through #{get_stops(sl, ss, "Union Square").join(', ')} and Union Square then travel on the #{fl}-line through #{get_stops(fl, "Union Square", fs).join(', ')} and arive at #{fs}. #{num_stops} in total."
  end
end
# Functions
def get_stops (line, ss, fs)
  ($trains[line][($trains[line].index(ss))..($trains[line].index(fs)-1)])end

def reverse_if(line, ss, fs)
  if ($trains[line].index(ss)) > ($trains[line].index(fs)) $trains[line].reverse!()end
end

trip_planner 'Times Square', 'n', 'Grand Central', '6'
