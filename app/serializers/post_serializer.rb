class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :content  
  # has_one :user
  # has_one :goal
end
