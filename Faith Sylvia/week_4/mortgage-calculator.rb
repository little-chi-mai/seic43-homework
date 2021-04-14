

print "Confirm your annual interest rate: "
annual_rate = (gets.gsub('%','').to_f)/100

print "Confirm the annual loan term: "
term = gets.to_f

print "Confirm the loan principal: "
principal = gets.gsub("$",'').gsub(",","").to_f


monthly_rate = annual_rate / 12

term_months = term * 12

total = (principal * ( monthly_rate * (1 + monthly_rate) ** term_months )) / ( (1 + monthly_rate) ** term_months-1)

puts "Your monthly payment is $#{total}"
