class SecretController < ApplicationController
    def secretnumberanswer
        @number = rand(0..10)
        if @number == 0
          @answer = 'You win'
        else @answer ="You lose, the lucky number is #{@number}"
           
        end
      end
end