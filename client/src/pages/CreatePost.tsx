import {FC, useState, ChangeEvent} from 'react'
import {FormField, Loader} from '../components'



interface FormState {
  [key: string]: string;
}

const CreatePost: FC = () => {

  const [form, setForm] = useState<FormState>({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='px-8 py-4 h-screen'>
      <div>
        <h1 className='font-bold text-[#222328] text-3xl'>Create</h1>
        <p className='mt-2 text-[#666e75] text-sm'>Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>

      <form>
        <FormField
          labelName="Your Name"
          type="text"
          name="name"
          placeholder="Ex., john doe"
          value={form.name}
          handleChange={handleChange}
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />
      </form>

    </div>
  )
}

export default CreatePost