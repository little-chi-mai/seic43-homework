class SecretnumberController < ApplicationController
  def button   
  end

  def result
        @guessNo = rand(1..10)
 if params[:num] == @guessNo
        @result = "YOU WIN THE GAME"    
    else
        @result = "YOU LOSE THE GAME"
    end   
  end
end