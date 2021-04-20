Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic_eight_balls' => 'magic_eight_balls#game'
  get '/magic_eight_balls/result' => 'magic_eight_balls#result'

  get '/secret_numbers' => 'secret_numbers#game'
  get '/secret_numbers/result' => 'secret_numbers#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#game'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#play'
end


# Games on Rails
# Games on Rails is a web application with three games

# * Magic 8 Ball
# * Secret Number
# * Rock Paper Scissors

# __Magic 8 Ball__

# * Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.

# __Secret Number__

# * Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.

# __Rock Paper Scissors__

# * Create a route that goes from ```/games/rock_paper_scissors/:throw``` to ```games#rock_paper_scissors_play```
# * Use params[:throw] as a user's choice
# * Compare the 2! If  users throw matches the apps throw, the user wins.
# * i.e. If a user throws rock ```http://localhost:3000/games/rock_paper_scissors/rock``` and the server picks rock player wins! (Yes,  I know that is not how RPS works)
# Bonus: Set the win or lose condition based on the real rules of [Rock Paper Scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors).