# Exercice 1
Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.
However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for all
numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...).

## Algorithm
Iterates over the number range from 1 trhough 100. For each number checks if it is divisible by 3 _and_ 5. If so, then adds
to an output array the expession `Visual Nuts`. If it is not, then checks if it is divisible by only 3 _or_ 5. If it is the case,
then adds to the output array the expression `Visual` or `Nuts` accordingly. Finally, if the number is not divisible by 3 and 5,
then adds the number itself to the output array. Finally, prints the contents of the array to the console.

Please, see the implementation of this algorithm + unit tests on the `exercise-1` folder.

## Code maintainance

A way to keep the code safe and prevent it to break on future maintainance is encapsulating the core routine into
a reusable function. On top of that, instead of hardcoding the number range to iterate through, it is better allowing this function
to receive the range boundaries as parameters. This way, if one wants to print another range in the future, the change would be
basically replacing the parameters and not changing the core routine. Besides that, unit tests to that function are important to ensure
the code will not regress on future changes.


