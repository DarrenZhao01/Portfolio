// Custom cursor effects
export const initCursorEffects = () => {
  // Page cursors
  const cursor = document.getElementById("cursor");
  const cursor2 = document.getElementById("cursor2");
  const cursor3 = document.getElementById("cursor3");

  if (!cursor || !cursor2 || !cursor3) return;

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
    cursor3.style.left = e.clientX + "px";
    cursor3.style.top = e.clientY + "px";
  });

  function addHover() {
    cursor2.classList.add("hover");
    cursor3.classList.add("hover");
  }

  function removeHover() {
    cursor2.classList.remove("hover");
    cursor3.classList.remove("hover");
  }

  // Apply hover effects to all elements with hover-target class
  const applyHoverEffects = () => {
    const hoverTargets = document.querySelectorAll(".hover-target");
    
    hoverTargets.forEach(target => {
      target.addEventListener("mouseover", addHover);
      target.addEventListener("mouseout", removeHover);
    });
  };

  // Initial application
  applyHoverEffects();

  // Return cleanup function
  return () => {
    document.removeEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor2.style.left = e.clientX + "px";
      cursor2.style.top = e.clientY + "px";
      cursor3.style.left = e.clientX + "px";
      cursor3.style.top = e.clientY + "px";
    });
  };
}; 