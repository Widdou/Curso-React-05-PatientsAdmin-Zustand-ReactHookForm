[LiveSite]()

# First Steps

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

3. 


# Libraries & Technologies
<details>
  <summary>Show all</summary>
  
- React + TypeScript
- Tailwind CSS
- Zustand
- React Hook Form
</details>

# React Hook Form

[Official Documentation](https://react-hook-form.com/)

When multiple forms are needed, and with complex data, it's better to implement a form validation library.

Alternatives:
- Formik + Yup
- ZOD for Validations

``npm i react-hook-form``




