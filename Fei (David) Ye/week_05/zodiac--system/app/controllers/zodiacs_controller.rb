class ZodiacsController < ApplicationController
    def index
        @zodiacs = Zodiac.all
    end
end