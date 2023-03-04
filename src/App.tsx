import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { getImage } from './api'
import { Account } from './components'

export function App() {
  const { isConnected } = useAccount()
  // const res = getImage({ prompt: 'A chinese girl'})
  let content1 = { url: '' }
  let content2 = { url: '' }
  const [imageRes,setImageRes] = useState('')

  const res2 = () => {
    getImage({ prompt: 'A chinese girl'}).then(item => {
      setImageRes(item?.url || '')
    })
    // console.log('content2', content2)
    return
  }
  return (
    <>
      <h1>wagmi + RainbowKit + Vite</h1>

      <ConnectButton />
      {isConnected && <Account />}
      <button onClick={res2}>获取图片2</button>
      <img src={imageRes} />
    </>
  )
}
