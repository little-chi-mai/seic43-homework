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
  print "Loan Amount = #{ p }, interest rate = #{ r }, term = #{ t } and num of payments p/a = #{ n }."

  monthly_repayments = (p * (r/n) * (1 + r/n)**n(t))) / ((1 + r/n)**n(t) - 1) #Check David Ye solution when homework is pushed up (uses same math but it worked for him)

  puts "Your montly repayments would be #{ monthly_repayments }."
end
mort_form

#
# {100,000 x (.06 / 12) x [1 + (.06 / 12)^12(30)]} / {[1 + (.06 / 12)^12(30)] - 1}
# (100,000 x .005 x 6.022575) / 5.022575
# 3011.288 / 5.022575 = 599.55
