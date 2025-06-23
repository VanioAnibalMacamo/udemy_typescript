import fs from "node:fs";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import { fileTypeFromBuffer } from "file-type";
import { randomUUID } from "node:crypto";
export class UploadFileService {
    path;
    constructor(path = "") {
        this.path = path;
    }
    async upload(base64) {
        try {
            const fileBuffer = Buffer.from(base64, 'base64');
            const fileType = await fileTypeFromBuffer(fileBuffer);
            console.log(fileType);
            const fileName = `${randomUUID().toString()}.${fileType?.ext}`;
            fs.writeFileSync(fileName, fileBuffer);
            const bucket = getStorage().bucket("e-commerce-43751.firebasestorage.app");
            const [file] = await bucket.upload(fileName, {
                destination: this.path + fileName,
            });
            fs.unlinkSync(fileName);
            const url = await getDownloadURL(file);
            return url;
        }
        catch (err) {
            console.error("Erro no upload:", err);
            throw err;
        }
    }
}
//# sourceMappingURL=upload.service.js.map