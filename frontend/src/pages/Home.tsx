import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/constants";
import { pad } from "../game/padding";
import { useNavigate } from "react-router-dom";
import { Simulate } from "../components/Simulate";
import { Button } from "@/components/ui/button";

export function Home() {
  const navigate = useNavigate();

  const canvasRef = useRef<any>();
  let [outputs, setOutputs] = useState<{ [key: number]: number[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
  });

  async function simulate(ballManager: BallManager) {
    let i = 0;
    while (1) {
      i++;
      ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement,
        (index: number, startX?: number) => {
          setOutputs((outputs: any) => {
            return {
              ...outputs,
              [index]: [...(outputs[index] as number[]), startX],
            };
          });
        }
      );
      simulate(ballManager);

      return () => {
        ballManager.stop();
      };
    }
  }, [canvasRef]);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
        <div className="flex mx-16 flex-col justify-center pb-10 ">
        <h1 className="text-6xl font-bold">Welcome to Plinko!</h1>
         <h3 className="mt-4 text-xl mb-4">
            Plinko lets you drop a ball from top of a pyramid and multiplies your money according to the multiplier you ball hits.
        </h3>
        <Button className="bg-green-600 hover:bg-green-900" onClick={() => navigate("/game")}>
        Play Plinko
         </Button>
        </div>
      </div>
    </div>
  );
}