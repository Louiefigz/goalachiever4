module Api
  module V1
    class GoalsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json
      def index
        respond_with(Goal.all.order("id DESC"))
      end
      def show
        respond_with(Goal.find(params[:id]))
      end
      def create
        @note = Goal.new(note_params)
        if @note.save
          respond_to do |format|
            format.json { render :json => @note }
          end
        end
      end
      def update
        @note = Goal.find(params[:id])
        if @note.update(note_params)
          respond_to do |format|
            format.json { render :json => @note }
          end
        end
      end

      def destroy
        respond_with Goal.destroy(params[:id])
      end
      private
        def todo_params
          params.require(:goal).permit(:body) 
        end
    end
  end
end
