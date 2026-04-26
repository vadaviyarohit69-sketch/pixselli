declare module 'heic2any' {
  type Heic2AnyOptions = {
    blob: Blob;
    toType?: string;
    quality?: number;
  };

  // heic2any returns a Blob or an array of Blobs depending on input.
  export default function heic2any(options: Heic2AnyOptions): Promise<Blob | Blob[]>;
}
