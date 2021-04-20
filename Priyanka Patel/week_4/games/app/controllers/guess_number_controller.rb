class GuessNumberController < ApplicationController
  def form
  end

  def result
    @secrete_number = rand 0..100
    @player_choose = params[:number].to_i
    if @secrete_number == @player_choose
      @result = "Congratulations! correct guess"
    else
      @result = "Incorrect guess, try again, correct number is #{@secrete_number}"

    end
  end
end
