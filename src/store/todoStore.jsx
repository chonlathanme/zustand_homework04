import React from "react";
import { persist } from "zustand/middleware"
import { create } from "zustand";



const todoStore = (set) => ({
    arr: [
        { id: '', title: '' }
    ],
    addArr: (newValue) => set((state) => ({
        arr: [...state.arr, { id: Date.now(), title: newValue }]
    })),
    rmvArr: (id) => set((state) => ({
        arr: state.arr.filter((el,index) => el.id !== id)
    }))
})

const usePersist = {
    name: 'store-Store',
    getStore: () => localStorage,
    partialize: (state) => ({
        arr: state.arr,
    })
}

const useStore = create(persist(todoStore, usePersist))

export default useStore