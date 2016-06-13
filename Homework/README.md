#### w2d1 Homework - Intro to JavaScript.

* Variable types: strings, numbers, booleans, Arrays, Objects.
* Functions: can be named or not.  Can have 0 to infinity arguments.
* Scope: global variables are BAD in most cases.

:sunglasses: JavaScript is way more fun than CSS and HTML!! :suglasses:


[Normal Mode](https://github.com/jjrajani/w2d1_HW/blob/master/Homework/main.js)
* Answer questions given by Brit in regards to scope, and showing knowledge of understanding by providing the output the computer would have given, given a specific function.

[Hard Mode](https://github.com/jjrajani/w2d1_HW/blob/master/Homework/hard.js)
* Sum of Squares of the two largest numbers given.
    * First solution used sort() to sort numbers given then used last two in array of sorted.
    * Second solution used if else statements to find the smallest of three numbers than swuare and add the larger.

[Nightmare Mode](https://github.com/jjrajani/w2d1_HW/blob/master/Homework/nightmare.js)

  * Anything written in a loop can also be written recursuvely. 
  *     Example:
    ```javascript
    var do = function(n) {
        if (n != 0) {
            do some stuff
            if (n != 0) {
                recall do(n)
            }
        }
    }
    ```