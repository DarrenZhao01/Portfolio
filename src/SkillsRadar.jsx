import React, { useEffect, useRef, useState } from 'react';

function SkillsRadar() {
  const canvasRef = useRef(null);
  const [currentSkill, setCurrentSkill] = useState('');
  const [showSkill, setShowSkill] = useState(false);
  
  const skills = ['HTML', 'CSS', 'React', 'Git', 'Python', 'SQLite3', 'JS', 'TailwindCSS', 'Vite','AI', 'Data Structures', 'Algorithms'];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    let time = 0;
    let lastTime = 0;
    let skillIndex = 0;
    let lastSkillChange = 0;
    
    // Create dots in concentric rings (from the pulse wave code)
    const dotRings = [
      { radius: 15, count: 6 },
      { radius: 30, count: 12 },
      { radius: 45, count: 18 },
      { radius: 60, count: 24 },
      { radius: 75, count: 30 }
    ];

    function animate(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      time += deltaTime * 0.001;
      
      // Change skill every 2 seconds with radar sweep effect
      if (time - lastSkillChange > 2) {
        setCurrentSkill(skills[skillIndex]);
        setShowSkill(true);
        skillIndex = (skillIndex + 1) % skills.length;
        lastSkillChange = time;
        
        // Hide skill after 1.5 seconds
        setTimeout(() => setShowSkill(false), 1500);
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw center dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();
      

      
      // Draw dots in concentric circles with wave effect (from original pulse wave)
      dotRings.forEach((ring, ringIndex) => {
        for (let i = 0; i < ring.count; i++) {
          const angle = (i / ring.count) * Math.PI * 2;
          
          // Calculate position with pulsing radius
          const radiusPulse = Math.sin(time * 2 - ringIndex * 0.4) * 3;
          const x = centerX + Math.cos(angle) * (ring.radius + radiusPulse);
          const y = centerY + Math.sin(angle) * (ring.radius + radiusPulse);
          
          // Calculate opacity with wave effect
          const opacityWave = 0.3 + Math.sin(time * 2 - ringIndex * 0.4 + i * 0.2) * 0.4;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacityWave})`;
          ctx.fill();
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Radar Canvas */}
      <canvas
        ref={canvasRef}
        width={160}
        height={160}
        className="block"
      />
      
      {/* Skill Popup */}
      {showSkill && currentSkill && (
        <div 
          className="absolute top-1/2 left-1/2 bg-green-500 text-black px-3 py-1 rounded-lg font-semibold text-sm shadow-lg shadow-green-500/50"
          style={{
            animation: 'skillPop 1.5s ease-out'
          }}
        >
          {currentSkill}
        </div>
      )}
    </div>
  );
}

export default SkillsRadar; 