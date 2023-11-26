import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
import { useState } from 'react'
export function CreateNewUser () {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault()
    setResult(null)
    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string
    if (!name || !email || !github) {
      setResult('ko'); return
    }
    addUser({ name, email, github })
    setResult('ok')
    form.reset()
  }
  return (
        <Card>
            <Title>Crear Nuevo Usuario</Title>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-1'>
                    <TextInput
                    placeholder='Nombre'/>
                    <TextInput
                    placeholder='Email' />
                    <TextInput
                    placeholder='Usuario GitHub' />
                    <div>
                        <Button
                            type='submit'
                            style={{ marginTop: '16px' }}>
                            Crear Usuario
                        </Button>
                        <span className='ml-4'>
                            {result === 'ok' && <Badge color='green'>Guardado correctamente</Badge>}
                            {result === 'ko' && <Badge color='red'>Error con los campos</Badge>}
                        </span>
                    </div>
            </form>
        </Card>
  )
}
