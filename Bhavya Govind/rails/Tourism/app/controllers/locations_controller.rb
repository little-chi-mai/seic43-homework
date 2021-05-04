class LocationsController < ApplicationController

 def index
   @locations = Location.all
 end

 def show
   @location = Location.find params[:id]
 end

 def new
   @location = Location.new
   @city = City.all
 end

 def create
   location = Location.create work_params
   redirect_to location
 end

 def edit
   @location = Location.find params[:id]
 end

 def update
   location = Location.find params[:id]
   work.update work_params
   redirect_to location
 end

 def destroy
   location = Location.find params[:id]
   location.destroy
   redirect_to locations_path
 end

 private
 def location_params
   params.require(:work).permit(:name, :visit_time, :image, :info, :city_id)
 end


end
