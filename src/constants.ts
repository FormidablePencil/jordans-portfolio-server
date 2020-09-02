export const incorrectCredentials = (res, mesg?: string) => res.status(404).send({ message: mesg ?? 'Incorrect username or password' })
export const resInternalError = (res, text?: string) => res.status(500).send({ message: text ?? 'Oops. Something went wrong' })

