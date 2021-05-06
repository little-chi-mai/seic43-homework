class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new#serves up the create page with form
  end

  def create#posts info from form
    ocean = Ocean.create :name => params[:name], :image => params[:image], :area => params[:area], :volume => params[:volume], :depth => params[:depth];redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.image = params[:image]
    ocean.area = params[:area]
    ocean.volume = params[:volume]
    ocean.depth = params[:depth]
    ocean.save
    redirect_to ocean_path(ocean.id)#get request to show page
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end
end
