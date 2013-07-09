=begin

This code sample is used to parse isbns and remove either dash or space

=end
isbn = "978-0596803735";

first3,separator,last10 =  isbn.scan(/^([0-9]{3})(\s|\-)([0-9]{10})$/i).first

puts "First 3 Digits: #{first3} separator: #{separator} last ten: #{last10}"

isbn.gsub!(/#{separator}/i,"")

puts "New Isbn will be: #{isbn}"

=begin
  outputs:
  
  First 3 Digits: 978 separator: - last ten: 0596803735
  
  New Isbn will be: 9780596803735
=end