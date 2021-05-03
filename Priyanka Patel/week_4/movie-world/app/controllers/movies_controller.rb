class MoviesController < ApplicationController
  def home
  end

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find params[:id]
  end

  def new
  end

  def create
    movie = Movie.create
    movie.name = params[:name]
    movie.director = params[:director]
    movie.producer = params[:producer]
    movie.language = params[:language]
    movie.country = params[:country]
    movie.release_date = params[:release_date]
    movie.starring = params[:starring]
    movie.image = params[:image]
    redirect_to movie_path(movie.id) #redirecting to show page
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.director = params[:director]
    movie.producer = params[:producer]
    movie.language = params[:language]
    movie.country = params[:country]
    movie.release_date = params[:release_date]
    movie.starring = params[:starring]
    movie.image = params[:image]
    movie.save
    redirect_to movie_path(movie.id) #get show
  end

  def destroy
    movie = Movie.find params[:id]
    movie.destroy
    redirect_to movies_path
  end
end
