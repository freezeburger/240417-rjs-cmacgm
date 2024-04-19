import { useState } from 'react'
import BaseInput from '../../components/BaseInput/BaseInput'
import LayoutSplit from '../../layouts/LayoutSplit/LayoutSplit'
import { useToggleOnKey } from '../../utils/hooks/use-toggle-on-key.hook'
import { useWindowSize } from '../../utils/hooks/use-window-size.hook'
import UserForm from '../../containers/UserForm/UserForm'

const Demo = () => {

  const [formState, setFormState] = useState({
    email: 'Email',
    name: 'Name'
  })

  const validators = {
    email: (value: string) => {
      const valid = value.endsWith('@cma.fr')
      valid && setFormState({ ...formState, email: value });
      return {
        valid,
        message: valid ? "Saisie valide" : "Your email is invalid"
      }
    },
    name: (value: string) => {
      const valid = value.length > 3;
      valid && setFormState({ ...formState, name: value });
      return {
        valid,
        message: valid ? "Saisie valide" : "Too short (3c minimum)"
      }
    },
  }

  return (
    <>
      {JSON.stringify(formState)}
      <BaseInput initialValue={formState.email} placeholder='Your Email' validate={validators.email} />
      <BaseInput initialValue={formState.name} placeholder='Your Name' validate={validators.name} />
    </>
  )
}

const Toggle = () => {

  const size = useWindowSize(true)

  const toggle = useToggleOnKey('a')
  return <>{toggle.toString()}{JSON.stringify(size)} </>
}

function ViewHome() {

  return (
    <>
    
      <LayoutSplit>
        <LayoutSplit.Aside> Aside Content  <Toggle/> </LayoutSplit.Aside>
        <LayoutSplit.Main> Main Content 1</LayoutSplit.Main>
        <LayoutSplit.Main> <UserForm /></LayoutSplit.Main>
        {/* <LayoutSplit.Main> <Demo/> </LayoutSplit.Main> */}
      </LayoutSplit>
    </>
    
  )
}

export default ViewHome
