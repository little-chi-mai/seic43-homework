

class RpsController < ApplicationController

  def form

  end

  def result
  #defining which choice computer makes
    def computer_choice
      cc = (1 + rand(3))

      case cc
      when 1
        @cchoice = "rock"
      when 2
        @cchoice = "paper"
      when 3
        @cchoice = "scissors"
      end
    end

    computer_choice
    @choice = params[:choice]
  #comparing computer choice against user choice
    if @choice == @cchoice
      @response = "I chose #{@cchoice} too. It's a tie. Let's try again."

    else
      if @choice == "rock" && @cchoice == "paper"
        @response = "I chose paper. Paper wraps rock. I win."
      elsif @choice == "rock" && @cchoice == "scissors"
        @response = "I chose scissors. Rock destroys scissors. You win."
      elsif @choice == "paper" && @cchoice == "rock"
        @response = "I chose rock. Paper wraps rock. You win."
      elsif @choice == "paper" && @cchoice == "scissors"
        @response = "I chose scissors. Scissors cut paper. I win."
      elsif @choice == "scissors" && @cchoice == "rock"
        @response = "I chose rock. Rock destroys scissors. I win."
      elsif @choice == "scissors" && @cchoice == "paper"
        @response = "I chose paper. Scissors cut paper. You win."
      else
        @response = "I didn't understand you. Please try again."
      end #end nested if statement
    end #end if statement
  end #end game def
end
