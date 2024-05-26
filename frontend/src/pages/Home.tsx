import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/constants";
import { pad } from "../game/padding";
import { useNavigate } from "react-router-dom";
import { Simulate } from "../components/Simulate";
import { Button } from "@/components/ui/button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
        <div className="flex mx-16 flex-col justify-center pb-10 ">
        <h1 className="text-6xl font-bold">Welcome to Plinko!</h1>
         <h3 className="mt-4 text-xl mb-4">
            Plinko lets you drop a ball from top of a pyramid and multiplies your money according to the multiplier you ball hits.
        </h3>
        <Button className="bg-green-600 hover:bg-green-900" onClick={() => navigate("/play")}>
        Play Plinko
         </Button>
        </div>
      </div>
    </div>
  );
}