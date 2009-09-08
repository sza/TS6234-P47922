class PelajarsController < ApplicationController
  # GET /pelajars
  # GET /pelajars.xml
  def index
    @pelajars = Pelajar.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @pelajars }
    end
  end

  # GET /pelajars/1
  # GET /pelajars/1.xml
  def show
    @pelajar = Pelajar.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @pelajar }
    end
  end

  # GET /pelajars/new
  # GET /pelajars/new.xml
  def new
    @pelajar = Pelajar.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @pelajar }
    end
  end

  # GET /pelajars/1/edit
  def edit
    @pelajar = Pelajar.find(params[:id])
  end

  # POST /pelajars
  # POST /pelajars.xml
  def create
    @pelajar = Pelajar.new(params[:pelajar])

    respond_to do |format|
      if @pelajar.save
        flash[:notice] = 'Pelajar was successfully created.'
        format.html { redirect_to(@pelajar) }
        format.xml  { render :xml => @pelajar, :status => :created, :location => @pelajar }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @pelajar.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /pelajars/1
  # PUT /pelajars/1.xml
  def update
    @pelajar = Pelajar.find(params[:id])

    respond_to do |format|
      if @pelajar.update_attributes(params[:pelajar])
        flash[:notice] = 'Pelajar was successfully updated.'
        format.html { redirect_to(@pelajar) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @pelajar.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /pelajars/1
  # DELETE /pelajars/1.xml
  def destroy
    @pelajar = Pelajar.find(params[:id])
    @pelajar.destroy

    respond_to do |format|
      format.html { redirect_to(pelajars_url) }
      format.xml  { head :ok }
    end
  end
end
