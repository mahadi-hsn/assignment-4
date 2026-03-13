Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
-> getELementById is used to get any html element (like section , div , p) by their unique Id.

-> getELementByClassName is used to get any html element (like section , div , p) by their class name.
Here we use either index number of corresponding classes (if the classes have same name) or we use loop to access the element and it returns html collection.

-> querySelector is also a technique to accessing the html elements by using CSS selector but it returns the first matching element.

-> querySelectorAll works same like a querySelector but it returns all the matching elements by providing a nodeList. We can access those elements using loop.

-------------------------------------------------------------------------------------------------------------------------

Question-2: How do you create and insert a new element into the DOM?

Answer:
-> We can create a new element using createElement() method. For instance: const div = document.createElement('div'). By writing this line, we create a div using JS. 
-> Then we can put some content into newly created div. For example: div.innerText = 'Hello World'
-> Now we will append this element into any html element. For example: document.body.appendChild(div).

-------------------------------------------------------------------------------------------------------------------------

Question-:3 What is Event Bubbling? And how does it work?

Answer: 
-> Event bubbling is a behavior in DOM event system where event happens on a specific element. 
-> First, it triggers on that element where we clicked (called target element), then it bubbles up from the target element to its parents and by doing so it reaches to the root element.

----------How it works----------
-> When a user performs an action (such as clicking a button), the browser creates an event.
-> This event is first handled by the target element where the action occurred.
-> After that, the event automatically moves up through the element's parent node.

-------------------------------------------------------------------------------------------------------------------------

Question-4: What is Event Delegation in JavaScript? Why is it useful?

Answer: 
-> Event Delegation is a technique in JavaScript where instead of attaching event listeners to many individual elements, you attach one event listener to a common parent element and handle events for its child elements using event bubbling.

-------Why Event Delegation Is Useful--------
-> First, it improves performance. Instead of creating many event listeners for multiple elements, you use only one listener on a parent element. This reduces memory usage and makes the code more efficient.
-> Second, it works well with dynamically created elements. If new child elements are added to the DOM later, they will automatically work with the same parent event listener without needing additional code.
-> Third, it simplifies code management. Handling events in one place makes the code cleaner and easier to maintain.

-------------------------------------------------------------------------------------------------------------------------

Question-5: What is the difference between preventDefault() and stopPropagation() methods?

Answer:
-> preventDefault() method is used to prevent default behavior of the browser. For example: form submission control, link navigation control etc.

-> stopPropagation() is used to prevent event bubbling and propagation form child element to parent element.