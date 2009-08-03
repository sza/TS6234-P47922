class CreateAds < ActiveRecord::Migration
  def self.up
    create_table :ads do |t|
      t.string :name
      t.string :email
      t.integer :phone_number
      t.string :category
      t.string :region
      t.string :post_code
      t.string :heading
      t.text :ad_text
      t.decimal :price
      t.string :img_url

      t.timestamps
    end
  end

  def self.down
    drop_table :ads
  end
end
