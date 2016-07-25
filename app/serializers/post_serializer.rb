class PostSerializer < ActiveModel::Serializer
  attributes :id
  has_on :user
  has_one :goal
end
