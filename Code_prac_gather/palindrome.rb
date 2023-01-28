class Palindrome
  def initialize
    @word = 'racecar'
  end

  def rev_test
    word_array = @word.chars
    rev_word_array = @word.chars.reverse

    if word_array.join.downcase == rev_word_array.join.downcase
      puts 'Palindrome!!!'
    else
      puts 'Nope, not a match.'
    end
  end
end

palindrome = Palindrome.new
palindrome.rev_test