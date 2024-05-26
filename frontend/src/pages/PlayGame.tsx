import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { MULTIPLIERS } from '../game/constants';

export function PlayGame() {
    const baseURL: string|undefined = import.meta.env.VITE_SERVER_URL;
    const [ballManager, setBallManager] = useState<BallManager>();
    const [totalMoney, setTotalMoney] = useState<number>(1000);
    const canvasRef = useRef<any>();


    useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement,
        (index: number) => {
            setTotalMoney((totalMoney) => {
              return totalMoney + (10*MULTIPLIERS[index]);
            });
          }
      );
      setBallManager(ballManager);
    }
    }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <div className="flex flex-col items-center justify-center">
        <div>Current Balance: {totalMoney}</div>
        <Button
        className="px-10 mb-4 bg-green-600 hover:bg-green-900"
        onClick={async () => {
          const response = await axios.post(`${baseURL}/playgame`, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
            setTotalMoney((totalMoney)=>totalMoney-10);
          }
        }}
      >
        Add ball
      </Button>
      </div>
    </div>
  );
}