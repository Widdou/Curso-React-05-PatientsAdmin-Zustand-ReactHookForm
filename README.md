[LiveSite]()

# Overview

A platform to 

# First Steps

<details>
<summary>List of steps during the project construction</summary>

`npm create vite@latest`

1. Clean up, remvoe the Vite boilerplate files. Such as public icons, assets folder, delete the `App.css` and clear `App.tsx` & `index.css` content.

2. Install Tailwind with:
  - ``npm instal -D tailwindcss postcss autoprefixer`` - Dependencies
  - ``npx tailwindcss init -p`` - Configuration
  <details>
    <summary>- Set the tailwind directives on `index.css`</summary>
  
```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```
  </details>

3. Build the `PatientsList.tsx` & `PatientForm.tsx` components

4. Install React Hook Form to validate the PatientForm

5.

</details>


# Libraries & Technologies
<details>
  <summary>Show all</summary>
  
- React + TypeScript
- Tailwind CSS
- Zustand
- React Hook Form
- React Toastify
</details>

## React Hook Form

[Official Documentation](https://react-hook-form.com/)

When multiple forms are needed, and with complex data, it's better to implement a form validation library.

Alternatives:
- Formik + Yup
- ZOD for Validations

``npm i react-hook-form``

### Usage

```JavaScript
  import { useForm } from "react-hook-form"

  export default function Form() {

    const { register } = useForm()

    return (<form>

      <input
        id='name'
        {...register('name', {
          required: true
        })}      
      />
    
    </form>)

  }
```

Import the `useForm` hook, from it deconstruct the `register` function.
Then pass to each `<input>` element you want to register and be managed by react-hook-form.

Register accepts the name to identify the input and an object with options.
It's passed deconstructed so all the attributes are incorporated into the input element.

#### Form Validation

Import the `handleSubmit` function, and pass it to the form `onSubmit` attribute.
Define a custom function to handle the logic.

```JavaScript

  const { register, handleSubmit } = useForm()

  const registerPatient = () => {
    console.log('Nuevo Paciente')
  }

  return(
    <form
      noValidate
      onSubmit={handleSubmit(registerPatient)}
    >
      ...
    </form>
  )

```

#### Managing the FormState & Errors

  ``const { register, handleSubmit, formState : { errors } } = useForm()``

  ``errors.[FieldName]``


## Zustand

Context State Management simplified

Alternatives:
- Redux

## React Toastify 


