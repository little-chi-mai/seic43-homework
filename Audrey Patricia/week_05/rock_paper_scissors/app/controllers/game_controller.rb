class GameController < ApplicationController
  $win_count = 0
  $loses = 0
  def count
    $win_count += 1
  end

  def lose_count
    $loses += 1
  end

  def hello
    $win_count = 0
    $loses = 0
  end

  def start

  end

  def check

    @choice = params[:choice]
    @compChoice = ["rock", "paper", "scissors"].sample
    @win = false

    if @choice == @compChoice
      @message = "It's a tie!"
    elsif @choice == "rock" && @compChoice =="scissors" || @choice == "paper" && @compChoice == "rock" || @choice = "scissors" && @compChoice == "rock"
      @message = "You win!"
      @win = true
      $win_count += 1
    else
      @message = "You lost..."
      lose_count
    end
    @wins = $win_count
    @loses = $loses
  end

end
