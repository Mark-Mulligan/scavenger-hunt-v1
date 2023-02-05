// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST' || !req.body || !req.body.answer) {
    res.status(400).json({ message: 'Invalid request' });
    return;
  }

  if (req.method === 'POST') {
    if (req.body.answer === '30') {
      res.status(200).json({ message: 'Correct Answer!' });
    } else {
      res.status(200).json({ message: 'Answer Incorrect.' });
    }
  }
}
