import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'Kunal_Khandelwal_Resume.pdf')
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="Kunal_Khandelwal_Resume.pdf"',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Robots-Tag': 'index, follow',
        }
    });
}