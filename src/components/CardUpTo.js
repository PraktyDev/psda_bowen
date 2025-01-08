"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useEffect, useState } from "react"
  

const CardUpTo = ({ endNumber, duration = 2000, text}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (count < endNumber) {
        const intervalTime = duration / endNumber
        const timer = setInterval(() => {
          setCount(prevCount => {
            if (prevCount < endNumber) {
              return prevCount + 1
            }
            clearInterval(timer)
            return prevCount
          })
        }, intervalTime)
  
        return () => clearInterval(timer)
      }
    }, [count, endNumber, duration])

  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-3xl text-red-600 font-bold text-center">{count}</CardTitle>
            <CardDescription className="text-lg text-center font-semibold">{text}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default CardUpTo