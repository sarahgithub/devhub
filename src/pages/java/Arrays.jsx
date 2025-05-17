// src/pages/java/Arrays.jsx
function Arrays() {
    return (
      <div>
        <h2>Java Arrays</h2>
        
        <p>
          Arrays in Java are one of the most fundamental data structures that allow us to store multiple values of the same type in a single variable. They are useful for storing and managing collections of data. Arrays in Java are objects, which makes them work differently from arrays in C/C++ in terms of memory management. 
        </p>
        
        <p>
          For primitive arrays, elements are stored in a contiguous memory location. For non-primitive arrays, references are stored at contiguous locations, but the actual objects may be at different locations in memory.
        </p>
  
        <h3>Key Features of Arrays:</h3>
        <ul>
          <li><strong>Contiguous Memory Allocation (for Primitives):</strong> Java array elements are stored in continuous memory locations, which means that the elements are placed next to each other in memory.</li>
          <li><strong>Zero-based Indexing:</strong> The first element of the array is at index 0.</li>
          <li><strong>Fixed Length:</strong> Once an array is created, its size is fixed and cannot be changed.</li>
          <li><strong>Can Store Primitives & Objects:</strong> Java arrays can hold both primitive types (like <code>int</code>, <code>char</code>, <code>boolean</code>, etc.) and objects (like <code>String</code>, <code>Integer</code>, etc.).</li>
        </ul>
      </div>
    );
  }
  
  export default Arrays;
  