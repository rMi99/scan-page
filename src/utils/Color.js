const isLight = (hexcolor, ignoredColors = []) => {
  // Check if the hex color is in the ignored colors list
  if(hexcolor){
    if (ignoredColors.includes(hexcolor)) {
      return false;
    }
  
    // Convert hex color to RGB values
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
  
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Return true if color is light, false otherwise
    return brightness > 128;
  }
};

export { isLight };
