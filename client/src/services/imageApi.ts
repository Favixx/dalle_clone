import axios from 'axios';

export const fetchImage = async (text: string) => {
  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/image/generation',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_IMAGEAPI_KEY}`
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
