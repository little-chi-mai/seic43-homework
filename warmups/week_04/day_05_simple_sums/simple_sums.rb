# # Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:
# ```ruby
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + //etc
# ```
# ## For example:
# ```ruby
# sum_s1(4) = 0
# sum_s2(4) = 10
# ```

def sum_s1 num
    p num % 2
end

sum_s1(6)

def sum_s2 num
    p (1..num).sum
end

sum_s2(5)