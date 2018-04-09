import { Toast } from 'antd-mobile';
// 全局对象，不同function使用传递数据
var imgFile = {};
// 将File append进 FormData
export const uploadCardImg = (event,cb) => {
   
    // 获取当前选中的文件
    const file = event.target.files[0];
    const imgMasSize = 1024 * 1024 * 10; // 10MB
    // 检查文件类型
    if (['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0) {
        // 自定义报错方式
        Toast.info("文件类型仅支持 jpeg/png/gif！", 2);
        return;
    }
    // 文件大小限制
    if (file.size > imgMasSize) {
        // 文件大小自定义限制
        Toast.info("文件大小不能超过10MB！", 2);
        return;
    }
     transformFileToDataUrl(file,cb)
}

// 将file转成dataUrl
export const transformFileToDataUrl = (file,cb) => {
    const imgCompassMaxSize = 200 * 1024; // 超过 200k 就压缩
    // 存储文件相关信息
    imgFile.type = file.type || 'image/jpeg'; // 部分安卓出现获取不到type的情况
    imgFile.size = file.size;
    imgFile.name = file.name;
    imgFile.lastModifiedDate = file.lastModifiedDate;
    // 封装好的函数
    const reader = new FileReader();
    // file转dataUrl是个异步函数，要将代码写在回调里
    reader.onload = function (e) {
        const result = e.target.result;
        if (result.length < imgCompassMaxSize) {
            compress(result, cb, false);    // 图片不压缩
        } else {
            compress(result, cb);            // 图片压缩
        }
    };

    reader.readAsDataURL(file);
}
// 使用canvas绘制图片并压缩
const compress = (dataURL, callback, shouldCompress = true) => {
    const img = new window.Image();
    img.src = dataURL;
    img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let compressedDataUrl;

        if (shouldCompress) {
            compressedDataUrl = canvas.toDataURL(imgFile.type, 0.2);
        } else {
            compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
        }
        callback(compressedDataUrl);
        
    }
}
 

