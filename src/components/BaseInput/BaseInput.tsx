import React, { ChangeEvent, FC, memo, useRef, useState } from "react";
import { BaseInputWrapper } from "./BaseInput.styled";
import styled from "styled-components";

export interface Validation {
  valid: boolean;
  message: string;
}

export interface BaseInputProps {
  placeholder?: string;
  validate?: (value: string) => Validation;
  initialValue?: string;
}

const ValidationDiv = styled.div<{$valid?:boolean}>`
   padding:3px;
   border-radius: 3px;
   background-color:${ ({$valid}) => $valid ? 'lightgreen':'crimson' };
   color:white;
   font-family:Arial;
`;

const ValidationMessage = React.memo((props:{validation:Validation | null}) => {

   const message = React.useMemo(() => {
      console.log('COMPUTING')
      return props.validation?.message.toUpperCase()
   }, [props.validation?.message] );

   return (
         props.validation && <ValidationDiv $valid={props.validation?.valid}>{ message }</ValidationDiv> 
   )
}, (prev,next)=>{
   return prev.validation?.valid === next.validation?.valid
})

const BaseInput: FC<BaseInputProps> = memo((props) => {

  const value = useRef(props.initialValue);
  
  const [validation, setValidation] = useState<Validation|null>(null);

  const handleChange = React.useCallback((event:ChangeEvent<HTMLInputElement>) => {
      value.current = event.target.value;
      setValidation((props.validate && props.validate(event.target.value)) as Validation);
  },[ props.validate ]);
  
  return (
    <BaseInputWrapper data-testid="BaseInput">
      { value.current }
      <input placeholder={props.placeholder} onChange={handleChange} value={value.current} />
      <ValidationMessage validation={validation} />
    </BaseInputWrapper>
  )

},(prev,next)=> prev.initialValue === next.initialValue );

BaseInput.defaultProps = {
  placeholder: "Default Placeholder",
  initialValue: "",
  validate: (value) => {
    return {
      valid: value.length > 3 ,
      message: value.length > 3 ? "Saisie valide" : "Votre message doit faire au moins 3 caractères"
      // message: value.length > 3 ? "Saisie valide" : "Saisie valide"
    }
  }
}


export default BaseInput;