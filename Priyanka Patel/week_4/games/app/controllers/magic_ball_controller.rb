class MagicBallController < ApplicationController
  def form
  end

  def result
    choices = ["Yes", "No", "Maybe", "Ask Again later", "As I see it yes", "Cannot predict now", "most likely", "very doubleful"]
    @result = choices .to_a.sample
  end
end
