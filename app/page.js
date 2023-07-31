import Header from './Components/Header'
import Hero from './Components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[90px]">
      <div className='w-[1262px] h-[833px] border rounded-[20px] flex items-center justify-between'>
        <div className="w-[1216px] h-[781px] bg-PrimaryCream rounded-[20px] m-[20px]">
          <Header></Header>
          <Hero></Hero>
        </div>
      </div>
    </main>
  )
}
