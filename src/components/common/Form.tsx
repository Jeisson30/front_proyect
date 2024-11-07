import React, { useState } from 'react';

interface Field {
    name: string;
    label: string;
    type: string;
  }
  
  interface FormProps<T> {
    initialValues: T;
    fields: Field[];
    onSubmit: (values: T) => void;
    onCancel: () => void;
  }
  
  const Form = <T extends {}>({
    initialValues,
    fields,
    onSubmit,
    onCancel,
  }: FormProps<T>) => {
    const [values, setValues] = useState<T>(initialValues);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(values);
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
        {fields.map((field) => (
          <div key={field.name} className="mb-4"> 
            <label className="block font-semibold mb-2 text-black">{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              value={(values as any)[field.name]}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white p-2 rounded">
            Cancelar
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Guardar
          </button>
        </div>
      </form>
    );
  };
  
  export default Form;
  