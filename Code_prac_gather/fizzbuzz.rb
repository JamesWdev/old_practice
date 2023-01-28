class FizzBuzz

  def initialize
    @fizzbuzz = Array(1..100)
  end

  def array_fun
    puts @fizzbuzz
  end

  def fizzbuzz_Method
    @fizzbuzz.each do |x|
      if ((x % 3) == 0) && ((x % 5) == 0)
        puts 'FizzBuzz'
      elsif (x % 3) == 0
        puts 'Fizz'
      elsif (x % 5) == 0
        puts 'Buzz'
      else 
        puts x
      end
    end
  end

end

fizzbuzz = FizzBuzz.new
fizzbuzz.fizzbuzz_Method

