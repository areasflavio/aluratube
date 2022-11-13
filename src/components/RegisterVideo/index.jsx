import { useEffect, useState } from 'react';

import { StyledRegisterVideo } from './styles';

const useForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);
  const [thumb, setThumb] = useState('');

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'url') {
      const videoId = e.target.value.split('?v=')[1];

      setThumb(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  const clearForm = () => setValues({});

  return { values: { ...values, thumb }, handleChange, clearForm };
};

export function RegisterVideo() {
  const { values, handleChange, clearForm } = useForm({
    initialValues: { title: '', url: '', thumb: '' },
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);

    setShowForm(false);
    clearForm();
  };

  return (
    <StyledRegisterVideo>
      <button
        type="button"
        className="add-video"
        onClick={() => setShowForm(true)}
      >
        +
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <button className="close-modal" onClick={() => setShowForm(false)}>
              X
            </button>

            <input
              name="title"
              placeholder="Título do vídeo"
              value={values.title}
              onChange={handleChange}
            />
            <input
              name="url"
              placeholder="URL"
              value={values.url}
              onChange={handleChange}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
