class ZodiacsController < ApplicationController
    def index
        @zodiacs = Zodiac.all
    end

    def show
        @zodiac = Zodiac.find params[:id]
      end
    
      def new; end
    
      def create
        zodiac = Zodiac.create latin_name: params[:latin_name], english_name: params[:english_name], symbol: params[:symbol], ecliptic_longitude: params[:ecliptic_longitude], image: params[:image]
        redirect_to zodiac_path(zodiac.id) # show page
      end
    
      def edit
        @zodiac = Zodiac.find params[:id]
      end
    
      def update
        # get the planet
        zodiac = Zodiac.find params[:id]
        zodiac.latin_name = params[:latin_name]
        zodiac.english_name = params[:english_name]
        zodiac.symbol = params[:symbol]
        zodiac.ecliptic_longitude = params[:ecliptic_longitude]
        zodiac.image = params[:image]
        # update the zodiac
        zodiac.save
    
        # redirect somewhere
        redirect_to zodiac_path(zodiac.id)
      end
    
      def destroy
        zodiac = Zodiac.find params[:id]
        zodiac.destroy
        redirect_to zodiacs_path
      end
end