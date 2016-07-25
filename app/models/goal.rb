class Goal < ApplicationRecord
  has_many :posts
  belongs_to :user
  has_many :comments, through: :posts
end
