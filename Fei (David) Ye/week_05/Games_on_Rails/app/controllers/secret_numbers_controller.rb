class SecretNumbersController < ApplicationController
  def game; end

  def result
    @num = params[:guess_number].to_i
    @target_number = (1..10).to_a.sample
    if @target_number == @num
      render :win
    else
      render :lose
    end
  end
end
