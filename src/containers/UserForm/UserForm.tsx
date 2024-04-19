import React, { FC } from 'react';
import { useForm } from 'react-hook-form';


interface UserFormProps { }

const UserForm: FC<UserFormProps> = () => {

  const { register, handleSubmit, watch, formState } = useForm();
  const onSubmit = (data: object) => console.log(data);

  console.log(watch("name"));

  console.log(formState)

  return (

    <form onSubmit={handleSubmit(onSubmit)} data-testid="UserForm" style={{ display: 'flex', flexDirection: 'column' }}>

      <input defaultValue="test" {...register("name")} />

      <input {...register("email", {
        required: true,
        validate: (value, formValues) => {
          console.log(formValues)
          return value.length > 3
        }
      }
      )} />

      {formState.errors.email && <span>This field is required</span>}

      <input type="submit" />

    </form>
  );

};

export default UserForm;
