function validateForm() {
   const height = document.getElementById("myHeight").value.trim();
   const inseam = document.getElementById("myInseam").value.trim();
 
   if (!isValidNumber(height)) {
     alert("Invalid value for height! Please enter a valid number.");
     document.getElementById("myHeight").focus();
     return false;
   }
 
   if (!isValidNumber(inseam)) {
     alert("Invalid value for inseam! Please enter a valid number.");
     document.getElementById("myInseam").focus();
     return false;
   }
 
   sizeCalculate();
   return false; // ป้องกันการ submit จริง
 }
 
 function isValidNumber(value) {
   return !isNaN(parseFloat(value)) && isFinite(value);
 }
 
 function sizeCalculate() {
   let bikeType = document.querySelector('input[name="btypeRad"]:checked').value;
   let height = parseInt(document.getElementById("myHeight").value.trim(), 10);
   let inseam = parseInt(document.getElementById("myInseam").value.trim(), 10);
 
   if (isNaN(height) || isNaN(inseam)) {
     alert("Please enter valid numeric values for height and inseam.");
     return;
   }
 
   let size;
   if (bikeType === "road") {
     size = getRoadBikeSize(height, inseam);
   } else {
     size = getMountainBikeSize(height, inseam);
   }
 
   alert(`Bike size based on your height / inseam is: ${size}`);
 }
 
 function getRoadBikeSize(height, inseam) {
   if (height < 155) return "N/A";
   if (height <= 163) return "50";
   if (height <= 169) return inseam > 77 ? "54" : "52";
   if (height <= 179) return inseam > 82 ? "56" : "54";
   return inseam >= 78 ? "56" : "54";
 }
 
 function getMountainBikeSize(height, inseam) {
   if (height < 155) return "N/A";
   if (height <= 163) return "15\"";
   if (height <= 169) return inseam > 77 ? "17\"" : "16\"";
   if (height <= 179) return inseam > 82 ? "19\"" : "17\"";
   return inseam >= 78 ? "21\"" : "19\"";
 }


