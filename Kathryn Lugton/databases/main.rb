require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Skeleton < ActiveRecord::Base
end

class Skeletal_region < ActiveRecord::Base
  has_many :subregions
end

class Subregion < ActiveRecord::Base
  has_many :bones
  belongs_to :skeletal_regions
end

class Bone < ActiveRecord::Base
  belongs_to :subregions
end


get '/' do
erb :home
end

###Skeletons CRUD####

#INDEX(READ)
get "/skeletons" do
  @skeletons = Skeleton.all
  erb :skeletons_index
end

#NEW(CREATE)
get '/skeletons/new' do
  erb :skeletons_new
end

#CREATE(UPDATE)
post '/skeletons' do
  skeleton = Skeleton.new
  skeleton.name = params[:name]
  skeleton.position = params[:poition]
  skeleton.image = params[:image]
  skeleton.save
  redirect to("/skeletons/#{ skeleton.id }")
end

#SHOW(READ)
get '/skeletons/:id' do
  @skeleton = Skeleton.find params[:id]
  erb :skeletons_show
end

#EDIT
get '/skeletons/:id/edit' do
  @skeleton = Skeleton.find params[:id]
  erb :skeletons_edit
end

#UPDATE
post '/skeletons/:id' do
  skeleton = Skeleton.find params[:id]
  skeleton.name = params[:name]
  skeleton.position = params[:position]
  skeleton.image = params[:image]
  skeleton.save
  redirect to("/skeletons/#{ params[:id] }")
end

#DESTROY
get '/skeletons/:id/delete' do
  skeleton = Skeleton.find params[:id]
  skeleton.destroy
  redirect to("/skeletons")
end


#### skeletal_regions CRUD ####

#INDEX
get '/skeletal_regions' do
  @regions = Skeletal_region.all
  erb :skeletal_regions_index
end

#NEW
get "/skeletal_regions/new" do
  erb :skeletal_regions_new
end

#CREATE
post '/skeletal_regions' do
  region = Skeletal_region.new
  region.name = params[:name]
  region.position = params[:position]
  region.image = params[:image]
  region.save
  redirect to("skeletal_regions/#{ region.id }")
end

#UPDATE
post '/skeletal_regions/:id' do
  region = Skeletal_region.find params[:id]
  region.name = params[:name]
  region.position = params[:position]
  region.image = params[:image]
  region.save
  redirect to("/skeletal_regions/#{ region.id }")
end

#DESTROY
get '/skeletal_regions/:id/delete' do
  region = Skeletal_region.find params[:id]
  region.destroy
  redirect to('/skeletal_regions')
end

#SHOW
get '/skeletal_regions/:id' do
  @region = Skeletal_region.find params[:id]
  erb :skeletal_regions_show
end

#EDIT
get '/skeletal_regions/:id/edit' do
  @region = Skeletal_region.find params[:id]
  erb :skeletal_regions_edit
end

### Bones CRUD####

#INDEX
get '/bones' do
  @bones = Bone.all
  erb :bones_index
end

#NEW
get "/bones/new" do
  erb :bones_new
end

#CREATE
post '/bones' do
  bone = Bone.new
  bone.name = params[:name]
  bone.region = params[:region]
  bone.image = params[:image]
  bone.save
  redirect to("bones/#{ bone.id }")
end

#UPDATE
post '/bones/:id' do
  bone = Bone.find params[:id]
  bone.name = params[:name]
  bone.region = params[:region]
  bone.image = params[:image]
  bone.save
  redirect to("/bones/#{ bone.id }")
end

#DESTROY
get '/bones/:id/delete' do
  bone = Bone.find params[:id]
  bone.destroy
  redirect to('/bones')
end

#SHOW
get '/bones/:id' do
  @bone = Bone.find params[:id]
  erb :bones_show
end

#EDIT
get '/bones/:id/edit' do
  @bone = Bone.find params[:id]
  erb :bones_edit
end
