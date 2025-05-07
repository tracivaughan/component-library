document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(function(codeBlock, index) {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.setAttribute('data-index', index);
    
    // Insert button before code block
    codeBlock.parentNode.insertBefore(copyButton, codeBlock);
    
    // Position the button in the top-right corner of the code block
    const positionButton = function() {
      const rect = codeBlock.getBoundingClientRect();
      copyButton.style.position = 'relative';
      copyButton.style.top = '10px';
      copyButton.style.right = '10px';
      codeBlock.style.position = 'relative';
      codeBlock.parentNode.insertBefore(copyButton, codeBlock);
      codeBlock.appendChild(copyButton);
    };
    
    positionButton();
    
    // Handle click event
    copyButton.addEventListener('click', function() {
      // Get the text content
      const code = codeBlock.querySelector('code') ? 
                  codeBlock.querySelector('code').textContent : 
                  codeBlock.textContent;
      
      // Create a temporary textarea element to copy from
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      
      // Select and copy
      textarea.select();
      document.execCommand('copy');
      
      // Clean up
      document.body.removeChild(textarea);
      
      // Provide user feedback
      copyButton.textContent = 'Copied!';
      setTimeout(function() {
        copyButton.textContent = 'Copy';
      }, 2000);
    });
  });
});
