import React from 'react';
import { CalendarIcon } from "lucide-react";
import './App.css';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <h1 className="text-xl font-semibold">宝玉的分享</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                博客
              </a>
            </li>
            <li>
              <a href="/translations" className="text-gray-600 hover:text-gray-900">
                翻译
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 className="text-4xl font-bold mb-4">博客1</h2>
        <p className="text-gray-600 mb-8">个人原创博客日志。</p>
        <div className="space-y-8">
          <article>
            <h3 className="text-2xl font-semibold mb-2">
              GPT 无法翻译超长内容的提示词优化尝试
            </h3>
            <p className="text-gray-600 mb-2">
              最近科技文章翻译 GPT https://chatgpt.com/g/g-uBhKUJJTI-ke-ji-wen-zhang-fan-yi 一直有用户反馈内容长了就不翻译，变成摘要了，这是由于内容一长，GPT-4o "变懒"了，于是不翻译完整内容，只是摘要。
            </p>
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <time>October 9, 2024</time>
            </div>
          </article>
          <article>
            <h3 className="text-2xl font-semibold mb-2">
              What You Need Is Not an AI Agent, But an AI-Friendly Workflow
            </h3>
            <p className="text-gray-600 mb-2">
              The concept of AI agents is gaining popularity, and some people see them as a silver bullet for solving
              various problems. The hype around AI agents suggests that if you have one, many challenges can be easily
              overcome.
            </p>
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <time>October 8, 2024</time>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
