class BeachesController < ApplicationController

  def beach_params 
    return params.require(:beach).permit([:name, :territory, :tipology, :lat, :lng, :img, :parking, :wiki, :airport, :port])
  end

  def index
    beachs = Beach.all()
    render({json: beachs.as_json({include: 
        {
          airport: {
            only: [:name, :lat, :lng]
          },
          port: {
            only: [:name, :lat, :lng]
          }
        }
      })
    })
  end

  def show
    beach = Beach.find(params[:id])
    render({json: beach})
  end

  def create
    beach = Beach.create(beach_params())
    render({json: beach})
  end

  def update
    beach = Beach.find(params[:id])
    if beach.update_attributes(beach_params())
      render({json: beach})
    else
      render({json: :update_failed})
    end
  end

  def destroy
    beach = Beach.find(params[:id])
    if beach.destroy!
      render({json: {status: :success}})
    else 
      render({json: {status: :delete_failed}})
    end
  end



end