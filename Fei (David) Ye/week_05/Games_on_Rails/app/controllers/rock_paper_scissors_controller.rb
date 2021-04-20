class RockPaperScissorsController < ApplicationController
    def game
    end

    def play
        @computer_throw = ["rock","paper","scissors"].sample
        player_throw = params[:throw]
        if @computer_throw==player_throw
            @result = "it's a draw"
        elsif @computer_throw=="rock" && player_throw=="paper"
            @result = "you win"
        elsif @computer_throw=="rock" && player_throw=="scissors"
            @result = "you lose"
        elsif @computer_throw=="paper" && player_throw=="rock"
            @result = "you lose"
        elsif @computer_throw=="paper" && player_throw=="scissors"
            @result = "you win"
        elsif @computer_throw=="scissors" && player_throw=="paper"
            @result = "you lose"
        elsif @computer_throw=="scissors" && player_throw=="rock"
            @result = "you win"
        end
    end
end