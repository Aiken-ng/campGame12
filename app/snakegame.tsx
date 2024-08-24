// src/SnakeGame.tsx
import React, { useState, useEffect } from 'react';
import './SnakeGame.css';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface Position {
    x: number;
    y: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 8, y: 8 }];
const INITIAL_FOOD: Position = { x: 12, y: 12 };

const SnakeGame: React.FC = () => {
    const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
    const [food, setFood] = useState<Position>(INITIAL_FOOD);
    const [direction, setDirection] = useState<Direction>('RIGHT');
    const [gameOver, setGameOver] = useState<boolean>(false);
    
    // Track touch start and end positions
    const [touchStart, setTouchStart] = useState<Position | null>(null);

    // Handle key down for desktop controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction]);

    // Handle touch start and end events
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0 && direction !== 'LEFT') {
                setDirection('RIGHT');
            } else if (deltaX < 0 && direction !== 'RIGHT') {
                setDirection('LEFT');
            }
        } else {
            // Vertical swipe
            if (deltaY > 0 && direction !== 'UP') {
                setDirection('DOWN');
            } else if (deltaY < 0 && direction !== 'DOWN') {
                setDirection('UP');
            }
        }
        
        setTouchStart(null);
    };

    useEffect(() => {
        if (gameOver) return;

        const moveSnake = () => {
            const newSnake = [...snake];
            const head = { ...newSnake[0] };

            switch (direction) {
                case 'UP':
                    head.y -= 1;
                    break;
                case 'DOWN':
                    head.y += 1;
                    break;
                case 'LEFT':
                    head.x -= 1;
                    break;
                case 'RIGHT':
                    head.x += 1;
                    break;
            }

            newSnake.unshift(head);
            if (head.x === food.x && head.y === food.y) {
                setFood({
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE),
                });
            } else {
                newSnake.pop();
            }

            if (
                head.x < 0 ||
                head.x >= GRID_SIZE ||
                head.y < 0 ||
                head.y >= GRID_SIZE ||
                newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
            ) {
                setGameOver(true);
            } else {
                setSnake(newSnake);
            }
        };

        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction, food, gameOver]);

    const restartGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood(INITIAL_FOOD);
        setDirection('RIGHT');
        setGameOver(false);
    };

    return (
        <div className="snake-game" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="grid">
                {Array.from({ length: GRID_SIZE }).map((_, row) => (
                    <div key={row} className="row">
                        {Array.from({ length: GRID_SIZE }).map((_, col) => (
                            <div
                                key={col}
                                className={`cell ${
                                    snake.some(segment => segment.x === col && segment.y === row)
                                        ? 'snake'
                                        : food.x === col && food.y === row
                                        ? 'food'
                                        : ''
                                }`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {gameOver && (
                <div className="game-over">
                    <p>Game Over!</p>
                    <button onClick={restartGame}>Restart</button>
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
    );
};

export default SnakeGame;
