const upload = document.getElementById("imageUpload");
const heroImage = document.getElementById("heroImage");

if(upload){
 upload.addEventListener("change",()=>{
  const file = upload.files[0];
  if(file){
   const reader = new FileReader();
   reader.onload=()=>{heroImage.src=reader.result;heroImage.style.display="block";}
   reader.readAsDataURL(file);
  }
 });
}
