import { useCallback, useState } from '@lynx-js/react'
import './ChatPage.css'

// 消息类型
interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: number
}

// 快捷消息选项
const quickMessages = [
  '你好，请介绍一下自己',
  '今天天气怎么样？',
  '给我讲个笑话',
  '帮我写一首诗',
]

// 聊天页面组件
export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // 发送消息
  const handleSendMessage = useCallback((content: string) => {
    'background only'
    if (isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: Date.now(),
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // 模拟 AI 回复
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `收到您的消息: "${content}"\n\n这是 AetherLink 的 AI 回复。\n\n完整的 AI 功能正在开发中，敬请期待！🚀`,
        role: 'assistant',
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }, [isLoading])

  return (
    <view className="ChatPage">
      {/* 头部 */}
      <view className="ChatPage__header">
        <text className="ChatPage__headerTitle">AetherLink</text>
        <text className="ChatPage__headerSubtitle">AI 对话</text>
      </view>

      {/* 消息列表 */}
      <view className="ChatPage__messages">
        {messages.length === 0 ? (
          <view className="ChatPage__empty">
            <text className="ChatPage__emptyIcon">💬</text>
            <text className="ChatPage__emptyText">开始与 AI 对话</text>
            <text className="ChatPage__emptyHint">点击下方快捷消息开始聊天</text>
          </view>
        ) : (
          messages.map(msg => (
            <view 
              key={msg.id} 
              className={`ChatPage__message ChatPage__message--${msg.role}`}
            >
              <text className="ChatPage__messageContent">{msg.content}</text>
            </view>
          ))
        )}
        
        {isLoading && (
          <view className="ChatPage__message ChatPage__message--assistant">
            <text className="ChatPage__messageContent ChatPage__messageContent--loading">
              AI 正在思考...
            </text>
          </view>
        )}
      </view>

      {/* 快捷消息区域 */}
      <view className="ChatPage__quickMessages">
        <text className="ChatPage__quickMessagesTitle">快捷消息</text>
        <view className="ChatPage__quickMessagesList">
          {quickMessages.map((msg, index) => (
            <view 
              key={index}
              className="ChatPage__quickMessageItem"
              bindtap={() => handleSendMessage(msg)}
            >
              <text className="ChatPage__quickMessageText">{msg}</text>
            </view>
          ))}
        </view>
      </view>
    </view>
  )
}

export default ChatPage
