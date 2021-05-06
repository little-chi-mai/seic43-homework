class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token #you only need this for handwritten POST forms
end
