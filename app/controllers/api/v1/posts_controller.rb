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



    end
  end
end
