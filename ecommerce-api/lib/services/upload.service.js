"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileService = void 0;
const fs_1 = __importDefault(require("fs"));
const storage_1 = require("firebase-admin/storage");
class UploadFileService {
    constructor(path = "") {
        this.path = path;
    }
    upload(base64) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fileBuffer = Buffer.from(base64, 'base64');
                const fileName = "image.png";
                fs_1.default.writeFileSync(fileName, fileBuffer);
                const bucket = (0, storage_1.getStorage)().bucket("e-commerce-43751.firebasestorage.app");
                const [file] = yield bucket.upload(fileName, {
                    destination: this.path + fileName,
                });
                const url = yield (0, storage_1.getDownloadURL)(file);
                return url;
            }
            catch (err) {
                console.error("Erro no upload:", err);
                throw err;
            }
        });
    }
}
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=upload.service.js.map