def die():
    return random.randint(1,6)
#print(die())

def weighted_die():
    if random.random() > 0.5:
        return 6
    else:
        return random.randint(1,5)

def average (num_rolls, die_func):
    total = 0
    for i in range(num_rolls):
        total += die_func()
    return total / num_rolls 

#print(average(1000,die))
#print(average(die(),die))

#function => function 
def max_pair(die_func)

#closure: allows for a reference to the context even after the scope it was defined in has returned. packaged and returened as an object. 
#package to remember its lexical scope even after the function it was defined in was returned;
#the keyword lambda is used when you want to just declare a funciton without any naming. It is like the keyword function in JS.
#lambda(x): return x. This is a way to just say it is a function. 
#HOFS. Going over Map as a higher order function. 
#functools is a library that can imported in your program

#python has a syntax for arguments -- keyword *args
#tuples are different than fixed array lengths in python. They cannot be modified in Python and they are represented in parenthesis. 
#(1,2,3,4) is an immutable object that you can lookup by index, but you cannot change the values. 

#array[0:2] means pretty much slice from index 0 to 2, but not including 2 #negatives go from the end. 
#lookup @remember it is some functional programming syntax RE: decorators! 