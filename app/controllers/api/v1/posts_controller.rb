module Api
  module V1
    class PostsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @posts = Post.all
        respond_to do |format|
          format.json { render :json => @posts }
        end
      end

      def create
      
        @post = Post.create(post_params)
        respond_to do |format|
          format.json { render :json => @post }
        end
      end

    private

    def post_params
      params.require(:post).permit(:name, :content, :user_id, :goal_id)
    end



    end
  end
end
