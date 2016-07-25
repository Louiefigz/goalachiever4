class GoalSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_many :posts
end
