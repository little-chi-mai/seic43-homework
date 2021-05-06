require 'pry'
# # MTA Lab
def tripPlanner(from_line, from_stop, to_line, to_stop)
    lines = {
    "N" =>{ 1 => "Times Square", 2 => "34th", 3 => "28th", 4 => "23rd", 5 => "Union Square", 6 => "8th" },
    "L" => { 1 => "8th", 2 => "6th", 3 => "Union Square", 4 => "3rd", 5 => "1st" },
    "6" => { 1 => "Grand Central", 2 => "33rd", 3 => "28th", 4 => "23rd", 5 => "Union Square", 6 => "Astor Place" }
    }

#to check the from_stop value, place on line and change point
  if from_line == "N"
    from_hash = lines["N"].each { |i| } #loops through
    from_key = from_hash.index(from_stop) # checks index against value  = 4 in original N line hash
    change_N = from_hash.index("Union Square") #shows stop change needs to occur
  elsif from_line == "L"
    from_hash = lines["L"].each { |i| } #loops through
    from_key = from_hash.index(from_stop) # checks index against value  = 4 in original N line hash
    change_L = from_hash.index("Union Square") #shows stop change needs to occur
  elsif from_line == "6"
    from_hash = lines["6"].each { |i| } #loops through
    from_key = from_hash.index(from_stop) # checks index against value  = 4 in original N line hash
    change_6 = from_hash.index("Union Square") #shows stop change needs to occur
  end

#check the to_stop value and place on line
  if to_line == "N"
    to_hash = lines["N"].each { |i| } #loops through
    to_key = to_hash.index(to_stop) # checks index against value  = 4 in original N line hash
  elsif from_line == "L"
    to_hash = lines["L"].each { |i| } #loops through
    to_key = to_hash.index(to_stop) # checks index against value  = 4 in original N line hash
  elsif from_line == "6"
    to_hash = lines["6"].each { |i| } #loops through
    to_key = to_hash.index(to_stop) # checks index against value  = 4 in original N line hash
  end

#################TO DO###################
#check line for change, #try list stops by calling hash values using to_key etc
if from_line = to_line
  if from_key < to_key
  result = to_key - from_key
  puts "You are staying on the N line and travelling ##{ result } stops."
end
end

# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
###########################################

binding.pry

end
tripPlanner('N', '23rd', "N", "8th")
# tripPlanner('N', '34rd', "L", "Union Square")
# tripPlanner('6', '"Astor Place"', "L", "6th")
