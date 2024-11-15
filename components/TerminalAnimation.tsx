"use client";

import { useEffect, useState } from 'react';

const commands = [
  { text: '> whoami', delay: 1000 },
  { text: 'WGET - Votre Partenaire Digital', delay: 2000 },
  { text: '> experience.show()', delay: 3000 },
  { text: '✓ 20+ années d\'expertise', delay: 3500 },
  { text: '✓ 5000+ clients satisfaits', delay: 4000 },
  { text: '✓ 99.9% de disponibilité', delay: 4500 },
  { text: '> services.list()', delay: 5500 },
  { text: '└── Hébergement Web', delay: 6000 },
  { text: '└── Noms de Domaine', delay: 6500 },
  { text: '└── Solutions Cloud', delay: 7000 },
  { text: '└── Support 24/7', delay: 7500 },
];

const TerminalAnimation = () => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    let mounted = true;

    const runAnimation = () => {
      commands.forEach((command, index) => {
        const timeout = setTimeout(() => {
          if (mounted) {
            setDisplayedCommands(prev => [...prev, command.text]);
          }
        }, command.delay);
        timeouts.push(timeout);
      });

      // Reset animation after all commands are displayed
      const resetTimeout = setTimeout(() => {
        if (mounted) {
          setDisplayedCommands([]);
          runAnimation();
        }
      }, commands[commands.length - 1].delay + 3000);
      timeouts.push(resetTimeout);
    };

    runAnimation();

    return () => {
      mounted = false;
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm md:text-base w-full h-[400px] overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-green-400">
        {displayedCommands.map((command, index) => (
          <div key={index} className="mb-2">
            {command.startsWith('>') ? (
              <span className="text-blue-400">{command}</span>
            ) : command.startsWith('✓') ? (
              <span className="text-green-500">{command}</span>
            ) : command.startsWith('└') ? (
              <span className="text-yellow-400">{command}</span>
            ) : (
              <span className="text-gray-300">{command}</span>
            )}
          </div>
        ))}
        <span className="animate-pulse">▊</span>
      </div>
    </div>
  );
};

export default TerminalAnimation;