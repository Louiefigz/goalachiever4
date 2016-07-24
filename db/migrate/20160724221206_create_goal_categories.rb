class CreateGoalCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :goal_categories do |t|
      t.string :category

      t.timestamps
    end
  end
end
