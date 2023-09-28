import {FC, useState, useEffect, ChangeEvent} from 'react'
import {FormField, Loader} from '../components'
import { getRandomPrompt } from '../utils';
import { preview } from '../assets';
import { fetchImage } from '../services/imageApi';


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
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageLink, setImageLink] = useState('')

  useEffect(() => {
    setIsFormValid(form.name.trim() !== '' && form.prompt.trim() !== '');
  }, [form]);


  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        
        // Використовуйте функцію fetchImage для отримання результатів зображення
        const apiResponse = await fetchImage(form.prompt);
        const imgLink = apiResponse.openai.items[0].image_resource_url
        // Оновіть setImageLink замість setForm
        setImageLink(apiResponse);
        console.log(imageLink)
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide a proper prompt');
    }
  };
  
  

  return (
    <div className='px-8 py-4 h-screen'>
      <div>
        <h1 className='font-bold text-[#222328] text-3xl'>Create</h1>
        <p className='mt-2 text-[#666e75] text-sm'>Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>

      <form className='w-4/5'>
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

        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center mt-5">
        {form.photo ? (
          <img
            src={imageLink}
            alt={imageLink}
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={preview}
            alt="preview"
            className="w-9/12 h-9/12 object-contain opacity-40"
          />
        )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>


        <div className="mt-5 flex gap-5">
          <button
              type="button"
              onClick={generateImage}
              className={`text-white ${
                generatingImg ? 'bg-gray-400' : 'bg-green-700'
              } font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={!isFormValid || generatingImg}
            >
              {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[12px] md:text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className={`mt-3 text-white ${
              loading ? 'bg-gray-400' : 'bg-[#6469ff]'
            } font-medium rounded-md text-sm w-[250px] md:w-2/5 px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed mb-2`}
            disabled={!isFormValid || loading}
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>

    </div>
  )
}

export default CreatePost