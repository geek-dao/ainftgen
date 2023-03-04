
import { Configuration, OpenAIApi, CreateImageRequestSizeEnum } from 'openai'
interface Params {
  prompt: string;
  n?: number,
  size?: CreateImageRequestSizeEnum
}

export async function getImage ({ prompt, n = 1, size = '1024x1024' }: Params) {
  const params = {
    'prompt': prompt,
    'n': n,
    'size': size
  }
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String('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')
    },
    body: JSON.stringify(params)
  })
  const data = await response.json()
  return data ? data.data : ''
}

export async function getImageFunc ({ prompt, n = 1, size = '1024x1024' }: Params) {
  const configuration = new Configuration({
    apiKey: String(import.meta.env.PRIVATE_KEY),
  });
  console.log(import.meta.env.PRIVATE_KEY);
  const openai = new OpenAIApi(configuration);
  const params = {
    'prompt': prompt,
    'n': n,
    'size': size
  }
  const response = await openai.createImage(params)
  // const response = await openai.createImage(params, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36' }})
  return response ? response.data : ''
}