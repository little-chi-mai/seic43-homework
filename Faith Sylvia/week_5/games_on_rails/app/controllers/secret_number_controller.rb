class SecretNumberController < ApplicationController
  def input

  end


  # Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
  def result

    @userGuess = params[:numbs].to_i

    @computerGuess = (1..10).to_a.sample

    @result = ''

    if @computerGuess == @userGuess
      @result = "You guessed correctly!"

    else
      @result = "The clairvoyant wins!"
    end

  end

end
