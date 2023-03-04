
import { Configuration, OpenAIApi, CreateImageRequestSizeEnum } from 'openai'
interface Params {
  prompt: string;
  n?: number,
  size?: CreateImageRequestSizeEnum
}


export async function getImage ({ prompt, n = 1, size = '1024x1024' }: Params) {
  const configuration = new Configuration({
    apiKey: String(import.meta.env.VITE_PRIVATE_KEY),
  });
  const openai = new OpenAIApi(configuration);
  const params = {
    'prompt': prompt,
    'n': n,
    'size': size
  }
  const response = await openai.createImage(params)
  // const response = await openai.createImage(params, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36' }})
  return response?.data || ''
}