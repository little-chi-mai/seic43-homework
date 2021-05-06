class MagicballController < ApplicationController
  def start_game
  end
  def result
    answers = [
      " It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes – definitely.",
      "You may rely on it.",
      " As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      " Yes.",
      " Signs point to yes.",
      "Reply hazy, try again.",
      " Ask again later.",
      " Better not tell you now.",
      " Cannot predict now.",
      "Concentrate and ask again",
      "Don't count on it.",
      " My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      " Very doubtful."
    ]
    # random_number = rand(0..19).sample()
    @result = answers.sample()
    @question = params[:question]
  end

end
