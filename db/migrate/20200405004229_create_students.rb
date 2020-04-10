class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.boolean :absent
      t.integer :cohort_id

      t.timestamps
    end
  end
end
