array = [1, 3, 6, 4, 1, 2]
def solution(a)
  num_array = [1..100,000]
  # write your code in Ruby 2.2
  a.each do |number|
      if number.find(a) && a > 0
       no match = a
      else
        y += a
        return y.sort.first        
      end
  end  
end

puts solution(array)