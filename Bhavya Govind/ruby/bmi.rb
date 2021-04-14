puts "BMI Calculator"
puts "-=" * 40
puts "enter height in centimeters: "
    height = gets.to_f
    height = height / 100
puts "enter weight in kgs: "
    weight = gets.to_f  
print "your bmi is #{weight / (height * height)}"
