const { error } = require('console');
const path = require('path');

const uploadSingleFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname, '../public/Image');
    let extname = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extname);
    let finalName = `${baseName}-${Date.now()}${extname}`;
    let finalPath = `${uploadPath}/${finalName}`;
    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (error) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        }
    }
}
const uploadMultipleFiles = async (fileArr) => {
    try {
        let uploadPath = path.resolve(__dirname, '../public/Image');
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < fileArr.length; i++) {
            let extname = path.extname(fileArr[i].name);
            let baseName = path.basename(fileArr[i].name, extname);
            let finalName = `${baseName}-${Date.now()}${extname}`;
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                await fileArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    filename: fileArr[i].name,
                    error: null
                });
                countSuccess++;
            } catch (error) {
                resultArr.push({
                    status: 'failed',
                    path: finalName,
                    filename: fileArr[i].name,
                    error: JSON.stringify(error)
                });
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr,
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}
module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}