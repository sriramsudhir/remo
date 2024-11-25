import { NextResponse } from 'next/server';
import { RemoveBg } from 'remove.bg';

const removeBg = new RemoveBg(process.env.REMOVE_BG_API_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image_file') as File;

    if (!imageFile) {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    
    const result = await removeBg.removeBackgroundFromImageBuffer({
      image_file_b64: buffer.toString('base64'),
      size: 'regular',
      type: 'auto'
    });

    return new NextResponse(result.base64img, {
      headers: {
        'Content-Type': 'image/png'
      }
    });
  } catch (error) {
    console.error('Background removal error:', error);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}