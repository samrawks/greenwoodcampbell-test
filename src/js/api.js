const specialistData = 'https://gc-interview-api.azurewebsites.net/api/consultants';

async function getData() {
  const response = await fetch(specialistData);
  const allSpecialistData = await response.json();
  let newDataArray = [];

  for (let i = 0; i < allSpecialistData.length; i++) {
    newDataArray.push(allSpecialistData[i]);
  }

  return newDataArray;
}


async function buildSpecialist() {
  const specialistArray = await getData();
  
  const arrayLength = specialistArray.length;
  const countElement = document.getElementById('arrayLength');
  countElement.innerHTML = arrayLength;

  for (let i = 0; i < 10; i++) {
    document.getElementById('specialistContainer').innerHTML +=
    '<div class="specialist"><div class="col"><div class="specialist_info"><div class="specialist__photo"><img src="' + specialistArray[i].ProfileImage + '" alt=""></div><span class="specialist__name">'+ specialistArray[i].Title + '</span> — <span class="specialist__title">' + specialistArray[i].Specialty + '</span><div class="specialist__location">Based at: ' + specialistArray[i].Hospital + '&bullet; 9 Miles</div><div class="specialist__links"><a href="tel:' + specialistArray[i].PhoneNo + '">' + specialistArray[i].PhoneNo + '</a> <a href="">Go to hospital website</a> <a href="">Get directions</a></div></div><div class="specialist_desc">' + 
    specialistArray[i].ProfessionalBackground + '<a href="">View less</a></div></div><div class="col"><button class="btn btn-secondary">View full profile</button><button class="btn btn-primary">Book an appointment</button></div><hr></div>';
  }

}

buildSpecialist();