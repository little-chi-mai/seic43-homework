class RockplayController < ApplicationController
  def button
  end

  def result 
@choice2=["Rock","Paper","Scissors"] .sample()
if params[:throw] == @choice2
    @result = "Use win"    
else
    @result = "Computer win"
end

  end
end