"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'
import { Mail } from "lucide-react"


const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  

const Subscription = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: '',
        },
      })
      
      const { reset } = form
      const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
     
      const onSubmit = async (values) => {

        try {
        //   await axios.post('/api/send-subscribe', values)
          toast('Subcribed')
        } catch (error) {
          toast("Couldn't subscribe, try again later")
        }
      }
    
      useEffect(()=>{
        if(isSubmitSuccessful){
          reset()
        }
      },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input className='bg-white rounded-none' placeholder="Your Email Address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className='bg-red-500 hover:bg-red-400 rounded-none' type="submit" disabled={!isDirty || !isValid} >
          {isSubmitting 
          ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /></div>
          : <div><Mail /></div>
          }
      </Button>
    </form>
  </Form>
  )
}

export default Subscription