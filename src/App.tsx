import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { getImage, getImageFunc } from './api'
import { Account } from './components'

export function App() {
  const { isConnected } = useAccount()
  // const res = getImage({ prompt: 'A chinese girl'})
  let content1 = { url: '' }
  let content2 = { url: '' }
  const res1 = () => {
    getImageFunc({ prompt: 'A chinese girl'}).then((item: any) => {
      content1 = item[0]
    })
    return
  }
  const res2 = () => {
    getImage({ prompt: 'A chinese girl'}).then(item => {
      content2 = item[0]
    })
    // console.log('content2', content2)
    return
  }
  return (
    <>
      <h1>wagmi + RainbowKit + Vite</h1>

      <ConnectButton />
      {isConnected && <Account />}
      <button onClick={res1}>获取图片1</button>
      <button onClick={res2}>获取图片2</button>
    </>
  )
}
