# Cracking the Coding Interview (6th Edition) 

JavaScript solutions to problems in the book Cracking the Coding Interview(6th Edition). 

## Table of Contents
* **[Big O](#big-)**
* **[Data Structure Summary](#data-structure-summary)**
* **[Arrays and Strings](#arrays-and-strings)**
    * Hash Tables
    * ArrayList & Resizale Array
    * StringBuilder
* **[LinkedList](#linkedlist)**
    * [The runner technique (or Second Pointer)](#the-runner-technique)
    * [Recursive Problems](#recursive-problems)
* **[Stacks and Queues](#stacks-and-queues)**
* **[Trees and Graphs](#trees-and-graphs)**
* **[Bit Manipulation](#bit-manipulation)**
* **[Math and Logic Puzzles](#math-and-logic-puzzles)**
* **[Object Oriented Design](#object-oriented-design)**
* **[Recursion and Dynamic Programming](#recursion-and-dynamic-programming)**
* **[System Design and Scalability](#system-design-and-scalability)**
* **[Sorting and Searching](#sorting-and-searching)**
* **[Testing](#testing)**
* **[Additional Review Problems](#additional-review-problems)**
* **[JavaScript FAQ](#javascript-faq)**
* **[Resources](#resources)**

## Big O
#### Recursive Runtimes:
  - **# of elements get halved each time**: O(log N)
  - **N calls per recursion**: O(branches ^ (depth))
     - Below case, branches = 2, depth = n => O(2^n) 
     ```Java
     int f(int n){
         if (n < = 0) {
            return 1
         }
         return f(n-1) + f(n-1)
     }
     ```
     - Below case, branches = 2, depth of Binary tree with N nodes= Log(N) => O(2^(log N)) = O(N) 
     ```Java
     int sum (Node node) {
         if (node == null){
            return 0;
         }
         return sum(node.left) + node.value + sum(node.right);
     }
     ```
     
 
## Data Structure Summary
  | Data Structure   |      Pro      |  Cons |
  |:----------:|-------------|------|
  | [Array](./chapter01/arrays) | - Fast Lookup O(1)<br> - Fast Push/Pop<br> - Ordered|- Slow Insert/Delete <br> - Fixed Size|
  | [Linked List](./chapter02/linkedLists)|- Add/remove items from the beginning of the list in constant time<br>-Ordered<br>-Flexible Size|-Slow Lookup<br>-More Memory due to storage of additional next and previous referencing elements.|

[(Back to top)](#table-of-contents)
## Arrays and Strings
### Base Knowledge:
 
  #### 2. Array List:
  - **Array List (Dynamic Array)**: offers dynamic resizing, provides O(1) access, taking O(n) time to doubles when the arrayList is full, but happens rarely, so amortized doubling time still O(1) like Array - JavaScript, List - Python 
  - **Array (Static Array)**: fixed length
  

  
  #### 3. StringBuilder:
  - **Problem**: Concatenating a list of strings would take O(n^2)
      - Why ? Assum we have a list of n strings with the same x length. On each concatenation, a new copy of string is created & 2 strings are copied over character by character. First concat --> requires to copy x chars. Second concat --> requires to copy 2x chars...
      - Total time = O(x + 2x + 3x + ...+ n) = n(n+1)/2 = O(n^2)
  - **Solution**: Using resizeable array to append all the strings & copy them back to a string only when necessary.
     ```JavaScript
     let compressedStr = [];
     while (i < strLength) {
       //Using array to concat the string instead of String Concat, which costs O(n^2)
       compressedStr.push(str[i], "add");
       i++;
     }
     //Convert back to string from array
     compressedStr = compressedStr.join("")
     ```
### Solution
- [**1.1. Is Unique**](./chapter01/1_1_Is_Unique.js): Implement an Algorithm to determine if a string has all unique characters. 
  - **Hints**: using *Hash Tables* O(n); *Bit Vector* O(n) in time & O(1) in space as only take an Int (4-byte) extra memory 
  - **ASCII and Unicode**
     - ASCII (7-bit) = 2^(7) defines 128 characters, which map to the numbers 0–127. 

     - Unicode:  consistent encoding, representation, and handling of text expressed in most of the world's writing systems: Japanese, Chinese, Vietnamese, etc.
     - Unicode is a superset of ASCII, and the numbers 0–127 have the same meaning in ASCII as they have in Unicode. For example, the number 65 (100 0001) means "Latin capital 'A'".

  - **UTF-8, UTF-16 & UTF-32**: ways of storing Unicode characters in byte sequences, such as UTF-32 and UTF-8.
     - UTF-8 : minimum 8 bits (variable length encodings).
     - UTF-16: minimum 16 bits (variable length encodings).
     - UTF-32: minimum and maximum 32 bits.
   
- [**1.2. Check Permutation**](./chapter01/1_2_CheckPermutation.js): Given two strings, write a method to decide if one is a permutation of each other <br />
  - **Hints**
     - Permutation means "dog" & "god" are permutation of each other 
     - Step 1: check if both have the same length or not
     - Step 2: Sort the strings to put two permutation in same order

- [**1.3. URLify**](./chapter01/1_3_urlify.js) <br /> Write a method to replace all spaces in a string with "%20". Given the true length (oriLength) of the string<br>
`('Mr John Smith    ', 13) => 'Mr%20John%20Smith'`
  - **Hints**
     - A common approach in **string manipulation problems** is to edit the string *starting from the end and working backwards*
        - For URLify, using 2-scan approach:
        - First Scan: count the number of space between the actual string from index 0 to `oriLength -1` => Calculate the actual length of the string we need to increase to append "%20"
        - Second Scan: Edit the string in reverse order, starting from `oriLength -1` to index 0
            - If seeing a space => replace with %20
            - If original character => copy
 
- [**1.4. Palindrome Permutation**](./chapter01/1_4_palindromePermutation.js): Given a string, write a function to check if it is a permutation of a palindrome ?
```
Input: Tact Cooa
Ouput: True (Permutations: "taco cat", "atco cta", etc)
```
  - **Permutation**: rearrangement of letters
  - **Palindrome**: a word or phase that is the same towards and backwards. 
  - **Hints**: To be more precise, a *permutation of a palindrome* would be 
      - For string with Even Length after removing non-letter characters must have even counts of characters, i.e:  `{ t: 2, a: 2, c: 2} => True`
         - `{ t: 2, a: 1, c: 1} => False`, so for even-length string, if we have more than 1 char with odd count, it can't be a permutation of a palindrome also [1]
      - For string with Odd Length after removing non-letter characters must have exact 1 char with odd count [2], i.e: `{ t: 2, a: 2, c: 2, o: 5 } => True`
      - From [1], [2]: **permutation of a palindrome** *cannot have more than 1 char with odd count* 
 
 - [**1.5. One Away**](./chapter01/1_5_One_Away.js) There are three types of edits that can be performed on strings: insert a character, remove a character and replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. <br />
 
    ```JavaScript
   //Examples:
   console.log(oneAway('pale', 'ple'), true);
   console.log(oneAway('pales', 'pale'), true);
   console.log(oneAway('pale', 'bale'), true);
   console.log(oneAway('pale', 'bake'), false)
    ```
  - **Hints**: Using 2-pointer approach: Compare each character of 2 strings & using `difference` variable to keep track if there is not more than 1 edit (or zero edits) away
     - if difference => difference++ and check `if (differnce > 1) return false; else`:
       - if s1 !== s2, move the pointer of the longer string to the next char; 
       - if s1 === s2, move both pointers to next char
     - if same => move both pointers
- [**1.6. String Compression**](./chapter01/1_6_String_Compression.js) Given a string, write a function to compress it by shortening every sequence of the same character to that character followed by the number of repetitions. If the compressed string is longer than the original, you should return the original string.
    ```JavaScript
    //Examples:
    compress(“a”) = "a"
    compress(“aaa”) = "a3"
    compress(“aaabbb”) = "a3b3"
    compress(“aaabccc”) = "a3b1c3"
    ```
  - **Hints**: Iterate through the string, copying characters to a new array, counting & appending the occurance into the new array. Join back the array to make compressed string after iteration.

- [**1.7. Rotate Matrix**](./chapter01/1_7_rotateMatrix.js) Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
   - **Hints**: O(N^2) => Swap  on each layer, starting from outermost and working inwards.

- [Rotate Matrix](./chapter01/1_7_rotateMatrix.js) <br />
  - [String Compression](./src/chapter01ArraysAndStrings/StringCompression.java) <br />
  - [String Rotation](./src/chapter01ArraysAndStrings/StringRotation.java) <br />

  - [Zero Matrix](./src/chapter01ArraysAndStrings/ZeroMatrix.java) <br />


## LinkedList
### Base Knowledge:
<img width="701" alt="Screenshot 2020-09-11 at 8 44 51 AM" src="https://user-images.githubusercontent.com/64508435/92833241-36d57d80-f40b-11ea-9275-6c77cace9554.png">

  #### Pros & Cons:
  - Unlike an array, linked list not provide constant time access to particular "index" (i.e: to find Kth element in the list, you need to iterate through K elements)
  - **Benefits of LinkedList**: you can add/remove items from the beginning of the list in constant time
  
  #### The Runner Technique:
  - The runner technique (or Second Pointer): iterate through Linked List using 2 pointers simultaneousely, with one ahead of the other
  - In many linked list problems you need to know the position of a certain element or the overall length of the list. Given that you don’t always have the length of the list you are working on, the runner technique is an elegant way to solve these type of problems (and in some cases it’s the only solution)
  - You could have 1 pointer p1 (fast pointer) move every 2 elements for every 1 move that p2 makes. When p1 hits the end of Linked List, p2 will be at midpoint of linked list.
  
  #### Recursive Problems:
  - A number of linked list problems rely on recursion.
  - Note: recursive algorithms take at least O(n) space , which n is the depth of recursive call.

### Solution
- [**2.1. Remove Duplicates**](./chapter02/2P1_removeDuplicates.js): Write code to remove duplicates from unordered linked List ? How would you solve this problem if a temporary buffer is not allowed <br />
   - Solution 1 [Time: O(n) - Space: Need a temporary buffer]: In order to remove duplicates, we need to able to track duplicates => Using `Hash Table`
   - Solution 2 [Time: O(n^2) - Space: O(1)]: we can iterate with two pointers: `current` which iterates through the linkedList & `runner` which checks all subsequent nodes for duplicates
```JavaScript
  let currentNode = llist.head;
  
  while(currentNode) {
    let runner = currentNode;
    while (runner.next) {
      if (runner.next.value === currentNode.value) {
         runner.next = runner.next.next;
      } else {
      runner = runner.next
    }
  currentNode = currentNode.next;
  }
}
```

- [**2.2. Return Kth To Last**](./chapter02/2P02_returnKthElemFromLast.js): Implement an algorithm to find kth to last element of a singly linked list <br />
   - Solution 1: kth to last element = (n - k) => Trivial Solution
   - Solution 2: 2 Pointer Approach: 
      - Move p1 pointer k steps in the linkedlist while p2 remains at head
      - Once p1 reach kth postion, move both pointers at the same time
         ```JavaScript
           // p1 will start @ kth, p2 will start @ 0
           // When p1 hits the end of the list = n - k
           // p2 pointer will exit at kth node from the end
           while (p1 !== null) {
             p1 = p1.next;
             p2 = p2.next;
           }
           return p2.value;
         ```
   - Solution 3: Recursive 
      - This is to recurse through the linked list. When it hits the end, the method passes back a counter = 0. 
      - Each parent call adds 1 to this counter.
      - When `counter = k`, we have reach the kth to last element of the linked  

- [**2.3. Delete Middle Node**](./chapter02/2P03_deleteMiddleNode.js):  Implement an algo to delete a node in the middle of the singly linked list, given only access to this node. For ex: <br />
   - Input: the node c from linked list a->b->c->d->e
   - Output: a->b->d->e
 
   - **Solution:** Since you are not given the access to the head of the list, the solution is to copy over the data of next node to the deleted node, then delete the next node.
- [Intersection](./src/chapter02LinkedList/Intersection.java) <br />
- [ListNode](./src/chapter02LinkedList/ListNode.java) <br />
- [Loop Detection](./src/chapter02LinkedList/LoopDetection.java) <br />
- [Palindrome](./src/chapter02LinkedList/Palindrome.java) <br />
- [Partition](./src/chapter02LinkedList/Partition.java) <br />
- [Remove Duplicates](./chapter02/2P1_removeDuplicates.js) <br />

- [Sum Lists](./src/chapter02LinkedList/SumLists.java) <br />

### Stacks and Queues

- [Animal Shelter](./src/chapter03StacksAndQueues/AnimalShelter.java) <br />
- [Three Stacks in One Array](./src/chapter03StacksAndQueues/ArrayToStack.java) <br />
- [Implement Queue Using Stacks](./src/chapter03StacksAndQueues/ImplementQueueUsingStacks.java) <br />
- [Min Stack](./src/chapter03StacksAndQueues/MinStack.java) <br />
- [Sort Stack](./src/chapter03StacksAndQueues/SortStack.java) <br />

### Trees and Graphs

- [Check Balanced Tree](./src/chapter04TreesAndGraphs/CheckBalancedTree.java) <br />
- [First Common Ancestor](./src/chapter04TreesAndGraphs/FirstCommonAncestor.java) <br />
- [List of Depths](./src/chapter04TreesAndGraphs/ListOfDepths.java) <br />
- [Minimal Tree](./src/chapter04TreesAndGraphs/MinimalTree.java) <br />
- [Paths with Sum](./src/chapter04TreesAndGraphs/PathsWithSum.java) <br />
- [Random Node](./src/chapter04TreesAndGraphs/RandomNode.java) <br />
- [Route between Nodes](./src/chapter04TreesAndGraphs/RouteBetweenNodes.java) <br />
- [Successor](./src/chapter04TreesAndGraphs/Successor.java) <br />
- [Tree Node](./src/chapter04TreesAndGraphs/TreeNode.java) <br />
- [Validate BST](./src/chapter04TreesAndGraphs/ValidateBST.java) <br />

### Bit Manipulation

- [Binary to String](./src/chapter05BitManipulation/BinaryToString.java) <br />
- [Conversion](./src/chapter05BitManipulation/Conversion.java) <br />
- [Flip Bit to Win](./src/chapter05BitManipulation/FlipBitToWin.java) <br />
- [Insertion](./src/chapter05BitManipulation/Insertion.java) <br />
- [Introduction](./src/chapter05BitManipulation/Intro.java) <br />
- [Next Number](./src/chapter05BitManipulation/Intro.java) <br />
- [Pairwise Swap](./src/chapter05BitManipulation/PairwiseSwap.java) <br />

### Math and Logic Puzzles

- [Generate a List of Primes](./src/chapter06MathAndLogicPuzzles/GenerateAListOfPrimes.java) <br />

### Object Oriented Design

### Recursion and Dynamic Programming

- [Boolean Evaluation](./src/chapter08RecursionAndDynamicProgramming/BooleanEvaluation.java) <br />
- [Coins](./src/chapter08RecursionAndDynamicProgramming/Coins.java) <br />
- [Eight Queues](./src/chapter08RecursionAndDynamicProgramming/EightQueues.java) <br />
- [Fibonacci](./src/chapter08RecursionAndDynamicProgramming/Fibonacci.java) <br />
- [Magic Index](./src/chapter08RecursionAndDynamicProgramming/MagicIndex.java) <br />
- [Paint Fill](./src/chapter08RecursionAndDynamicProgramming/PaintFill.java) <br />
- [Parenthesis](./src/chapter08RecursionAndDynamicProgramming/Parenthesis.java) <br />
- [Permutations with Duplicates](./src/chapter08RecursionAndDynamicProgramming/PermutationsWithDuplicates.java) <br />
- [Permutations without Duplicates](./src/chapter08RecursionAndDynamicProgramming/PermutationsWithoutDups.java) <br />
- [Power Set](./src/chapter08RecursionAndDynamicProgramming/PowerSet.java) <br />
- [Recursive Multiply](./src/chapter08RecursionAndDynamicProgramming/RecursiveMultiply.java) <br />
- [Robot In a Grid](./src/chapter08RecursionAndDynamicProgramming/RobotInAGrid.java) <br />
- [Stack of Boxes](./src/chapter08RecursionAndDynamicProgramming/StackOfBoxes.java) <br />
- [Towers of Hanoi](./src/chapter08RecursionAndDynamicProgramming/TowersOfHanoi.java) <br />
- [Triple Steps](./src/chapter08RecursionAndDynamicProgramming/TripleSteps.java) <br />

### System Design and Scalability

### Sorting and Searching

- [Group Anagrams](./src/chapter10SortingAndSearching/GroupAnagrams.java) <br />
- [Merge Sort](./src/chapter10SortingAndSearching/MergeSort.java) <br />
- [Quick Sort](./src/chapter10SortingAndSearching/QuickSort.java) <br />
- [Search in Rotated Array](./src/chapter10SortingAndSearching/SearchInRotatedArray.java) <br />
- [Sort Big File](./src/chapter10SortingAndSearching/SortBigFile.java) <br />
- [Sorted Merge](./src/chapter10SortingAndSearching/SortedMerge.java) <br />
- [Sorted Search No Size](./src/chapter10SortingAndSearching/SortedSearchNoSize.java) <br />
- [Sparse Search](./src/chapter10SortingAndSearching/SparseSearch.java) <br />

### Testing

### Additional Review Problems (Moderate)

### Additional Review Problems (Hard)

## JavaScript FAQ
- **String - How to sort a string**:
   ```JavaScript
    //need to .split("") the string to sort the array since JS dont have .sort() for string, only for array
    //need to .join("") after sorted to compare to string since JS cannot compare 2 arrays
    var sortedStringOne = stringOne.split("").sort().join("");
   ```
- **String - How to modify element in existing string**:
   ```JavaScript
    //need to .split("") the string into the array as JS cannot directly change element 
    //via string index like this str[newLength - 1] = "0";
    let strArr = str.split("");
    
    for (let i = oriLength - 1; i >= 0; i--) {
       if (str[i] === " ") {
         strArr[newLength - 1] = "0";
       }
    }
    //need to .join("") to become a string from the array strArr
    return strArr.join("");
   ```
- **Object - How to loop through Keys & Values of Object**: `Object.keys(obj_variable)`; `Object.values(obj_variable)`
   ```JavaScript
   Object.keys(char_obj).forEach((char) => {
    if (char_obj[char] % 2 > 0) {
      isPerm = false; // return in a forEach statment doesn't flow out of function scope
    }
   ```

[(Back to top)](#table-of-contents)

### Resources:
- [Offical Solution](https://github.com/careercup/CtCI-6th-Edition-JavaScript/)
