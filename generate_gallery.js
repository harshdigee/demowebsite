const fs = require('fs');

const images = [
  "DSC00299-1_1_New-copy-2048x1240-bb49aaef-33f7-474a-8a3f-c4b1b7b53ecf.png",
  "DSC00357-1-1-copy-2048x1365-08ccce3b-c599-4272-9b34-af5ed0345c30.png",
  "DSC00326-1-1_New-copy-2048x1293-52acec89-b317-46d0-8414-c5543353511f.png",
  "DSC00319-1-1-copy-2048x1365-bb9c7be7-39e1-432b-b230-3c0081ee303b.png",
  "DSC01589-1-2048x1365-4260d22f-a4c6-4381-9365-898f30a9e631.png",
  "DSC00686_Ndw-copy-2048x1365-282cc4c6-1518-428c-ab45-712e2cd477a0.png",
  "DSC01438-1-2048x1365-58df30b6-5e15-4d0c-b814-4518481736a7.png",
  "DSC01574-1-1-copy-2048x1365-aef88664-b2d7-4bbb-9d7d-138662664de5.png",
  "DSC01624-1_1-copy-2048x1365-7719927a-c935-4f98-85ec-f0e81f3c6e97.png",
  "DSC00324-1-1_New-copy-2048x1365-d85826c7-3ea9-409e-90be-310cc2afdf1e.png",
  "DSC00397-1-1-1-copy-2048x1365-fda4c4b0-27e1-437c-94fd-36841a36759c.png",
  "DSC01469-1-2048x1226-0eb5fc1a-5552-4c7d-97d8-f4c534264b39.png",
  "WhatsApp-Image-2025-09-19-at-21.44.00-513b3567-74de-4155-bdb2-672ce1ff1ca2.png",
  "DSC02678-1-2048x1366-af7458a2-664d-4b3b-8635-f2bb57903c45.png",
  "DSC01602-1-2048x1365-44fba545-4ffc-44f2-8b11-8d101ce832a2.png",
  "DSC01590-1-2048x1366-c863e03a-556c-4bfe-bcb5-7e54ef9d435b.png",
  "DSC02765-1-2048x1365-687459ae-6b4b-4471-95e6-19202eb175d6.png",
  "Westwood-Interior-Industry-96102170-d79a-4f9f-b7fd-3c8a19032fcf.png",
  "WhatsApp-Image-2025-09-17-at-12.00.12-f165bde8-0f86-4c7e-8560-e03a2d54fd92.png",
  "WhatsApp-Image-2025-09-19-at-21.43.58-ba6ce52a-1fea-4992-955f-a072b852f125.png",
  "DSC02687-1-2048x1365-aad49a18-5693-45d7-a8b1-3fbfbb6a27e7.png",
  "WhatsApp-Image-2025-09-19-at-21.44.01-68e7e281-0e8d-4295-8e67-c6e0ce04e92e.png",
  "DSC02774-1-2048x1365-c66e739a-bd58-4de0-bc84-45f7fc1cc0e3.png",
  "DSC03027-1-2048x1365-a2141b2b-4a39-4331-a31b-b6de4a1039c9.png",
  "slected-8-2048x1365-361ceb50-55b7-4bd2-bb89-04901fae180c.png",
  "DSC01593-1-2048x1365-c66dfe56-0329-489d-aa53-3c1494174cc7.png",
  "Westwood-Furniture-e131d790-e669-4fd7-ba3c-e407c9d5caaa.png",
  "DSC02834-1-2048x1365-1468b514-e8a0-46e5-ba08-e2c5b01c3be3.png",
  "slected-6-2048x1365-2fa63fb7-0150-4a6b-b0d8-8debde9f40ce.png",
  "DSC02706-1-2048x1365-8a7398fe-198f-4d88-a7a7-2d4b2a4b57e4.png",
  "Office-looks-22c42c84-2cba-49b3-940d-c5adcfc05d07.png",
  "DSC01398-1-2048x1365-9f73d3cb-1277-4e43-91a9-9dc4495af0ad.png",
  "DSC01648-1-New-copy-2048x1366-7b4d85d5-12fa-4ffa-b6ef-13c8c10fd4ec.png",
  "slected-4-2048x1365-52ac014d-f8af-40cb-a848-4f462e928a35.png",
  "Westwood-Machine-5e5d2e13-a0eb-42f4-a8c8-8b4ca81a3179.png",
  "slected-7-2048x1365-6cddf21d-910d-4c68-99c3-44a7c7d36deb.png",
  "slected-5-2048x1365-2a04df9d-71e2-4832-a3a9-1765db3ebccf.png",
  "slected-3-2048x1366-a00a6d93-4aeb-47a4-9529-31a2a069e3c2.png",
  "WhatsApp-Image-2025-09-19-at-21.43.59-1-48318fb8-10a2-4f27-9efc-54bf7ceaf07d.png",
  "DSC01400-1-2048x1365-2b7aba02-3944-466c-8a09-683d7d0db8ab.png",
  "DSC02664-1-2048x1365-a824bfd4-a99f-4153-b1f6-786db0f9f77b.png",
  "DSC01424-1-2048x1365-7cd58fda-1aec-4fae-b2e0-9105e5aa4fdd.png",
  "slected-2-2048x1365-5bfbdfcc-eebb-4e28-897f-e3457d6776df.png",
  "new-gallery-img8-1-8a43f210-f281-43c6-af1d-1e0401117a47.png",
  "DSC03071-1-2048x1365-c7d6654f-53c5-4cac-bb1d-5ce21e6ce701.png",
  "DSC02727-1-2048x1366-89866603-3e92-4a3d-8b5d-cd1e08bc3979.png",
  "DSC02744-1-2048x1365-8df620a1-240b-4fff-a3ba-cb7e01e5b8c7.png",
  "new-gallery-img5-1-5ff44e53-f786-457a-b60e-f3869e70f7b1.png",
  "WhatsApp-Image-2025-09-19-at-21.44.00-1-1c740fe5-fdbb-4611-a999-a73a6a798561.png",
  "DSC02599-1-2048x1365-c76c1e62-b5d8-4cfc-97ac-171f049ef90d.png",
  "DSC01568-1-1-copy-2048x1366-8215151d-3da3-4802-9aa7-b29e829eb4a9.png",
  "DSC02593-1-2048x1365-f2ccd609-90ed-482b-b1c2-b557a2d845e3.png",
  "new-gallery-img6-1-f9010244-fe7a-408b-a392-c66c0c3e73ab.png",
  "German-Machine-17758e9b-8a41-49ac-986d-347340a08f20.png",
  "WhatsApp-Image-2025-09-19-at-21.43.59-00d44b50-2e55-41ad-a44f-bc39a171173f.png",
  "new-gallery-img7-1-61293325-2ed5-432f-8d36-260f72937aa8.png",
  "DSC01629-1-1-copy-d0100e9f-9489-4ddb-ae78-d20f3a882397.png"
];

let out = `export const extraGalleryImages = [\n`;
images.forEach((img, i) => {
  out += `  { src: "/gallery/event/${img}", alt: "Westwood Gallery Image ${i+1}", category: "New Highlights", span: "col-span-1 row-span-1" },\n`;
});
out += `];\n`;

fs.writeFileSync('src/pages/ExtraGalleryImages.ts', out);
console.log("Done");
