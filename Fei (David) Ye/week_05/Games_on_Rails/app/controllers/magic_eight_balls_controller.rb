class MagicEightBallsController < ApplicationController
  def game; end

  def result
    response = HTTParty.get 'https://en.wikipedia.org/wiki/Magic_8-Ball' # class: HTTParty::Response
    document = Nokogiri::HTML(response) # class: Nokogiri::HTML::Document
    results = document.css('td p').to_a # class: Array
    i = 0
    until i >= results.length
      results[i] = document.css('td p')[i].text.split('●').drop(1).map do |string|
        string.reverse.split('').drop(2).reverse.drop(1).join('')
      end
      i += 1
    end
    @answers = results.flatten
  end
end
