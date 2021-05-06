class OceanPoolsController < ApplicationController
  def index
    @pools = OceanPool.all
  end

  def show
    @pool = OceanPool.find params[:id]
  end

  def edit
    @pool = OceanPool.find params[:id]
  end

  def update

    pool = OceanPool.find params[:id]

    pool.name = params[:name]
    pool.description = params[:description]
    pool.image = params[:image]
    pool.map = params[:map]
    pool.state = params[:state]
    pool.depth = params[:depth]
    pool.volume = params[:volume]
    pool.save

    redirect_to ocean_pool_path

  end

  def new
  end

  def create

    pool = OceanPool.create :name => params[:name], :description => params[:description], :image => params[:image], :map => params[:map], :state => params[:state], :depth => params[:depth], :volume => params[:volume]

    redirect_to ocean_pools_path(pool.id)

  end

  def destroy
    pool = OceanPool.find params[:id]
    pool.destroy
    redirect_to ocean_pools_path
  end


end
