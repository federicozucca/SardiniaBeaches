class AddTerritoryInfoToBeach < ActiveRecord::Migration[5.0]
  def change
    add_column :beaches, :territory, :string
  end
end
