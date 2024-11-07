import React from 'react';

interface FormProps {
  initialValues: any;
  fields: { name: string; label: string; type: string }[];
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ initialValues, fields, onSubmit, onCancel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    initialValues[name] = value;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(initialValues);
      }}
      className="bg-gray-800 p-6 rounded-lg text-white"
    >
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-white">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            defaultValue={initialValues[field.name]}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Form;
