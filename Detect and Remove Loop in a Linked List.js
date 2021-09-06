/*Detect and Remove Loop in a Linked List


Write a function detectAndRemoveLoop() that checks whether a given Linked List 
contains loop and if loop is present then removes the loop and returns true. If the list doesn’t 
contain loop then it returns false. Below diagram shows a linked list with a loop. 
detectAndRemoveLoop() must change the below list to 1->2->3->4->5->NULL.
*/

<script>
  
  // Javascript program to detect and
  // remove loop in linked list
  var head;
    
  class Node 
  {
      constructor(val)
      {
          this.data = val;
          this.next = null;
      }
  }
    
  // Function that detects loop in the list
  function detectAndRemoveLoop(node)
  {
      var slow = node, fast = node;
      while (slow != null && 
             fast != null && 
             fast.next != null) 
      {
          slow = slow.next;
          fast = fast.next.next;
    
          // If slow and fast meet at same 
          // point then loop is present
          if (slow == fast) 
          {
              removeLoop(slow, node);
              return 1;
          }
      }
      return 0;
  }
    
  // Function to remove loop
  function removeLoop(loop, head)
  {
      var ptr1 = loop;
      var ptr2 = loop;
    
      // Count the number of nodes in loop
      var k = 1, i;
        
      while (ptr1.next != ptr2) 
      {
          ptr1 = ptr1.next;
          k++;
      }
    
      // Fix one pointer to head
      ptr1 = head;
    
      // And the other pointer to 
      // k nodes after head
      ptr2 = head;
      for(i = 0; i < k; i++)
      {
          ptr2 = ptr2.next;
      }
    
      /*  Move both pointers at the same pace,
       they will meet at loop starting node */
      while (ptr2 != ptr1)
      {
          ptr1 = ptr1.next;
          ptr2 = ptr2.next;
      }
    
      // Get pointer to the last node
      while (ptr2.next != ptr1) 
      {
          ptr2 = ptr2.next;
      }
    
      /* Set the next node of the loop ending node
       to fix the loop */
      ptr2.next = null;
  }
    
  // Function to prvar the linked list
  function printList(node)
  {
      while (node != null) 
      {
          document.write(node.data + " ");
          node = node.next;
      }
  }
    
  // Driver code
  head = new Node(50);
  head.next = new Node(20);
  head.next.next = new Node(15);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(10);
    
  // Creating a loop for testing
  head.next.next.next.next.next = head.next.next;
  detectAndRemoveLoop(head);
  document.write("Linked List after removing loop : ");
  printList(head);
    
 
    
  </script>