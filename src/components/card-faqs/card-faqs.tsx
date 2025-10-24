import { useState } from "react"
import { DisableState, EnableState } from "../heroicons"
import { QuestionsArray } from "../questions-array/question-array"
import Logo from "/images/logo.png"

export const CardFaqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleOpenIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="rounded-2xl sm:w-[35em] sm:mx-0 mx-5 bg-white p-9 sm:h-auto h-[80vh] overflow-auto">
            <div className="flex justify-start items-center mb-7 gap-5">
                <img src={Logo} alt="Logo de estrella" className="sm:size-20 size-12" />
                <h1 className="sm:text-6xl text-4xl font-bold text-[#2A0C2E]">FAQs</h1>
            </div>
            <div className="flex flex-col">
                <ol>
                    {QuestionsArray.map(({ question, response }, index) => {
                        const isActive = openIndex === index
                        return (
                            <li
                                key={question}
                                className="not-first:border-t border-t-gray-300 py-5 gap-3 flex flex-col "
                                onClick={() => handleOpenIndex(index)}>
                                <div className="flex gap-3 ">
                                    <p className="sm:text-xl text-lg font-bold text-[#2A0C2E] w-full">{question}</p>
                                    <div className="flex justify-center items-center">
                                        {isActive ? <EnableState /> : <DisableState />}
                                    </div>
                                </div>
                                <div>
                                    {isActive && <p className="text-[#2A0C2E]/50 font-semibold sm:text-lg text-sm">{response}</p>}
                                </div>
                            </li>)
                    })}
                </ol>
            </div>
        </div>
    )
}

