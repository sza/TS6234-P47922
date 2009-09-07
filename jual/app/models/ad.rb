class Ad < ActiveRecord::Base
	
	validates_numericality_of :phone_number
	validates_numericality_of :post_code
	validates_numericality_of :price 
	validates_presence_of :name
	validates_presence_of :email
	validates_presence_of :heading
	
def pictureimg=(picture_field)
return if picture_field.blank?
self.content_type = picture_field.content_type.chomp
self.picture = picture_field.read
end
end
