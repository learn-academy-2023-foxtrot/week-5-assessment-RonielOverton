# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.



# Pseudo code:
# Name: contains_letter
# Input: Array
# Output: Array
# Process: Create two variables to store new arrays in. using .select to check if array has string and make new subset. .include? to check if array contains certain string.

# def contains_letter
# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# filter_letter_o = 'o'
# # Expected output: ['coffee', 'soda water'] 
# filter_letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']

# new_array = beverages_array.select{|beverage| beverage.include?(filter_letter_o)}
# new_array2 = beverages_array.select{|beverage| beverage.include?(filter_letter_t)}
# p new_array
# p new_array2
# end
# p contains_letter

# Output ["coffee", "soda water"]
# ["tea", "water", "soda water"] 
# ["tea", "water", "soda water"]  

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']   

# Pseudo code:
# Name: states_array
# Input: Hash
# Output: Array
# Process: This was a tough one but I got it using .flatten to get rid of nested array and .sort to put in alphabetical order. 

# def states_array(input)
#     hash_values = input.values
#     # new_array = [] 
    
# #    p push_arr = new_array << 
#     p hash_values.flatten.sort
   
# end
# states_array(us_states)

#  Output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# Name: Bike
# Input: object
# Output: string
# Process: create a class of Bike that's initialized with a model, wheels, and current speed.

# class Bike 
#     def initialize( model )
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def bike_info
#     "Bike model is a #{@model} has #{@wheels} wheels and it's current speed is #{@current_speed}"
#     end
#     def pedal_faster
#         @current_speed = @current_speed +1
#     end
# end

# mongoose = Bike.new('mongoose')
# p mongoose.bike_info

# Output "Bike model is a mongoose has 2 wheels and it's current speed is 0"
 
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# Name pedal_faster
# Input: class
# Output: Integer
# Process: Wasn't sure on how to go about this and got  completely burnt....