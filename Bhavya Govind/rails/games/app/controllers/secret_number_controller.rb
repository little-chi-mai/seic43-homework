class SecretNumberController < ApplicationController
  def start_game
  end
  def secret_number_result
    guessed_number = params[:guessed_number].to_i
    computer_number = rand(1.100)
    if guessed_number < computer_number
      @result = "Wrong! guess higher"
    elsif guessed_number > computer_number
      @result = "Wrong! guess lower"
    else
      @result = "Congragulations you win"
    end
  end
end
