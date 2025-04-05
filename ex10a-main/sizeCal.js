function sizeCalculate() {
  let t = document.querySelector('input[name="btypeRad"]:checked').value;
  let h = (document.getElementById("myHeight").value).trim();
  let i = (document.getElementById("myInseam").value).trim();
  let size;
  //xxxxx calculate bike size xxxxx
  if(t == 2){//road bike
    if(h >= 155 && h <= 163){
       size = '50';
    }else if(h >= 164 && h <= 169){
       if(i >= 74 && h <= 77){
        size = '52';
       }else if(i > 77){
        size = '54';
       }else{
        size = '50';
       }
    }else if(h >= 170 && h <= 179){
       if(i >= 78 && h <= 82){
        size = '54';
       }else if(i > 82){
        size = '56';
       }else{
        size = '52';
       }
    }else if(h >= 180){
       if(i >= 78){
        size = '56';
       }else{
        size = '54';
       }
    }else{
       size = 'N/A';
    }
  }else{//mountain bike
    if(h >= 155 && h <= 163){
      size = 'S';
   }else if(h >= 164 && h <= 169){
      size = 'M';
   }else if(h >= 170 && h <= 179){
      size = 'L';
   }else if(h >= 180){
      size = 'XL';
   }else{
      size = 'N/A';
   }
  }
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return size;
}


