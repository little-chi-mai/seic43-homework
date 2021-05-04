class RockPaperScissorsController < ApplicationController
  def start_game
  end
  def rps_result
    choices = ["rock","paper","scissors"]
    guess = params[:guess]
    computer_choice = choices.sample()
    if guess == computer_choice
      @result = "Its a tie"
    elsif guess == "rock" && computer_choice == "paper"
      @result = "Computer won the game"
    elsif guess == "paper" && computer_choice == "rock"
      @result =  "You won against computer"
    elsif guess == "scissors" && computer_choice == "paper"
      @result = "You won against computer"
    elsif computer_choice == "scissors" && guess == "paper"
      @result = "Computer won the game"
    elsif guess == "rock" && computer_choice == "scissors"
      @result = "you wond against computer"
    else
      @result = "computer won the game"

    end
  end
end
