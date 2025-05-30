import fs from "fs"

export class UploadFileService {

    constructor(/*private path: string =""*/) { }

    async upload(base64: string) {
        const fileBuffer = Buffer.from(base64, 'base64');
        fs.writeFileSync("image.png", fileBuffer);
    }
}