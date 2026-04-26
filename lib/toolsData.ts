import { LucideIcon, Maximize2, Crop, Camera, FlipHorizontal, Type, Palette, Calendar, Minimize2, Youtube, Ruler, Scissors, FileSignature, RotateCw, Eye, FileDown, Gauge, Globe, Mail, MessageSquare, FileText, Image as ImageIcon, RefreshCw, FileType, Target, Percent, Sparkles, MessageCircle } from 'lucide-react';

export interface Tool {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

export const allTools: Tool[] = [
  // Image Editing Tools
  { title: 'Image Resizer', description: 'Resize your images to any dimension instantly', href: '/image-resizer', icon: Maximize2, color: 'blue' },
  { title: 'Image Cropper', description: 'Crop and trim your images precisely', href: '/image-cropper', icon: Crop, color: 'blue' },
  { title: 'Passport Photo Maker', description: 'Create passport-sized photos online', href: '/passport-photo-maker', icon: Camera, color: 'blue' },
  { title: 'Flip Image', description: 'Flip images horizontally or vertically', href: '/flip-image', icon: FlipHorizontal, color: 'blue' },
  { title: 'Add Watermark', description: 'Add text or image watermarks to protect your photos', href: '/add-watermark', icon: Type, color: 'blue' },
  { title: 'Black & White', description: 'Convert color images to black and white', href: '/black-and-white', icon: Palette, color: 'blue' },
  { title: 'Add Date', description: 'Add date and time stamps to your images', href: '/add-date', icon: Calendar, color: 'blue' },
  { title: 'Blur Face', description: 'Automatically blur faces in photos for privacy', href: '/blur-face', icon: Eye, color: 'blue' },
  { title: 'Reduce Size', description: 'Reduce image file size while maintaining quality', href: '/reduce-size', icon: Minimize2, color: 'blue' },
  { title: 'YouTube Banner', description: 'Create perfect YouTube channel banners (2560x1440)', href: '/youtube-banner', icon: Youtube, color: 'blue' },
  { title: 'Resize to Inches', description: 'Resize images to exact inch dimensions', href: '/resize-to-inches', icon: Ruler, color: 'blue' },
  { title: 'Resize to MM', description: 'Resize images to exact millimeter dimensions', href: '/resize-to-mm', icon: Ruler, color: 'blue' },
  { title: 'UPSC Photo', description: 'Resize photos for UPSC exam applications', href: '/upsc-photo', icon: Scissors, color: 'blue' },
  { title: 'Signature Resizer', description: 'Resize signature images for forms and documents', href: '/signature-resizer', icon: FileSignature, color: 'blue' },
  { title: 'Rotate Image', description: 'Rotate images by any angle', href: '/rotate-image', icon: RotateCw, color: 'blue' },
  { title: 'RRB Photo Resizer', description: 'Resize photos for RRB exam applications', href: '/rrb-photo', icon: Ruler, color: 'blue' },

  // Image Compression Tools
  { title: 'Image Compressor', description: 'Compress images without losing quality', href: '/image-compressor', icon: FileDown, color: 'purple' },
  { title: 'Compress to 10KB', description: 'Compress image to exactly 10KB size', href: '/compress-10kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 20KB', description: 'Compress image to exactly 20KB size', href: '/compress-20kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 30KB', description: 'Compress image to exactly 30KB size', href: '/compress-30kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 40KB', description: 'Compress image to exactly 40KB size', href: '/compress-40kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 50KB', description: 'Compress image to exactly 50KB size', href: '/compress-50kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 60KB', description: 'Compress image to exactly 60KB size', href: '/compress-60kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 70KB', description: 'Compress image to exactly 70KB size', href: '/compress-70kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 80KB', description: 'Compress image to exactly 80KB size', href: '/compress-80kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 90KB', description: 'Compress image to exactly 90KB size', href: '/compress-90kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 100KB', description: 'Compress image to exactly 100KB size', href: '/compress-100kb', icon: Gauge, color: 'purple' },
  { title: 'Compress to 200KB', description: 'Compress image to exactly 200KB size', href: '/compress-200kb', icon: Gauge, color: 'purple' },
  { title: 'Compress by Percentage', description: 'Reduce image size by custom percentage', href: '/compress-percentage', icon: Gauge, color: 'purple' },
  { title: 'Lossless Compression', description: 'Compress images without any quality loss', href: '/lossless-compression', icon: FileDown, color: 'purple' },
  { title: 'Compress for Web', description: 'Optimize images for fast website loading', href: '/compress-for-web', icon: Globe, color: 'purple' },
  { title: 'Compress for Email', description: 'Reduce size for email attachments', href: '/compress-for-email', icon: Mail, color: 'purple' },
  { title: 'Compress for WhatsApp', description: 'Optimize images for WhatsApp sharing', href: '/compress-for-whatsapp', icon: MessageSquare, color: 'purple' },
  { title: 'Compress for Forms', description: 'Compress images for online form submissions', href: '/compress-for-forms', icon: FileText, color: 'purple' },
  { title: 'JPEG Compressor', description: 'Compress JPEG/JPG images effectively', href: '/jpeg-compressor', icon: ImageIcon, color: 'purple' },
  { title: 'JPG Compressor', description: 'Reduce JPG file size without quality loss', href: '/jpg-compressor', icon: ImageIcon, color: 'purple' },
  { title: 'PNG Compressor', description: 'Compress PNG images while keeping transparency', href: '/png-compressor', icon: ImageIcon, color: 'purple' },
  { title: 'WebP Compressor', description: 'Compress modern WebP format images', href: '/webp-compressor', icon: ImageIcon, color: 'purple' },
  { title: 'GIF Compressor', description: 'Reduce GIF animation file size', href: '/gif-compressor', icon: ImageIcon, color: 'purple' },

  // Image Converter Tools
  { title: 'PNG to JPG', description: 'Convert PNG images to JPG format online', href: '/png-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to PNG', description: 'Convert JPG images to PNG format online', href: '/jpg-to-png', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to JPEG', description: 'Convert JPG to JPEG format quickly', href: '/jpg-to-jpeg', icon: RefreshCw, color: 'emerald' },
  { title: 'WebP to JPG', description: 'Convert WebP images to JPG format', href: '/webp-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to WebP', description: 'Convert JPG to modern WebP format', href: '/jpg-to-webp', icon: RefreshCw, color: 'emerald' },
  { title: 'PNG to WebP', description: 'Convert PNG to WebP for better compression', href: '/png-to-webp', icon: RefreshCw, color: 'emerald' },
  { title: 'WebP to PNG', description: 'Convert WebP images to PNG format', href: '/webp-to-png', icon: RefreshCw, color: 'emerald' },
  { title: 'HEIC to JPG', description: 'Convert iPhone HEIC photos to JPG', href: '/heic-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to HEIC', description: 'Convert JPG images to HEIC format', href: '/jpg-to-heic', icon: RefreshCw, color: 'emerald' },
  { title: 'HEIC to PNG', description: 'Convert HEIC images to PNG format', href: '/heic-to-png', icon: RefreshCw, color: 'emerald' },
  { title: 'PNG to HEIC', description: 'Convert PNG images to HEIC format', href: '/png-to-heic', icon: RefreshCw, color: 'emerald' },
  { title: 'HEIC to WebP', description: 'Convert HEIC to WebP format online', href: '/heic-to-webp', icon: RefreshCw, color: 'emerald' },
  { title: 'WebP to HEIC', description: 'Convert WebP images to HEIC format', href: '/webp-to-heic', icon: RefreshCw, color: 'emerald' },
  { title: 'AVIF to JPG', description: 'Convert AVIF images to JPG format', href: '/avif-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to AVIF', description: 'Convert JPG to next-gen AVIF format', href: '/jpg-to-avif', icon: RefreshCw, color: 'emerald' },
  { title: 'AVIF to PNG', description: 'Convert AVIF images to PNG format', href: '/avif-to-png', icon: RefreshCw, color: 'emerald' },
  { title: 'AVIF to WebP', description: 'Convert AVIF to WebP format online', href: '/avif-to-webp', icon: RefreshCw, color: 'emerald' },
  { title: 'GIF to JPG', description: 'Convert animated GIF to JPG images', href: '/gif-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to GIF', description: 'Convert JPG images to GIF format', href: '/jpg-to-gif', icon: RefreshCw, color: 'emerald' },
  { title: 'BMP to JPG', description: 'Convert BMP bitmap to JPG format', href: '/bmp-to-jpg', icon: RefreshCw, color: 'emerald' },
  { title: 'JPG to BMP', description: 'Convert JPG images to BMP format', href: '/jpg-to-bmp', icon: RefreshCw, color: 'emerald' },
  { title: 'ICO to PNG', description: 'Convert icon files to PNG format', href: '/ico-to-png', icon: RefreshCw, color: 'emerald' },
  { title: 'PNG to ICO', description: 'Convert PNG images to ICO icons', href: '/png-to-ico', icon: RefreshCw, color: 'emerald' },
  
  // PDF Converters
  { title: 'JPG to PDF', description: 'Convert JPG images to PDF documents', href: '/jpg-to-pdf', icon: FileType, color: 'orange' },
  { title: 'PNG to PDF', description: 'Convert PNG images to PDF files', href: '/png-to-pdf', icon: FileType, color: 'orange' },
  { title: 'WebP to PDF', description: 'Convert WebP images to PDF format', href: '/webp-to-pdf', icon: FileType, color: 'orange' },
  { title: 'HEIC to PDF', description: 'Convert HEIC photos to PDF documents', href: '/heic-to-pdf', icon: FileType, color: 'orange' },
  { title: 'AVIF to PDF', description: 'Convert AVIF images to PDF files', href: '/avif-to-pdf', icon: FileType, color: 'orange' },
  { title: 'PDF to JPG', description: 'Convert PDF pages to JPG images', href: '/pdf-to-jpg', icon: FileType, color: 'orange' },
  { title: 'PDF to PNG', description: 'Extract PDF pages as PNG images', href: '/pdf-to-png', icon: FileType, color: 'orange' },
  { title: 'PDF to WebP', description: 'Convert PDF to WebP image format', href: '/pdf-to-webp', icon: FileType, color: 'orange' }
];
