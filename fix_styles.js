// Simple script to modify the styles in index.tsx
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'mobile', 'app', '(tabs)', 'index.tsx');

try {
  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find and replace the titleContainer style
  // This uses regex to find the titleContainer style object and modify it
  const styleRegex = /titleContainer:\s*{[^}]*}/;
  const newStyle = `titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: 20
    // Removed justifyContent: 'center'
    // Removed flex: 1
    // Removed overflow: 'scroll'
  }`;
  
  content = content.replace(styleRegex, newStyle);
  
  // Write back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('Successfully updated styles in index.tsx');
} catch (error) {
  console.error('Error updating styles:', error);
}
