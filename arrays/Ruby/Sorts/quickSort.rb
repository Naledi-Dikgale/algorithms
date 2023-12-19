# frozen_string_literal: true

def sort_itself(array)
  # write your code here
  (1...array.length).each do |hole_position|
    right_position = hole_position - 1
    value_to_insert = array[hole_position]

    while right_position >= 0 && array[right_position] > value_to_insert
      array[right_position + 1] = array[right_position]
      right_position -= 1
    end

    array[right_position + 1] = value_to_insert
    puts array.join(' ')
  end
end

sort_itself([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2    # Initial array
#    1 3 4 6 9 2    # Insert 3 at the correct position
#    1 3 4 6 9 2    # 4 is already in the correct position
#    1 3 4 6 9 2    # 6 is already in the correct position
#    1 2 3 4 6 9    # Insert 2 at the correct position
