class AdsController < ApplicationController
  before_filter :check_logged_in, :only => [:edit, :update, :destroy]
  def new
    @ad = Ad.new
  end
  
  def create
    @ad = Ad.new(params[:ad])
    if @ad.save
    redirect_to "/ads/#{@ad.id}"
else
	render:template=>"/ads/new"
  end
end
  def show
    @ad = Ad.find(params[:id])
  end
  
  def index
    @ads = Ad.find(:all)

  end
  
  def edit
    @ad = Ad.find(params[:id])
  end
  
  def update
    @ad = Ad.find(params[:id])
    if
    @ad.update_attributes(params[:ad])
    redirect_to "/ads/#{@ad.id}"
else
	render:template=>"/ads/edit"
end
  end
  def destroy
    @ad = Ad.find(params[:id])
    @ad.destroy
    redirect_to '/ads/'
  end

  def find
	@ads = Ad.find(:all,:conditions=>["heading= ?",params[:search_string]])
  end

def image
@image = Classified.find(params[:id])
send_data @image.picture, :filename => "photo.jpg",
:type => @image.content_type, :disposition => "inline"
end


private 
  def check_logged_in
    authenticate_or_request_with_http_basic("Ads") do |username, password|
      username == "admin" && password == "cancel"
    end
  end 
end
