require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'
# Rails will do all this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model
class Account < ActiveRecord::Base
  belongs_to :customer
end

class Customer < ActiveRecord::Base
  has_many :accounts
end

get '/' do
  erb :home #:layout => :home //to direct layout to home.erb
end

#INDEX
get '/customers' do
  @customers = Customer.all
  erb :customers_index
end

#NEW
get '/customers/new' do
  erb :customers_new
end

#CREATE
post '/customers' do
  customer = Customer.new
  customer.first_name = params[:first_name]
  customer.last_name = params[:last_name]
  customer.gender = params[:gender]
  customer.contact_detail = params[:contact_detail]
  customer.email = params[:email]
  customer.address = params[:address]
  customer.save
  redirect to("/customers")
end

#SHOW
get '/customers/:id' do
  @customer = Customer.find params[:id]
  erb :customers_show
end

#EDIT
get '/customers/:id/edit' do
  @customer = Customer.find params[:id]
  erb :customers_edit
end

#UPDATE
post '/customers/:id' do
  customer = Customer.find params[:id]
  customer.first_name = params[:first_name]
  customer.last_name = params[:last_name]
  customer.gender = params[:gender]
  customer.contact_detail = params[:contact_detail]
  customer.email = params[:email]
  customer.address = params[:address]
  customer.save
  redirect to("/customers/#{ params[:id] }")
end

#DELETE
get '/customers/:id/delete' do
  customer = Customer.find params[:id]
  accounts = Account.where(["customer_id = ?", params[:id]])
  accounts.destroy_all
  customer.destroy
  redirect to('/customers')
end

#######################################################################################################
#ACCOUNTS#

#Get all accounts Index of customer
get '/accounts' do
  @accounts = Account.all
  erb :accounts_index
end

#NEW ACCOUNT
get '/customers/:id/accounts/new' do
  @customer_id = params[:id];
  erb :accounts_new
end

#CREATE ACCOUNT INSIDE CUSTOMER
post '/customers/:id/accounts' do
  account = Account.new
  account.customer_id = params[:id]
  account.account_type = params[:account_type]
  account.balance = params[:balance]
  account.account_status = params[:account_status]
  account.save
  redirect to("/customers/#{account.customer_id}/accounts")
end

#SHOW ALL ACCOUNTS OF SELECTED CUSTOMER
get '/customers/:id/accounts' do
  @accounts = Account.where(["customer_id = ?", params[:id]])
  erb :accounts_index
end

#SHOW PARTICULAR ACCOUNT DETAIL OF SELECTED CUSTOMER
get '/customers/:id/accounts/:account_number' do
  @account = Account.find params[:account_number]
  @customer = Customer.find @account.customer_id
  erb :accounts_show
end

#CREATE NEW ACCOUNT
post '/accounts/accounts_number' do
  account = Account.new
  account.customer_id = params[:id]
  account.account_type = params[:account_type]
  account.balance = params[:balance]
  account.account_status = params[:account_status]
  account.save
  redirect to("/accounts/")
end

#EDIT ACCOUNTS DETAILS
get '/customers/:id/accounts/:account_number/edit' do
  @account = Account.find params[:account_number]
  erb :accounts_edit
end

#UPDATE EDITED DETAILS
post '/customers/:id/accounts/:account_number' do
  account = Account.find params[:account_number]
  account.account_type = params[:account_type]
  account.balance = params[:balance]
  account.account_status = params[:account_status]
  account.save
  redirect to("customers/#{ account.customer_id }/accounts/#{ account.account_number }")
end

#DELETE ACCOUNT
get '/customers/:id/accounts/:account_number/delete' do
  account = Account.where(["account_number = ?", params[:account_number]])
  account.destroy_all
  redirect to("/customers/#{params[:id]}/accounts")
end
