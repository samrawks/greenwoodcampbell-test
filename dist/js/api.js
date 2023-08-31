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
    '<div class="specialist"><div class="col"><div class="specialist_info--wrapper"><div class="specialist__photo"><img src="' + specialistArray[i].ProfileImage + '" alt=""></div><div class="specialist_info"><h3 class="specialist__name">'+ specialistArray[i].Title + ' — ' + specialistArray[i].Specialty + '</h3><div class="specialist__location"><i class="fa-solid fa-hospital"></i> Based at: ' + specialistArray[i].Hospital + ' &bullet; 9 Miles</div><div class="specialist__links"><a href="tel:' + specialistArray[i].PhoneNo + '"><i class="fa-solid fa-phone"></i> ' + specialistArray[i].PhoneNo + '</a> <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i> Go to hospital website</a> <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i> Get directions</a></div></div></div><div class="specialist_desc">' + 
    specialistArray[i].ProfessionalBackground + '<a href="" class="specialist__accordion">View less</a></div></div><div class="col"><button class="btn btn-secondary">View full profile</button><button class="btn btn-primary">Book an appointment</button></div></div><hr>';
  }

  // PAGINATION
  const numberOfItems = specialistArray.length;
  const numberPerPage = 10;
  const currentPage = 1;
  const numberOfPages = Math.ceil(numberOfItems/numberPerPage);

}

buildSpecialist();