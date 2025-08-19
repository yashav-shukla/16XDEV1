import React, { useState } from 'react';
import { Play, Code, Zap, ChevronRight } from 'lucide-react';

const CodeLabs = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const challenges = [
    {
      id: 1,
      title: 'Array Manipulation',
      description: 'Create a function that finds the maximum sum of any contiguous subarray.',
      starterCode: `function maxSubarraySum(arr) {
  // Your code here
  // Hint: Use Kadane's algorithm
  
  return 0;
}

// Test your function
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6`,
      solution: `function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}`,
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'React Hook Challenge',
      description: 'Build a custom hook for managing local storage with automatic JSON parsing.',
      starterCode: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Your implementation here
  
  return [value, setValue];
}

// Usage example:
// const [user, setUser] = useLocalStorage('user', { name: '', email: '' });`,
      solution: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
      difficulty: 'Easy'
    },
    {
      id: 3,
      title: 'Async Data Fetcher',
      description: 'Create a robust API client with retry logic and error handling.',
      starterCode: `class ApiClient {
  constructor(baseURL, maxRetries = 3) {
    this.baseURL = baseURL;
    this.maxRetries = maxRetries;
  }
  
  async get(endpoint) {
    // Implement GET request with retry logic
  }
  
  async post(endpoint, data) {
    // Implement POST request with retry logic
  }
}

// Test your implementation
const client = new ApiClient('https://jsonplaceholder.typicode.com');
client.get('/posts/1').then(console.log);`,
      solution: `class ApiClient {
  constructor(baseURL, maxRetries = 3) {
    this.baseURL = baseURL;
    this.maxRetries = maxRetries;
  }
  
  async request(endpoint, options = {}, retryCount = 0) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        headers: { 'Content-Type': 'application/json' },
        ...options
      });
      
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      return await response.json();
    } catch (error) {
      if (retryCount < this.maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
        return this.request(endpoint, options, retryCount + 1);
      }
      throw error;
    }
  }
  
  async get(endpoint) {
    return this.request(endpoint);
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}`,
      difficulty: 'Hard'
    },
    {
      id: 4,
      title: 'DOM Manipulation',
      description: 'Create a smooth carousel component with touch support.',
      starterCode: `class TouchCarousel {
  constructor(container, options = {}) {
    this.container = container;
    this.currentIndex = 0;
    this.items = container.children;
    
    // Initialize your carousel
    this.init();
  }
  
  init() {
    // Setup event listeners and initial state
  }
  
  next() {
    // Move to next slide
  }
  
  prev() {
    // Move to previous slide
  }
}

// Usage:
// const carousel = new TouchCarousel(document.querySelector('.carousel'));`,
      solution: `class TouchCarousel {
  constructor(container, options = {}) {
    this.container = container;
    this.currentIndex = 0;
    this.items = Array.from(container.children);
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    
    this.init();
  }
  
  init() {
    this.container.style.display = 'flex';
    this.container.style.transition = 'transform 0.3s ease';
    
    // Touch events
    this.container.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.container.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.container.addEventListener('touchend', this.handleTouchEnd.bind(this));
    
    this.updatePosition();
  }
  
  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
    this.container.style.transition = 'none';
  }
  
  handleTouchMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
    const diffX = this.currentX - this.startX;
    const translateX = -this.currentIndex * 100 + (diffX / this.container.offsetWidth) * 100;
    this.container.style.transform = \`translateX(\${translateX}%)\`;
  }
  
  handleTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.container.style.transition = 'transform 0.3s ease';
    
    const diffX = this.currentX - this.startX;
    const threshold = this.container.offsetWidth * 0.2;
    
    if (diffX > threshold && this.currentIndex > 0) {
      this.prev();
    } else if (diffX < -threshold && this.currentIndex < this.items.length - 1) {
      this.next();
    } else {
      this.updatePosition();
    }
  }
  
  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.updatePosition();
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePosition();
    }
  }
  
  updatePosition() {
    const translateX = -this.currentIndex * 100;
    this.container.style.transform = \`translateX(\${translateX}%)\`;
  }
}`,
      difficulty: 'Hard'
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description: 'Implement a memoization function with LRU cache eviction.',
      starterCode: `function memoizeWithLRU(fn, maxSize = 10) {
  // Implement LRU memoization
  // Should cache function results and evict least recently used items
  
  return function(...args) {
    // Your implementation here
  };
}

// Test function
const expensiveFunction = (n) => {
  console.log(\`Computing for \${n}\`);
  return n * n * n;
};

const memoized = memoizeWithLRU(expensiveFunction, 3);
console.log(memoized(2)); // Computing for 2, returns 8
console.log(memoized(2)); // Returns 8 (cached)`,
      solution: `function memoizeWithLRU(fn, maxSize = 10) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      // Move to end (most recently used)
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }
    
    const result = fn.apply(this, args);
    
    if (cache.size >= maxSize) {
      // Remove least recently used (first item)
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    
    cache.set(key, result);
    return result;
  };
}`,
      difficulty: 'Medium'
    }
  ];

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Create a safe execution environment
        const logs = [];
        const mockConsole = {
          log: (...args) => logs.push(args.join(' '))
        };
        
        // Simple evaluation for demo purposes
        const code = userCode || challenges[activeChallenge].starterCode;
        const wrappedCode = `
          (function() {
            const console = arguments[0];
            ${code}
          })(mockConsole);
        `;
        
        eval(wrappedCode);
        setOutput(logs.join('\n') || 'Code executed successfully!');
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 1000);
  };

  const showSolution = () => {
    setUserCode(challenges[activeChallenge].solution);
  };

  const resetCode = () => {
    setUserCode(challenges[activeChallenge].starterCode);
    setOutput('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="code-labs" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Code <span className="text-red-500">Labs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive coding playground where you can experiment, learn, and test your skills. 
            Try the challenges or write your own code!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Challenge Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-red-500 mr-2" />
              Challenges
            </h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div
                  key={challenge.id}
                  onClick={() => {
                    setActiveChallenge(index);
                    setUserCode(challenge.starterCode);
                    setOutput('');
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeChallenge === index
                      ? 'bg-red-500/20 border-red-500/50 text-white'
                      : 'bg-white/5 border-red-500/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold">{challenge.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <p className="text-sm opacity-80 line-clamp-2">
                    {challenge.description}
                  </p>
                  {activeChallenge === index && (
                    <div className="flex items-center mt-3 text-red-400">
                      <span className="text-sm font-semibold">Active</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor & Output */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden">
              {/* Challenge Info */}
              <div className="p-6 border-b border-red-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {challenges[activeChallenge].title}
                    </h3>
                    <p className="text-gray-400">
                      {challenges[activeChallenge].description}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(challenges[activeChallenge].difficulty)}`}>
                    {challenges[activeChallenge].difficulty}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    <Play className="w-4 h-4" />
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                  
                  <button
                    onClick={showSolution}
                    className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    <span>Show Solution</span>
                  </button>
                  
                  <button
                    onClick={resetCode}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="grid md:grid-cols-2 h-96">
                <div className="border-r border-red-500/20">
                  <div className="p-4 border-b border-red-500/20 bg-black/20">
                    <h4 className="text-white font-semibold">Code Editor</h4>
                  </div>
                  <textarea
                    value={userCode || challenges[activeChallenge].starterCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-full p-4 bg-black/40 text-gray-300 font-mono text-sm resize-none focus:outline-none"
                    placeholder="Write your code here..."
                    spellCheck={false}
                  />
                </div>

                {/* Output */}
                <div>
                  <div className="p-4 border-b border-red-500/20 bg-black/20">
                    <h4 className="text-white font-semibold">Output</h4>
                  </div>
                  <div className="p-4 h-full bg-black/40 overflow-y-auto">
                    <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                      {output || 'Click "Run Code" to see output...'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeLabs;