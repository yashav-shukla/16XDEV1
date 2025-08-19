import React, { useState } from 'react';
import { Code, Filter, ChevronRight } from 'lucide-react';

const CodeArena = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filters = ['All', 'JavaScript', 'React', 'DSA', 'Full Stack'];

  const problems = [
    {
      id: 1,
      title: 'Two Sum Problem',
      category: 'DSA',
      difficulty: 'Easy',
      description: 'Find two numbers in an array that add up to a target sum.',
      solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
      tags: ['Array', 'Hash Map']
    },
    {
      id: 2,
      title: 'React Custom Hook',
      category: 'React',
      difficulty: 'Medium',
      description: 'Create a custom hook for API data fetching with loading states.',
      solution: `function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}`,
      tags: ['Hooks', 'API', 'State Management']
    },
    {
      id: 3,
      title: 'Debounce Function',
      category: 'JavaScript',
      difficulty: 'Medium',
      description: 'Implement a debounce function to limit function calls.',
      solution: `function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}`,
      tags: ['Performance', 'Optimization']
    },
    {
      id: 4,
      title: 'JWT Authentication',
      category: 'Full Stack',
      difficulty: 'Hard',
      description: 'Implement JWT-based authentication middleware.',
      solution: `const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}`,
      tags: ['Security', 'Node.js', 'Middleware']
    },
    {
      id: 5,
      title: 'Binary Search Tree',
      category: 'DSA',
      difficulty: 'Hard',
      description: 'Implement a Binary Search Tree with insert and search operations.',
      solution: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    this.root = this.insertNode(this.root, val);
  }
  
  insertNode(node, val) {
    if (!node) return new TreeNode(val);
    
    if (val < node.val) {
      node.left = this.insertNode(node.left, val);
    } else {
      node.right = this.insertNode(node.right, val);
    }
    
    return node;
  }
}`,
      tags: ['Tree', 'Recursion', 'Data Structure']
    },
    {
      id: 6,
      title: 'React Context Provider',
      category: 'React',
      difficulty: 'Medium',
      description: 'Create a theme context provider with dark/light mode.',
      solution: `const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`,
      tags: ['Context', 'State Management', 'Theme']
    }
  ];

  const filteredProblems = activeFilter === 'All' 
    ? problems 
    : problems.filter(problem => problem.category === activeFilter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="code-arena" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Code <span className="text-red-500">Arena</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my coding solutions and problem-solving approach. Each card reveals 
            optimized solutions with detailed explanations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProblems.map((problem, index) => (
            <div
              key={problem.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(problem.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Front */}
              <div className={`p-6 transition-all duration-500 ${
                hoveredCard === problem.id ? 'opacity-0 absolute inset-0' : 'opacity-100'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {problem.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-red-400 font-semibold">
                  <span>View Solution</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card Back - Solution */}
              <div className={`p-6 transition-all duration-500 ${
                hoveredCard === problem.id ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}>
                <h4 className="text-lg font-bold text-red-400 mb-4">Solution:</h4>
                <div className="bg-black/50 rounded-lg p-4 overflow-hidden">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{problem.solution}</code>
                  </pre>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeArena;