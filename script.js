var table = document.getElementById('tableList')
var image = document.getElementById('image')

var fullList = []
var result = []

var blockInfo = document.getElementById('blockInfo')

var infoModel = document.getElementById('infoModel')
var infoClass = document.getElementById('infoClass')
var infoSize = document.getElementById('infoSize')
var infoMemory = document.getElementById('infoMemory')
var infoCamera = document.getElementById('infoCamera')
var infoColor = document.getElementById('infoColor')
var infoWight = document.getElementById('infoWight')

var inputArea = document.getElementById('inputArea')

var inputCategory = document.getElementById('inputCategory')
var inputModel = document.getElementById('inputModel')
var inputSize = document.getElementById('inputSize')
var inputMemory = document.getElementById('inputMemory')
var inputCamera = document.getElementById('inputCamera')
var inputColor = document.getElementById('inputColor')
var inputWight = document.getElementById('inputWight')

var list = 0

blockInfo.hidden = true
inputArea.hidden = true

var IPhone = [
    ['101', 'IPhone 6 Plus 32Gb', 'Серый космос', '32Gb', 'Смартфон', '12Мп / 5Мп', `5,5"`, '192г', 'images/Iphone/Iphone6Plus.jpg'],
    ['102', 'IPhone 8S Plus 64Gb', 'Золотистый', '64Gb', 'Смартфон', '12Мп / 7Мп', `5,5"`, '202г', 'images/Iphone/Iphone8sPlus.jpg'],
    ['103', 'IPhone X 64Gb', 'Серый космос', '64Gb', 'Смартфон', '12Мп / 7Мп', `5,8"`, '174г', 'images/Iphone/IphoneX.jpg'],
    ['104', 'IPhone 11 128Gb', 'Фиолетовый', '128Gb', 'Смартфон', '12Мп / 12Мп', `6,1"`, '194г', 'images/Iphone/Iphone11.jpg'],
    ['105', 'IPhone 12 Plus 128Gb', 'Чёрный', '128Gb', 'Смартфон', '12Мп / 12Мп', `6,1"`, '162г', 'images/Iphone/Iphone12.jpg'],
    ['106', 'IPhone XS Max 64Gb', 'Серый космос', '64Gb', 'Смартфон', '12Мп / 7Мп', `6,5"`, '208г', 'images/Iphone/IphoneXS.jpg']
]

var IPad = [
    ['201', 'IPad 32Gb', 'Серебристый', '32Gb', 'Планшет', '8Мп / 1,2Мп', `10,2"`, '490г', 'images/Ipad/Ipad.jpg'],
    ['202', 'IPad Air 256Gb', 'Тёмно-серый', '256Gb', 'Планшет', '8Мп / 7Мп', `10,5"`, '464г', 'images/Ipad/IpadAir.jpg'],
    ['203', 'IPad Mini 64Gb', 'Серебристый', '64Gb', 'Планшет', '8Мп / 7Мп', `7,9"`, '300г', 'images/Ipad/IpadMini.jpg'],
    ['204', 'IPad Pro 256Gb', 'Серебристый', '128Gb', 'Планшет', '12Мп / 7Мп', `11"`, '471г', 'images/Ipad/IpadPro.jpg']
]

var MacBook = [
    ['301', 'MacBook 12', 'Серый', '8GB / 256Gb SSD', 'Ноутбук', '5Мп', `12"`, '1,29кг', 'images/MacBook/macbook12.jpg'],
    ['302', 'MacBook Air', 'Серый', '16GB / 512Gb SSD', 'Ноутбук', '5Мп', `12"`, '1,29кг', 'images/MacBook/macbookAir.jpg'],
    ['303', 'MacBook Air 13', 'Серый', '16GB / 1Tb SSD', 'Ноутбук', '5Мп', `13"`, '1,35кг', 'images/MacBook/macbookAir13.jpg'],
    ['304', 'MacBook MRQN2', 'Серый', '8GB / 256Gb SSD', 'Ноутбук', '5Мп', `13"`, '1,35кг', 'images/MacBook/macbookMRQN2.jpg'],
    ['305', 'MacBook Pro 13', 'Серый', '8GB / 512Gb SSD', 'Ноутбук', '5Мп', `13"`, '1,4кг', 'images/MacBook/macbookPro13.jpg'],
    ['306', 'MacBook Pro 15', 'Серый', '64GB / 8Tb SSD', 'Ноутбук', '5Мп', `15"`, '1,4кг', 'images/MacBook/macbookPro15.jpg']
]

createList(IPhone)
createList(IPad)
createList(MacBook)

function createList(type) {
    for (i = 0; i < type.length; i++) {

    var tr = document.createElement('tr')
    tr = document.createElement('tr')
    tr.className = 'tableList'
    tr.addEventListener('click', showInfo)

    table.appendChild(tr)

    for (k = 0; k < 4; k++) {
        var td = document.createElement('td')
        td.innerHTML = type[i][k]
        tr.appendChild(td)
    }
}

}

function clearList() {
    var clear = document.getElementsByClassName('tableList')
    var clearLenght = clear.length
    for (i = 0; i < clearLenght; i++) {
        table.removeChild(table.lastChild)
    }
}

function iphoneList() {
    clearList()
    createList(IPhone)
    list = 1
}

function ipadList() {
    clearList()
    createList(IPad)
    list = 2
}

function macBookList() {
    clearList()
    createList(MacBook)
    list = 3
}

function allList() {
    clearList()
    createList(IPhone)
    createList(IPad)
    createList(MacBook)
    list = 0
}

function fullListCreate(type) {
    for (i = 0; i < type.length; i++) {
        fullList.push(type[i])
    }
}

function showInfo() {

    fullList = []

    fullListCreate(IPhone)
    fullListCreate(IPad)
    fullListCreate(MacBook)

    for (i = 0; i < fullList.length; i++) {
        if (this.firstChild.innerHTML == fullList[i][0]){
            result = fullList[i]
        }
    }
    
    
    infoModel.innerHTML = result[1]
    infoClass.innerHTML = result[4]
    infoSize.innerHTML = result[2]
    infoMemory.innerHTML = result[3]
    infoCamera.innerHTML = result[5]
    infoColor.innerHTML = result[6]
    infoWight.innerHTML = result[7]
    image.src = result[8]

    blockInfo.hidden = false


}

function showAddArea() {
    if (inputArea.hidden) {
        inputArea.hidden = false
    } else {
        inputArea.hidden = true
    }
}

function checkAdd() {
    
    if (inputCategory.value == 'category' ||
inputModel.value == '' ||
inputSize.value == '' ||
inputMemory.value == '' ||
inputCamera.value == '' ||
inputColor.value == '' ||
inputWight.value == '') {
        alert('Заполнены не все поля! Добавление невозможно')
    } else {
        addNew()
    }
}

function addNew() {
    
    var newWight
    if (inputWight.value > 1000) {
        newWight = `${inputWight.value / 1000}кг`
    } else {
        newWight = `${inputWight.value}г`
    }
    
    switch (inputCategory.value) {
        case 'IPhone': 
            if (IPhone.length + 1 < 10) {
                newID = '10' + Number(IPhone.length + 1)
                newType = 'Смартфон'
                break;
                } else {
                    newID = '1' + Number(IPhone.length + 1)
                    newType = 'Смартфон'
                    break;
            }
        case 'IPad': 
            if (IPad.length + 1 < 10) {
                newID = '20' + Number(IPad.length + 1)
                newType = 'Планшет'
                break;
            } else {
                newID = '2' + Number(IPad.length + 1)
                newType = 'Планшет'
                break;
            }
        case 'MacBook': 
            if (MacBook.length + 1 < 10) {
                newID = '30' + Number(MacBook.length + 1)
                newType = 'Ноутбук'
                break;
            } else {
                newID = '3' + Number(MacBook.length + 1)
                newType = 'Ноутбук'
                break;
            }
    }
    
    
    var newElement = [newID, `${inputCategory.value} ${inputModel.value} ${inputMemory.value}Gb`, inputColor.value, `${inputMemory.value}Gb`, newType, `${inputCamera.value} Мп`, `${inputSize.value}"`, newWight, 'images/NewElement.jpg']
    
    switch (inputCategory.value) {
        case 'IPhone': 
            IPhone.push(newElement)
            break;
        case 'IPad': 
            IPad.push(newElement)
            break;
        case 'MacBook': 
            MacBook.push(newElement)
            break;
    }
    
    switch (list) {
        case 0:
            allList()
            break;
        case 1:
            iphoneList()
            break;
        case 2:
            ipadList()
            break;
        case 3:
            macBookList()
            break;
    }
    
    
    
}

function clearPlace() {
    inputCategory.value = 'category'
    inputModel.value = ''
    inputSize.value = ''
    inputMemory.value = ''
    inputCamera.value = ''
    inputColor.value = ''
    inputWight.value = ''
}

