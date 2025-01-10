```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Content here -->
</div>

<!-- Correct way to override background color -->
<div class="bg-red-500 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- In this scenario, bg-red-500 will be overridden by the gradient -->
</div>

<!-- Incorrect way - gradient is completely ignored -->
<div class="bg-red-500 p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-500">
  <!-- The gradient is overridden -->
</div>
```