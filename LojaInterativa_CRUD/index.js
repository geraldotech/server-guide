const modal = document.querySelector(".modal-container")
const tbody = document.querySelector("tbody")
const sName = document.querySelector('#m-name');
const fcategory = document.querySelector('#category')
const ssubcategory = document.querySelector('#categorySelect') //sub category
const mQuant = document.querySelector('#m-quant') //quantidade
const mQuant2 = document.querySelector('#m-quant2') //quantidade
const myUnitario = document.querySelector('#myUnitario')



const btnSalvar = document.querySelector('#btnSalvar')

function displaySelected() {
    var fab = document.getElementById("category").value;
    var pro = document.getElementById("categorySelect").value;
    alert(fab + "\n" + pro);
}

var subcategory = {
    Nestle: ["Achocolatado", "Sorteves", "Biscoitos", "Creme de Leite"],
    PlusVita: ["Pão de Forma", "Bolo Plus", "Pão Integral"]
}

function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("categorySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (categoryId in subcategory[value]) {
            citiesOptions += "<option>" + subcategory[value][categoryId] + "</option>";
        }
        document.getElementById("categorySelect").innerHTML = citiesOptions;
    }
}


function resetSelection() {
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("categorySelect").selectedIndex = 0;
}



let itens 
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if(e.target.className.indexOf('.modal') !== -1 ){
            modal.classList.remove('active')
        }
    }
    if (edit) {
        sName.value = itens[index].name
        fcategory.value = itens[index].company //company => mycategories
        ssubcategory.value = itens[index].sItem
        mQuant.value = itens[index].quantidade   
        mQuant2.value = itens[index].quantidade2   
        
        id = index
      } else {
        sName.value = ''
        ssubcategory.value = ''
        mQuant.value = ''
        mQuant2.value = ''
        fcategory.value = '' 
        
      }
      
    }

    function editItem(index){

        openModal(true, index)
    }

    function deleteItem(index){
        itens.splice(index, 1)
        setItensBD()
        loadItens()
    }

function insertItem(item,index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.company}</td>
    <td>${item.sItem}</td>
    <td>${item.quantidade}</td>
    <td>R$ ${item.quantidade2 * item.quantidade}</td>
    
    <td class="acao">
    <button onclick="editItem(${index})"><i class='bx bx-edit'></i> </button> </td>

    <td class="acao">
    <button onclick="deleteItem(${index})"> <i class='bx bx-trash'></i> </button> </td>
    </td>
    `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sName.value == '' || fcategory.value == '' || ssubcategory.value == '' || mQuant.value == '' || mQuant2.value == '') {
    return
  }

    e.preventDefault();

if(id !== undefined) {
    itens[id].name = sName.value
    itens[id].company = fcategory.value
    itens[id].sItem  = ssubcategory.value
    itens[id].quantidade = mQuant.value
    itens[id].quantidade2 = mQuant2.value
    
    
} else {
    itens.push({'name': sName.value, 'company': fcategory.value, 'sItem': ssubcategory.value, 'quantidade': mQuant.value, 'quantidade2': mQuant2.value,})
    console.log(mQuant2.value * mQuant.value)
}

setItensBD()

modal.classList.remove('active')
loadItens()
id = undefined
}

function loadItens(){
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()



console.log(2 +2)