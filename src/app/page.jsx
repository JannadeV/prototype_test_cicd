
'use client'

import { useState } from "react";
import PhaseBucket from "../components/phaseBucket.jsx";

export default function Home() {

  const phases = ["build", "test", "deploy"];
  const [tests, settests] = useState([
    { id: 1, phase: phases[0], name: "package"},
    { id: 2, phase: phases[0], name: "build-dev"},
    { id: 3, phase: phases[1], name: "unittest"},
    { id: 4, phase: phases[1], name: "green software test"},
    { id: 5, phase: phases[2], name: "deploy"},
  ]);

  return (

    <div className="flex flex-col">
      <section className="flex flex-row">
        {phases.map((phase) => (
          <PhaseBucket
            key={phase}
            phaseName={phase} 
            tests={tests
                    .filter((test) => test.phase === phase)
                  }
          />
        ))}
      </section>
      {/*<section className="flex flex-row">
        <TestDrop 
          testName={ 'default Test' } />
      </section>*/}
    </div>

  );
}
