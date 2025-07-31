import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MainScene from '../phaser/MainScene'; // Adjust the import path as necessary

const Play = () => {

  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(()=>{
    if(containerRef.current && !gameRef.current) {
      const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: containerRef.current,
        scene: [MainScene],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 500},
            debug: false
          }
        }
      }
      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if(gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    }
  })

  return (
    <div ref={containerRef} style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
      
    </div>
  )
}

export default Play
