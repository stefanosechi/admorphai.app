 import { NextResponse } from 'next/server'
 import { z } from 'zod'
 
 const LoginSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6),
 })
 
 export async function POST(req: Request) {
   try {
     const body = await req.json()
     const parse = LoginSchema.safeParse(body)
     if (!parse.success) {
       return NextResponse.json({ error: 'Payload non valido' }, { status: 400 })
     }
 
     const { email } = parse.data
     return NextResponse.json({ ok: true, user: { email } })
   } catch {
     return NextResponse.json({ error: 'Errore server' }, { status: 500 })
   }
 }
