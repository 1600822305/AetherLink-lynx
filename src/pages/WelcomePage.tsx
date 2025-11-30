import { useCallback, useEffect, useState } from '@lynx-js/react'
import './WelcomePage.css'

// 欢迎页面组件
export function WelcomePage({ onStart }: { onStart?: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)

  useEffect(() => {
    // 页面加载动画
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleStart = useCallback(() => {
    'background only'
    setButtonPressed(true)
    // 模拟点击反馈
    setTimeout(() => {
      setButtonPressed(false)
      if (onStart) {
        onStart()
      }
    }, 150)
  }, [onStart])

  return (
    <view className="WelcomePage">
      {/* 背景渐变 */}
      <view className="WelcomePage__background" />
      
      {/* 内容容器 */}
      <view className={`WelcomePage__content ${mounted ? 'WelcomePage__content--visible' : ''}`}>
        
        {/* Logo 图标 */}
        <view className="WelcomePage__logo">
          <view className="WelcomePage__logoIcon">
            <text className="WelcomePage__logoText">✨</text>
          </view>
        </view>

        {/* 标题 */}
        <view className="WelcomePage__titleContainer">
          <text className="WelcomePage__title">AetherLink</text>
          <text className="WelcomePage__subtitle">智能 AI 助手</text>
        </view>

        {/* 功能特点 */}
        <view className="WelcomePage__features">
          <view className="WelcomePage__featureItem">
            <text className="WelcomePage__featureIcon">💬</text>
            <text className="WelcomePage__featureText">智能对话</text>
          </view>
          <view className="WelcomePage__featureItem">
            <text className="WelcomePage__featureIcon">🎨</text>
            <text className="WelcomePage__featureText">图片生成</text>
          </view>
          <view className="WelcomePage__featureItem">
            <text className="WelcomePage__featureIcon">🎤</text>
            <text className="WelcomePage__featureText">语音交互</text>
          </view>
        </view>

        {/* 开始按钮 */}
        <view 
          className={`WelcomePage__button ${buttonPressed ? 'WelcomePage__button--pressed' : ''}`}
          bindtap={handleStart}
        >
          <text className="WelcomePage__buttonText">开始使用</text>
          <text className="WelcomePage__buttonIcon">→</text>
        </view>

        {/* 版本信息 */}
        <text className="WelcomePage__version">Version 1.0.0 · Powered by Lynx</text>
      </view>
    </view>
  )
}

export default WelcomePage
