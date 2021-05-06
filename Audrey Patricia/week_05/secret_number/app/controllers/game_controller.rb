class GameController < ApplicationController


  def start
    @number = params[:number]
  end

  def check
    @number = params[:number].to_i
    @guess = params[:guess].to_i
    @correct = false

    if @guess != @number
      @message = "You guessed wrongly"

      if @guess < @number
        @hint = "Guess a little higher"
      else
        @hint = "Guess a little lower"
      end

    else
      @message = "You guessed correctly!"
      @correct = true
    end
  end



end
