
'use client'

import { useState } from "react";
import TestDrop from "../components/testDrop.jsx";
import PhaseBucket from "../components/phaseBucket.jsx";

export default function Home() {

  const [dragging, setDragging] = useState();
  const phases = ["build", "test", "deploy"];
  const [tests, setTests] = useState([
    { id: 1, phase: phases[0], name: "package"},
    { id: 2, phase: phases[0], name: "build-dev"},
    { id: 3, phase: phases[1], name: "unittest"},
    { id: 4, phase: phases[1], name: "green software test"},
    { id: 5, phase: phases[2], name: "deploy"},
  ]);

  const handleDragStart = (e) => {
    setDragging(e.target);
  };
  const handleDragEnter = (e, phase) => {
    setTests([...tests, (tests[dragging.id - 1].phase = phase)]);
  }

  return (

    <div className="flex flex-col">
      <section className="flex flex-col">
        {phases.map((phase) => (
          <PhaseBucket
            key={phase}
            phaseName={phase} 
            tests={tests
                    .filter((test) => test.phase === phase)
                    .map((item) => (
                      <div draggable
                            onDragStart={(e) => handleDragStart(e)}
                            id={item.id}>
                        <TestDrop testName={item.name}/>
                      </div>
                    ))
                  }
            onDragEnter={(e) => handleDragEnter(e, phase)}
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
