import fs from "fs"
import { getStorage , getDownloadURL } from "firebase-admin/storage"

export class UploadFileService {

    constructor(private path: string ="") { }

    async upload(base64: string): Promise<string> {
        try {
          const fileBuffer = Buffer.from(base64, 'base64');
          const fileName = "image.png";
          fs.writeFileSync(fileName, fileBuffer);
      
          const bucket = getStorage().bucket("e-commerce-43751.firebasestorage.app");
      
          const [file] = await bucket.upload(fileName, {
            destination: this.path + fileName,
          });
      
          const url = await getDownloadURL(file);
          return url;
      
        } catch (err) {
          console.error("Erro no upload:", err);
          throw err; 
        }
      }
       
}