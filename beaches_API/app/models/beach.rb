class Beach < ApplicationRecord
  belongs_to :airport
  belongs_to :port
end
