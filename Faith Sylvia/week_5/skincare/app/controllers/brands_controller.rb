class BrandsController < ApplicationController
  def index
    @brand = Brand.all
  end

  def show
    @brand  = Brand.find params[:id]
  end

  def new
    @brand = Brand.new
  end

  def create
    brand = Brand.create brand_params
    redirect_to brand
  end

  def edit

    @brand = Brand.find params[:id]

  end

  def update

    brand = Brand.find params[:id]
    brand.update brand_params
    redirect_to brand

  end

  def destroy
    brand =  Brand.find params[:id]
    brand.destroy
    redirect_to brands_path
  end

  private
  def brand_params
    params.require(:brand).permit(:name, :motto, :logo, :description, :established)
  end

end
