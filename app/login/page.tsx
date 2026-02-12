 'use client'
 
 import { useState } from 'react'
 import { useRouter } from 'next/navigation'
 import { z } from 'zod'
 import { useForm } from 'react-hook-form'
 import { zodResolver } from '@hookform/resolvers/zod'
 import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
 import { Input } from '@/components/ui/input'
 import { Button } from '@/components/ui/button'
 import { toast } from '@/hooks/use-toast'
 
 const LoginSchema = z.object({
   email: z.string().email('Email non valida'),
   password: z.string().min(6, 'Minimo 6 caratteri'),
 })
 
 type LoginValues = z.infer<typeof LoginSchema>
 
 export default function LoginPage() {
   const router = useRouter()
   const [loading, setLoading] = useState(false)
 
   const form = useForm<LoginValues>({
     resolver: zodResolver(LoginSchema),
     defaultValues: { email: '', password: '' },
   })
 
   async function onSubmit(values: LoginValues) {
     try {
       setLoading(true)
       const res = await fetch('/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(values),
       })
 
       const data = await res.json()
       if (!res.ok) {
         toast({ title: 'Accesso negato', description: data.error ?? 'Controlla le credenziali' })
         return
       }
 
       toast({ title: 'Accesso eseguito', description: 'Benvenuto!' })
       router.push('/')
     } catch {
       toast({ title: 'Errore di rete', description: 'Riprova tra poco' })
     } finally {
       setLoading(false)
     }
   }
 
   return (
     <main className="min-h-screen bg-background">
       <section className="mx-auto flex max-w-md flex-col gap-6 px-4 pt-28">
         <div className="text-center">
           <h1 className="text-2xl font-bold">Accedi</h1>
           <p className="text-muted-foreground">Entra per lanciare le tue campagne</p>
         </div>
 
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Email</FormLabel>
                   <FormControl>
                     <Input type="email" placeholder="you@example.com" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Password</FormLabel>
                   <FormControl>
                     <Input type="password" placeholder="••••••••" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <Button type="submit" disabled={loading} className="bg-[#39FF14] text-black font-bold hover:bg-[#32d613]">
               {loading ? 'Accesso…' : 'Accedi'}
             </Button>
           </form>
         </Form>
       </section>
     </main>
   )
 }
