import React, { useState } from "react";
import useStore from "../store/todoStore";



const Section01 = () => {
    const [txt, setTxt] = useState('')
    const { arr, addArr, rmvArr } = useStore((state) => ({
        arr: state.arr,
        addArr: state.addArr,
        rmvArr: state.rmvArr
    }))
    const hdlInput = (e) => {
        setTxt(e.target.value)
    }
    const hdlAdd = (e) => {
        addArr(txt)
    }
    const hdlRmv = (id) => {
        rmvArr(id)
    }
    return (
        <div className="p-6 w-[100vw] h-auto min-h-[100vh] flex flex-col items-center bg-[#EBE9E1]">
            <div className="flex flex-col rounded w-2/5 p-6 bg-[#ffa2b697]">
                <nav className="flex flex-row justify-between pb-6">
                    <h1 className="text-xl w-full text-[#E43D12]">Navbar</h1>
                    <div className="flex gap-3 text-[#E43D12]">
                        <button>Home</button>
                        <button>About</button>
                        <button>Login</button>
                    </div>
                </nav>
                <div className="rounded flex flex-col items-center bg-[#FFA2B6] pb-6 pt-6 text-[#E43D12]">
                    <h1 className="text-xl pb-6">Todo List</h1>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row justify-between gap-2">
                            <input
                                type="text"
                                onChange={hdlInput}
                                className="w-auto p-2 rounded bg-[#e9bc55] placeholder-[#ff7350]"
                                placeholder="New List"
                            />
                            <button
                                onClick={hdlAdd}
                                className="rounded border border-sky-600 pl-4 pr-4 bg-[#f8f0cd] text-sky-300">Add</button>
                        </div>
                        <ul>
                            {arr.map((el, index) => (
                                <li key={index} className=" rounded mt-6 flex flex-row p-2 justify-between items-center bg-[#e9bc55]">{index + 1}. {el.title}<button onClick={() => hdlRmv(el.id)} className=" border border-red-600 rounded p-2 bg-[#f8f0cd]">Remove</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section01