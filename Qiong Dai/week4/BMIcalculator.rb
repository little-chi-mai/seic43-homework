def bmi_calculator
  puts "Calculator".center(75) 
  puts "-=" * 40 # El cheapo dividing line

  puts "Please enter your weight in kg"
  weight= gets.to_f

  puts "Please enter your height in m"
  height= gets.to_f

  bmi = weight/(height*height)
  puts "your BMI is #{bmi}"

  if bmi <18.5
  puts "Underweight"
  elsif bmi>=18.5 && bmi <25
    puts "Normal weight"
    elsif bmi>=25 && bmi<30
      puts"Overweight"
    else 
      puts "Obesity"
  end

end

bmi_calculator

    
