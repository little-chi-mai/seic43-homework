class PagesController < ApplicationController
  def home
  end
  def result
    @question = params[:question]
    random_number = rand(0..8);
    if random_number == 1
      @result = "Maybe yes, maybe no"
    elsif random_number == 2
      @result = "It's possible"
    elsif random_number == 3
      @result = "You got it!"
    elsif random_number == 4
      @result = "If you have to ask - no"
    elsif random_number == 5
      @result = "Yes! You are brilliant"
    elsif random_number == 6
      @result = "Ask another question"
    elsif random_number == 7
      @result = "Sure"
    elsif random_number == 8
      @result = "For your sake, I hope so"
    end
  end
end ##end class
