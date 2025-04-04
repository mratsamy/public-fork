import { Head, router } from "@inertiajs/react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface Props {
  errors?: {
    general?: string;
  }
}

function ErrorMessage({message}: {message?: string}) {
  if (!message) return;

  return (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}

export default function Login(props: Props) {
  const { errors: { general: errorMessage } = {} } = props
  const [ values, setValues ] = useState({
    email_address: "",
    password: ""
  })

  function handleKeyChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id: key, value } = event.target
    setValues((values) => ({
        ...values,
        [key]: value
      })
    )
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    router.post("/session", { ...values })
  }

  return (
    <>
      <Head title="Login" />
      <div className="content-center">  
        <div className="min-h-25"></div>
        <Card className="justify-center justify-self-center min-w-lg max-w-5xl">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorMessage message={errorMessage} />
              <div className="mt-4 mb-4">
                <Label htmlFor="email_address">Email</Label>  
                <Input type="email" id="email_address" placeholder="Email" onChange={handleKeyChange} value={values.email_address} />
              </div>
              <div className="mt-4 mb-4">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" onChange={handleKeyChange} value={values.password} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={"default"} type="submit">Submit</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  )
}
