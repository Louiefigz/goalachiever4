class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :content
  has_many :comments
  # has_one :user
  # has_one :goal
end
