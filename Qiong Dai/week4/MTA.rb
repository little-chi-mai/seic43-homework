require "pry"

# Activity
# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



def planTrip(l1,s1,l2,s2)
    
# list line detail  
# Function (getOn + getOff)  ===> Array (stopsON + stopsOff)
    
allline ={
:N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
:L => ["8th", "6th", "Union Square", "3rd", "1st"],
:"6" => [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place",
]
}


#getOn function
# EXCLUDE stop
# INCLUDE UNI SQU
def getOn (line,stop) 
    us = "Union Square"
# before US
# array[stop+1 .. stop(US)]
if line.index(stop) < line.index(us)
    return stopsOn = line[line.index(stop)+1 .. line.index(us)]  
# after US
# array[stop(US) .. stop-1]  ===>  reverse 
elsif line.index(stop) > line.index(us)
    return stopsOn = line[line.index(us) .. line.index(stop)-1].reverse
else
    return stopsOn = []
end
end





#getOff function
# InCLUDE stop
# EXCLUDE UNI SQU
def getOff (line,stop)
    us = "Union Square"
# before US
# array[stop .. stop(US)-1] ===> reverse 
   if line.index(stop) < line.index(us)
    return stopsOff = line[line.index(stop) .. line.index(us)-1].reverse
    binding.pry
# after US
# array.[stop(US)+1 .. stop]
# excluds UNI SQU    
   elsif line.index(stop) > line.index(us)
    return  stopsOff = line[line.index(us)+1 .. line.index(stop)]
   end   
end

# getOn+getOff
arr = getOn(allline[l1.to_sym], s1)+getOff(allline[l2.to_sym],s2)

strGetOn = getOn(allline[l1.to_sym], s1).join(",")
strGetOff = getOff(allline[l2.to_sym], s2).join(",")

puts "You must travel through the following stops on the #{l1} line: #{strGetOn}."
puts "Change at Union Square."
puts "Your journey continues through the following stops: #{strGetOff}."
puts "#{arr.length} stops in total."



end


planTrip("N", "Times Square", "6", "33rd")
puts "-----"*20
planTrip("N", "8th", "6", "Astor Place")

