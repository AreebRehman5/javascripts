let carName = document.getElementById('carName')
let carModel = document.getElementById('carModel')
let carColor = document.getElementById('carColor')
let carUsage = document.getElementById('carUsage')
let carImage = document.getElementById('carImage')

let car = {
    name: 'Land cru',
    image : 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    Model : 2021 ,
    color : "Blue",
    used : ['Areeb','Huzaifa']
}

carName.innerText = car.name
carModel.innerText= car.Model
carColor.innerText=car.color
carUsage.innerText=car.used
carImage.src = car.image