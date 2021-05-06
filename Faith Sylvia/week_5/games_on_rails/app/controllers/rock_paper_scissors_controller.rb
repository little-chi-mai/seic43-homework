class RockPaperScissorsController < ApplicationController

  def input
  end

  def result

    @userChoice = params[:choice]
    @computerChoice = ["Rock", "Paper", "Scissors"].sample

    if @userChoice == @computerChoice
      @result = "It's a Tie"
    else
      if @userChoice == "Rock"
        if @computerChoice == "Paper"
          @result = "Clairvoyant wins"
        elsif @computerChoice = "Scissors"
          @result = "You win!"
        end
      elsif @userChoice == "Paper"
        if @computerChoice == "Scissors"
          @result = "Clairvoyant wins"
        elsif @computerChoice = "Rock"
          @result = "You win!"
        end
      elsif @userChoice == "Scissors"
        if @computerChoice == "Rock"
          @result = "Clairvoyant wins"
        elsif @computerChoice = "Paper"
          @result = "You win!"
        end
      end
    end

    # raise "peace and love"

  end

end
