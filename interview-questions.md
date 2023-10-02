# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:R.O

1. Why would super be used in a Ruby class?

Your answer: Super would be used in a Ruby class to bring down properties from a higher class ie: Inheritance 

Researched answer: Ruby uses the super keyword to call on the superclass to implement on the current method. Within the body of a method, super acts like a call to the original method.
The search for a method body starts in the superclass of the object that was found to contain the original method.

Example:

 class Pointer < Dog
  def initialize(name, breed)
    super(name)
    @breed = breed
  end

  def get_info
    "#{@name} is a #{@breed}."
  end
end



2. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a way to access data points that are related to each other.

Researched answer: A relational database is a type of database that stores and provides access to data points that are related to one another. In a relational database, each row in the table is a record with a unique ID called the key. (foreshadowing)

3. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is a unique id given to a model automatically by rails. This key is for one and one only model.

Researched answer: A primary key or keyword is a column in a  relational database table that's distinctive for each record. It's unique to that record like a driver's license number is unique to everyone.

4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I cannot remember what the five HTTP verbs are.

Researched answer: The five HTTP verbs are Post, Get, Put, Patch and Delete. These correspond to create, read, update, and delete. 

5. STRETCH: What is a JOIN table in SQL?

Your answer: I'm not sure this is a total shot in the dark but it sounds like some type of inheritance within tables.

Researched answer: A JOIN is a SQL clause used to query and access data from multiple tables. JOINS indicate how SQL servers should use data from one table to select rows from another table.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validation is the process that is carried out after Model Training where the trained model is evaluated with a testing data set. 

2. Params: Parameters define variable elements of a URL path, query parameters, headers, or a request body. You can create parameters for Paths and Path operations in your API definition.

3. API: APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.
