# Cracking the Coding Interview (6th Edition) 

JavaScript solutions to problems in the book Cracking the Coding Interview(6th Edition). 

## Table of Contents

* **[Arrays and Strings](#arrays-and-strings)**
    * Hash Tables
    * ArrayList & Resizale Array
    * StringBuilder
* **[LinkedList](#linkedlist)**
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

## Arrays and Strings

### Base Knowledge:
  #### 1. Array List:
  - **Array List**: offers dynamic resizing, provides O(1) access, taking O(n) time to doubles when the arrayList is full, but happens rarely, so amortized doubling time still O(1)
  - **Array**: fixed length
      
### Solution
- [**Is Unique**](./src/chapter01ArraysAndStrings/IsUnique.java) <br />
  - **ASCII and Unicode**
     - ASCII (7-bit) = 2^(7) defines 128 characters, which map to the numbers 0–127. 

     - Unicode:  consistent encoding, representation, and handling of text expressed in most of the world's writing systems: Japanese, Chinese, Vietnamese, etc.
     - Unicode is a superset of ASCII, and the numbers 0–127 have the same meaning in ASCII as they have in Unicode. For example, the number 65 (100 0001) means "Latin capital 'A'".

  - **UTF-8, UTF-16 & UTF-32**: ways of storing Unicode characters in byte sequences, such as UTF-32 and UTF-8.
     - UTF-8 : minimum 8 bits (variable length encodings).
     - UTF-16: minimum 16 bits (variable length encodings).
     - UTF-32: minimum and maximum 32 bits.
     
  - **Hints**: using Hash Tables, Bit Vector ?
  
      
  - [Check Permutation](./src/chapter01ArraysAndStrings/CheckPermutation.java) <br />
  - [One Away](./src/chapter01ArraysAndStrings/OneAway.java) <br />
  - [Palindrome Permutation](./src/chapter01ArraysAndStrings/PalindromePermutation.java) <br />
  - [Rotate Matrix](./src/chapter01ArraysAndStrings/RotateMatrix.java) <br />
  - [String Compression](./src/chapter01ArraysAndStrings/StringCompression.java) <br />
  - [String Rotation](./src/chapter01ArraysAndStrings/StringRotation.java) <br />
  - [Urlify](./src/chapter01ArraysAndStrings/Urlify.java) <br />
  - [Zero Matrix](./src/chapter01ArraysAndStrings/ZeroMatrix.java) <br />

### LinkedList

- [Delete Middle Node](./src/chapter02LinkedList/DeleteMiddleNode.java) <br />
- [Intersection](./src/chapter02LinkedList/Intersection.java) <br />
- [ListNode](./src/chapter02LinkedList/ListNode.java) <br />
- [Loop Detection](./src/chapter02LinkedList/LoopDetection.java) <br />
- [Palindrome](./src/chapter02LinkedList/Palindrome.java) <br />
- [Partition](./src/chapter02LinkedList/Partition.java) <br />
- [Remove Duplicates](./src/chapter02LinkedList/RemoveDuplicates.java) <br />
- [Return Kth To Last](./src/chapter02LinkedList/ReturnKthToLast.java) <br />
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
