import React, { useState } from 'react';

type Memory = number[];

interface CPUProps {
  program: string[];
}

const CPU: React.FC<CPUProps> = ({ program }) => {
  const [registerA, setRegisterA] = useState<number>(0);
  const [memory, setMemory] = useState<Memory>(new Array(256).fill(0));
  const [pointer, setPointer] = useState<number>(0);

  const executeProgram = () => {
    program.forEach(instruction => {
      const [opcode, operand] = instruction.split(' ');

      switch (opcode) {
        case 'LOAD':
          setRegisterA(memory[parseInt(operand, 10)]);
          break;
        case 'STORE':
          const newMemory = [...memory];
          newMemory[pointer] = registerA;
          setMemory(newMemory);
          break;
        case 'ADD':
          setRegisterA(registerA + memory[parseInt(operand, 10)]);
          break;
        case 'SUB':
          setRegisterA(registerA - memory[parseInt(operand, 10)]);
          break;
        case 'JUMP':
          setPointer(parseInt(operand, 10));
          break;
        default:
          console.error(`Unknown opcode: ${opcode}`);
      }
    });
  };

  return (
    <div>
      <button onClick={executeProgram}>Execute Program</button>
      <p>Register A: {registerA}</p>
      <p>Memory Pointer: {pointer}</p>
    </div>
  );
};

export default CPU;