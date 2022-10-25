import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox.js'
import TextInput from './components/TextInput.js'
import Select from './components/Select.js'
import Radio from './components/Radio.js'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'El apellido es muy corto'
  }

  if(!values.email) {
    errors.email = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'El email es muy corto'
  }

  if(!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}

function App() {
  return (
    <Formik 
      initialValues={{ name: '', lastname: '', email: '', radio: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br/>
        <TextInput name="lastname" label="Apellido"/>
        <br/>
        <TextInput name="email" label="Correo"/>
        <Select label="tipo" name="var1">
          <option value="o">Opciones</option>
          <option value="o1">Opcion 1</option>
          <option value="o2">Opcion 2</option>
          <option value="o3">Opcion 3</option>
        </Select>
        <Checkbox name="accept">
          Aceptar los términos y condiciones
        </Checkbox>
        <Radio name="radio" value="va1" label="val1"/>
        <Radio name="radio" value="va2" label="val2"/>
        <Radio name="radio" value="va3" label="val3"/>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );  
}

export default App;
