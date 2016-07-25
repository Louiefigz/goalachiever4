class AddColumnsToGoals < ActiveRecord::Migration[5.0]
  def change
    add_column :goals, :goal_category_id, :integer
    
    add_column :goals, :completed, :boolean
  end
end
