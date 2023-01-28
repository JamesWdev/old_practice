class AddToVender
  def initialize(hash)
    @vending_machine = hash
  end

  def add_to_vendor(name, type)
    case         
      when type == 'candy' || type == 'chips' || type == 'drinks'
        @vending_machine[:"#{type}"].append("#{name}")
        return @vending_machine      
      else
        puts 'That is not an option.'
        puts''
        return @vending_machine       
    end
  end  
end

class Dispense
  def initialize(hash)
    @vending_machine = hash
  end

  def dispense_from(type, name) 
    case
      when (type == 'candy' || type == 'chips' || type == 'drinks') && @vending_machine[:"#{type}"].include?("#{name}")
        index = @vending_machine[:"#{type}"].find_index("#{name}")
        @vending_machine[:"#{type}"].delete_at(index)
        puts "#{name.capitalize} has been dispensed!"
        return @vending_machine        
      else
        puts 'That is not an option.'
        puts ''
        return @vending_machine
    end
  end  

end

class GetStuff
  def get_item
    puts 'What would you like to add to the vending machine?'
    @item_input = gets.chomp.downcase
    return @item_input
  end

  def get_type
    puts 'What section do you want to add this? Candy, chips, or drinks?'
    @type_input = gets.chomp.downcase
    return @type_input
  end
end

class TakeStuff
  def get_type
    puts 'What section would you like to dispense from? Candy, chips, or drinks?'
    @type_input = gets.chomp.downcase
    return @type_input
  end

  def get_item
    puts 'What would you like to dispense?'
    @item_input = gets.chomp.downcase
    return @item_input
  end
end

class Dialogue
  def opening
    puts "Welcome to my vending machine!!!"
    sleep(1)
    puts ""
    puts "Would you like to stock or buy from the vending machine?"
    puts "Please enter 'stock' or 'buy'"
    puts ""
    puts "To quit please type 'exit'"
    puts ""
  end
end

# vending_machine = {
#   :candy => ['snickers', 'twix', 'payday'],
#   :chips => ['lays', 'pringles', 'doritos'],
#   :drinks => ['coke', 'mugs', 'water']
# }
# vending_machine = {
#   :candy => [],
#   :chips => [],
#   :drinks => []
# }
# def add_item
#   GetStuff.new.get_item
# end
# def add_type 
#   GetStuff.new.get_type
# end
# def take_item
#   TakeStuff.new.get_item
# end
# def from_type 
#   TakeStuff.new.get_type
# end 

# newhash = AddToVender.new(vending_machine).add_to_vendor(add_item, add_type)
# next_hash = AddToVender.new(newhash).add_to_vendor(add_item, add_type)
# final_hash = Dispense.new(next_hash).dispense_from(from_type, take_item)
# p final_hash