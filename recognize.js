import { utils } from '@react-native-firebase/app';
import vision, { VisionFaceContourType } from '@react-native-firebase/ml-vision';

 async function processFaces(localPath) {
  const faces = await vision().faceDetectorProcessImage(localPath);

  faces.forEach(face => {
    console.log('Head rotation on Y axis: ', face.headEulerAngleY);
    console.log('Head rotation on Z axis: ', face.headEulerAngleZ);

    console.log('Left eye open probability: ', face.leftEyeOpenProbability);
    console.log('Right eye open probability: ', face.rightEyeOpenProbability);
    console.log('Smiling probability: ', face.smilingProbability);

    face.faceContours.forEach(contour => {
      if (contour.type === VisionFaceContourType.FACE) {
        console.log('Face outline points: ', contour.points);
      }
    });
  });
}

// Local path to file on the device
const localFile = `${utils.FilePath.PICTURES_DIRECTORY}/barcode-document.jpg`;
// const localFile = require('./assets/pic.jpeg');

processBarcodes(localFile).then(() => console.log('Finished processing file.'));

export function runthis(){
        processFaces(require('./assets/pic.jpeg'))
}