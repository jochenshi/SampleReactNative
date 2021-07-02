import React from 'react';
import {
  useForm
} from 'react-hook-form';

const formCreate = (WrappedComponent) => {
  const {
    register, handleSubmit, formState: {errors}, ...extra
  } = useForm();
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          {...extra}
        />
      )
    }
  }
}

export default formCreate;