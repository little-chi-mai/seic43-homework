# ## DrEvil
#
# Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
# ```
#   DrEvil(10): 10 dollars
#   DrEvil(1000000): 1000000 dollars (pinky)
# ```

#ANSWER ---

# def dr_evil(amount)
#   unless amount == 1000000
#     puts "#{amount} dollars"
#   else
#     puts "#{amount} dollars (pinky)"
#   end
# end
#
# print "Give me an amount: "
# amount = gets.to_i
#
# dr_evil(amount)

## MixUp

# Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
# ```
#   mixUp('mix', 'pod'): 'pox mid'
#   mixUp('dog', 'dinner'): 'dig donner'
# Look up the JavaScript string reference to find methods which may be useful!
# ```

#ANSWER ---

# def mix_up(str1, str2)
#   str1_initial = str1[0,2]
#   str1_end = str1[2, str1.length - 1]
#   str2_initial = str2[0,2]
#   str2_end = str2[2, str2.length - 1]
#   puts "#{str2_initial + str1_end} #{str1_initial + str2_end}"
# end
#
# mix_up('mix', 'pod')
# mix_up('dog', 'dinner')
#
# print "Enter first string: "
# str1 = gets.chomp
# print "Enter second string: "
# str2 = gets.chomp
#
# mix_up(str1, str2)

## FixStart

# Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
# ```
# fixStart('babble'): 'ba**le'
# ```

#ANSWER

# def fix_start(string)
#   char_array = string.split("")
#   first_char = string[0]
#   new_array = Array.new
#
#   char_array.each do |i|
#     if i == "b"
#       new_array.push("*")
#     else
#       new_array.push(i)
#     end
#   end
#
#   new_array[0] = first_char
#   puts new_array
# end
#
# fix_start("babble")

## Verbing

# Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
# ```
#   verbing('swim'): 'swimming'
#   verbing('swimming'): 'swimmingly'
#   verbing('go'): 'go'
# ```

#ANSWER --- 

# def verbing(string)
#
#   end_chars = string[string.length - 3, string.length - 1]
#
#   if end_chars != "ing" && string.length > 3
#     puts string + "ing"
#   elsif end_chars == "ing"
#     puts string + "ly"
#   else
#     puts string
#   end
#
# end
#
# verbing('swim')
# verbing('swimming')
# verbing('go')

## Not Bad

# Create a function called notBad that takes a single argument, a string.
# - It should find the first appearance of the substring 'not' and 'bad'.
# - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
# - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
#
# For example:
# ```
#   notBad('This dinner is not that bad!'): 'This dinner is good!'
#   notBad('This movie is not so bad!'): 'This movie is good!'
#   notBad('This dinner is bad!'): 'This dinner is bad!'
# ```

# def not_bad(string)
#   index_of_not = string.index("not")
#   index_of_bad = string.index("bad")
#
#   if index_of_not < index_of_bad
#     return string[0, index_of_not] + "good"
#   else
#     return string
#   end
# end
#
# not_bad('This dinner is not that bad!')
# not_bad('This movie is not so bad!')
# not_bad('This dinner is bad!')

#ANSWER ---
def not_bad(string)
  index_of_not = string.index("not")
  index_of_bad = string.index("bad")

  if index_of_not != nil && index_of_bad != nil && index_of_not < index_of_bad
    puts string[0, index_of_not] + "good!"
  else
    puts string
  end
end

not_bad('This dinner is not that bad!')
not_bad('This movie is not so bad!')
not_bad('This dinner is bad!')
