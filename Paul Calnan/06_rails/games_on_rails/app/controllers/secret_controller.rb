class SecretController < ApplicationController

  def form

    def random
      @rand = rand(1..3).to_i
    end

    random

    @guess = params[:guess].to_i

      if @guess == 0

      elsif @guess > @rand
        @high = "That's too HIGH, guess again: "#params to form page
        # @guess = params[:guess].to_i

      elsif @guess < @rand
        @low = "That's too LOW. guess again: "#params to form page
        # @guess = params[:guess].to_i

      else @guess == @rand
        @correct = "CORRECT! You guessed the answer #{ @rand }"#params to form page
        @image = "/assets/clown.jpg"
      end
  end
end
