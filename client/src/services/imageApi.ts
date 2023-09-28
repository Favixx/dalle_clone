import axios from 'axios';

export const fetchImage = async (text: string) => {
  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/image/generation',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzc1MWRkYzQtOWRjYi00NmE2LWJiMDMtMWI0N2U0NDU0MWUxIiwidHlwZSI6ImFwaV90b2tlbiJ9.FnV26l2G6FiUp24iObZ6wOJr7C3qu-GUgI_D7dQrUVI`
    },
    data: {
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      resolution: '256x256',
      num_images: 1,
      providers: 'openai',
      text: text,
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
