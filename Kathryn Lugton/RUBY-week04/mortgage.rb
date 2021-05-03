# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
def mort_form
  puts "Mortgage Calculator".center(80)
  puts "Standard Fixed-Rate Loans".center(80)
  puts "=-" * 40 #dividing line
  puts "press Ctrl+C to QUIT"
end

until mort_form == 'q'
  print "Please enter the loan amount (home purchase price + charges - down payment): "
    p = gets.to_i
  print "Please enter the annual interest rate on the loan: "
    r = gets.to_f
  print "Please enter the loan term (num of years): "
    t = gets.to_i
  print "Please enter the number of payments per year: "
    n = gets.to_i
  puts "Loan Amount = #{ p }, interest rate = #{ r }, term = #{ t } and num of payments p/a = #{ n }."
  step1 = r / n
  step2 = (1 + (step1**12))
  step3 = step2 * 30
  step4 = p * step1 * step3
  step5= (step3 -1)
  step6 = step4 / step5
  step7 = step6.to_i
  puts "Your montly repayments would be #{ step7 }." #Maths is wrong. I get 5172 when I enter the below
end
mort_form

# (p * (r/n) * (1 + r/n)**n(t))) / ((1 + r/n)**n(t) - 1)
# {100,000 x (.06 / 12) x [1 + (.06 / 12)^12(30)]} / {[1 + (.06 / 12)^12(30)] - 1}
# (100,000 x .005 x 6.022575) / 5.022575
# 3011.288 / 5.022575 = 599.55
