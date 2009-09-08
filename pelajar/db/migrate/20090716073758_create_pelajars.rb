class CreatePelajars < ActiveRecord::Migration
  def self.up
    create_table :pelajars do |t|
      t.string :name
      t.string :matrik
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :pelajars
  end
end
