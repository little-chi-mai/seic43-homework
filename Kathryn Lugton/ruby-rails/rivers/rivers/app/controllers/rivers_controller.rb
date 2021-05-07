class RiversController < ApplicationController

  def index
    @rivers = River.all.to_a
  end

  def show
    @river = River.find params[:id]
  end

  def new
  end

  def create
    river = River.create :name => params[:name], :length => params[:length], :country => params[:country], :image => params[:image]
    redirect_to river_path(river.id)
  end

  def edit
    @river = River.find params[:id]
  end

  def update
    river = River.find params[:id]
    river.name = params[:name]
    river.length = params[:length]
    river.country = params[:country]
    river.image = params[:image]
    river.save
    redirect_to river_path(river.id)
  end

  def destroy
    river = River.find params[:id]
    river.destroy
    redirect_to rivers_path
  end

end
