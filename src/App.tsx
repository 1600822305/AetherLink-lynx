import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import { WelcomePage } from './pages/WelcomePage'
import { ChatPage } from './pages/ChatPage'

// 页面枚举
type PageType = 'welcome' | 'chat'

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('welcome')

  useEffect(() => {
    console.info('Hello, AetherLink on Lynx!')
  }, [])

  // 处理欢迎页面的开始按钮
  const handleStart = useCallback(() => {
    'background only'
    setCurrentPage('chat')
  }, [])

  // 渲染当前页面
  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onStart={handleStart} />
      case 'chat':
        return <ChatPage />
      default:
        return <WelcomePage onStart={handleStart} />
    }
  }

  return (
    <view className="AppContainer">
      {renderPage()}
    </view>
  )
}
