export const jsQuizz = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: [
        'To manage state in functional components',
        'To handle event listeners',
        'To render conditional content',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer: 'To manage state in functional components',
    },
    {
      question: 'What is the difference between props and state in React?',
      choices: [
        'Props are mutable, and state is immutable',
        'Props are immutable, and state is mutable',
        'Props and state are both mutable',
        'Props and state are both immutable',
      ],
      type: 'MCQs',
      correctAnswer: 'Props are immutable, and state is mutable',
    },
    {
      question: 'What is the purpose of the useEffect hook in React?',
      choices: [
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To render conditional content',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer: 'To handle side effects and lifecycle methods',
    },
    {
      question: 'What is the purpose of the TypeScript language?',
      choices: [
        'To add static typing to JavaScript',
        'To replace JavaScript entirely',
        'To simplify JavaScript syntax',
        'To optimize JavaScript performance',
      ],
      type: 'MCQs',
      correctAnswer: 'To add static typing to JavaScript',
    },
    {
      question: 'What is the correct way to define a function in TypeScript?',
      choices: [
        'function myFunction(x: number, y: number): number { ... }',
        'let myFunction = (x: number, y: number): number => { ... }',
        'const myFunction = function(x: number, y: number): number { ... }',
        'All of the above are correct',
      ],
      type: 'MCQs',
      correctAnswer: 'All of the above are correct',
    },
    {
      question: 'What is the purpose of the map() method in JavaScript?',
      choices: [
        'To create a new array with the results of calling a provided function on every element in the calling array',
        'To remove elements from an array',
        'To sort an array',
        'To merge two arrays',
      ],
      type: 'MCQs',
      correctAnswer:
        'To create a new array with the results of calling a provided function on every element in the calling array',
    },
    {
      question: 'What is the purpose of the filter() method in JavaScript?',
      choices: [
        'To create a new array with all elements that pass the test implemented by the provided function',
        'To sort an array',
        'To merge two arrays',
        'To remove elements from an array',
      ],
      type: 'MCQs',
      correctAnswer:
        'To create a new array with all elements that pass the test implemented by the provided function',
    },
    {
      question: 'What is the difference between let and const in JavaScript?',
      choices: [
        'let is used for mutable variables, and const is used for immutable variables',
        'let is used for immutable variables, and const is used for mutable variables',
        'There is no difference between let and const',
        'let is used for variables, and const is used for functions',
      ],
      type: 'MCQs',
      correctAnswer:
        'let is used for mutable variables, and const is used for immutable variables',
    },
    {
      question:
        'What is the purpose of the arrow function syntax (=>) in JavaScript?',
      choices: [
        'To define a regular function',
        'To define an anonymous function',
        'To define a generator function',
        'To define a class',
      ],
      type: 'MCQs',
      correctAnswer: 'To define an anonymous function',
    },
    {
      question:
        'What is the purpose of the spread operator (...) in JavaScript?',
      choices: [
        'To spread the elements of an iterable object into individual elements',
        'To merge two arrays',
        'To create a new array',
        'To sort an array',
      ],
      type: 'MCQs',
      correctAnswer:
        'To spread the elements of an iterable object into individual elements',
    },
    {
      question: 'What is the purpose of the async/await syntax in JavaScript?',
      choices: [
        'To handle asynchronous operations in a more synchronous-like manner',
        'To define a regular function',
        'To create a new array',
        'To sort an array',
      ],
      type: 'MCQs',
      correctAnswer:
        'To handle asynchronous operations in a more synchronous-like manner',
    },
    {
      question:
        'What is the purpose of the React.memo() higher-order component?',
      choices: [
        'To memoize the result of a component and prevent unnecessary re-renders',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To memoize the result of a component and prevent unnecessary re-renders',
    },
    {
      question: 'What is the purpose of the useContext hook in React?',
      choices: [
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To access and share data across the component tree without passing props manually',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To access and share data across the component tree without passing props manually',
    },
    {
      question: 'What is the purpose of the useMemo hook in React?',
      choices: [
        'To memoize the result of a function and prevent unnecessary re-calculations',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To memoize the result of a function and prevent unnecessary re-calculations',
    },
    {
      question: 'What is the purpose of the useCallback hook in React?',
      choices: [
        'To memoize a function and prevent unnecessary re-renders',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer: 'To memoize a function and prevent unnecessary re-renders',
    },
    {
      question: 'What is the purpose of the useRef hook in React?',
      choices: [
        'To create a mutable reference to a DOM element or value that persists across renders',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To create a mutable reference to a DOM element or value that persists across renders',
    },
    {
      question: 'What is the purpose of the useImperativeHandle hook in React?',
      choices: [
        'To customize the instance value exposed by the ref of a component',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To customize the instance value exposed by the ref of a component',
    },
    {
      question: 'What is the purpose of the useLayoutEffect hook in React?',
      choices: [
        'To handle side effects that need to be executed after the DOM has been updated',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To handle side effects that need to be executed after the DOM has been updated',
    },
    {
      question: 'What is the purpose of the useDebugValue hook in React?',
      choices: [
        'To label custom hooks in React DevTools',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer: 'To label custom hooks in React DevTools',
    },
    {
      question: 'What is the purpose of the useDeferredValue hook in React?',
      choices: [
        'To defer the re-rendering of non-critical updates for better performance',
        'To manage state in functional components',
        'To handle side effects and lifecycle methods',
        'To make API calls',
      ],
      type: 'MCQs',
      correctAnswer:
        'To defer the re-rendering of non-critical updates for better performance',
    },
  ],
}
