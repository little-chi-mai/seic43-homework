class GuesserController < ApplicationController
  def guess
  end

  def guess_again
    @computer_number = rand(1..10)
    @player_guess = params[:guess]
  end
end
