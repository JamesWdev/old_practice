require_relative 'vm_classes.rb'

vending_machine = {
  :candy => ['snickers', 'twix', 'payday'],
  :chips => ['lays', 'pringles', 'doritos'],
  :drinks => ['coke', 'mugs', 'water']
}

exit = false
while exit != true
  # puts "\n#{vending_machine}\n " turn this into a class?
  puts ""
  vending_machine.each do |key, value|
    print "#{key}:  "
    print "#{value} \n"
  end
  puts ""
  Dialogue.new.opening 
  first_input = gets.chomp.downcase
  if first_input == 'exit'
    exit = true
  elsif first_input == 'stock'
    get_item = GetStuff.new.get_item
    get_type = GetStuff.new.get_type
    vending_machine = AddToVender.new(vending_machine).add_to_vendor(get_item, get_type)
  elsif first_input == 'buy'
    buy_item = TakeStuff.new.get_item
    from_type = TakeStuff.new.get_type
    vending_machine = Dispense.new(vending_machine).dispense_from(from_type, buy_item)
  else
    puts "\n Please try again. This is not an option.\n "
  end  
end


