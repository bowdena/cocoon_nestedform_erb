class TodoList < ApplicationRecord
  has_many :tasks, dependent: :destroy
  #accepts_nested_attributes_for :tasks, allow_destroy: true, reject_if: :all_blank
  # reject if the name is blank.
  accepts_nested_attributes_for :tasks, allow_destroy: true, reject_if: :proc { |att| att['name'].blank? }
end
