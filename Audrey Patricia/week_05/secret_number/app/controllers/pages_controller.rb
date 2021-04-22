class PagesController < ApplicationController

  def hello
    @number = rand(0..10)
  end

end
