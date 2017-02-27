class CreateBeaches < ActiveRecord::Migration[5.0]
  def change
    create_table :beaches do |t|
      t.string :name
      t.string :tipology
      t.decimal :lat
      t.decimal :lng
      t.string :img
      t.string :parking
      t.string :wiki
      t.string :territory
      t.references :airport, foreign_key: true
      t.references :port, foreign_key: true

      t.timestamps
    end
  end
end
