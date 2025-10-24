import { CardFaqs } from "./components/card-faqs/card-faqs"
import Background from '/images/bg-abstract.jpg'

function App() {
  return (
    <main className="bg-[#F9EEFF] flex items-center justify-center w-full min-h-screen mx-auto">
      <img src={Background} alt="" className="w-full object-cover absolute h-[20em] sm:h-[28] top-0" />
      <div className="flex z-10">
       <CardFaqs/>
      </div>
    </main>
  )
}

export default App
