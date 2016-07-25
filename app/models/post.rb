class Post < ApplicationRecord
  has_many :goals
  belongs_to :user
  has_many :comments
end
