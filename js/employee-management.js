/*eslint-env browser*/

let employees = [
  ["Garrett Hughes", "Software Engineer", "1234"],
  ["Adam Hutchenson", "People Specialist", "5678"],
  ["Lillie Sidle", "Marketing", "8919"],
  ["Beth Morris", "Analytics", "1236"],
  ["Pat Zeck", "Software Engineer", "1289"]
]

function fillOutEmployeeChart() {
  fillOutEmployeeCount()

  const element = document.getElementById("employee-table")
  element.innerHTML = renderHeaderRow()

  employees.forEach((employeeArray, index) => {
    let newRow = document.createElement("div")

    let nameColumn = document.createElement("div")
    nameColumn.innerHTML = `<p>${employeeArray[0]}</p>`

    let positionColumn = document.createElement("div")
    positionColumn.innerHTML = `<p>${employeeArray[1]}</p>`

    let extensionColumn = document.createElement("div")
    extensionColumn.innerHTML = `<p>${employeeArray[2]}</p>`

    let deleteColumn = document.createElement("div")
    deleteColumn.classList.add("delete-button-container")
    deleteColumn.innerHTML = '<button class="delete-button" >Delete</button>'
    let button = deleteColumn.childNodes[0]
    button.setAttribute('id', `delete-${index}`)
    button.addEventListener('click', () => {
      removeEmployee(index)
    })

    newRow.appendChild(nameColumn)
    newRow.appendChild(positionColumn)
    newRow.appendChild(extensionColumn)
    newRow.appendChild(deleteColumn)

    let styleToBeAdded = index % 2 === 0 ? 'row-styles-even' : 'row-styles-odd'

    newRow.classList.add(styleToBeAdded)
    newRow.classList.add('table-child')
    element.appendChild(newRow)
  })
}


function attemptToAddEmployee() {
  resetErrorMessages()
  let name = document.getElementById("employee-name").value
  let title = document.getElementById("employee-title").value
  let extension = document.getElementById("employee-extension").value

  !name && document.getElementById("name-error").appendChild(document.createTextNode("Name is Required"))
  !title && document.getElementById("title-error").appendChild(document.createTextNode("Title is Required"))
  !extension && document.getElementById("extension-error").appendChild(document.createTextNode("Extension is Required"))

  name && title && extension && addEmployee(name, title, extension)
}

function addEmployee(name, title, extension) {
  employees.push([name, title, extension])
  resetForm()
  fillOutEmployeeChart()
}

function resetForm() {
  document.getElementById("employee-name").value = ''
  document.getElementById("employee-title").value = ''
  document.getElementById("employee-extension").value = ''
}

function resetErrorMessages() {
  document.getElementById("name-error").innerHTML = ''
  document.getElementById("title-error").innerHTML = ''
  document.getElementById("extension-error").innerHTML = ''
}

function removeEmployee(index) {
  if (index > -1) {
    employees.splice(index, 1)
  }
  fillOutEmployeeChart()
}

function fillOutEmployeeCount() {
  document.getElementById("employee-count").innerHTML = `Showing ${employees.length} employees`
}

const renderHeaderRow = () => (
  " <div class=\"table-header\"><div>\n" +
  "            <p style=\"margin-left: 10px\">Name</p>\n" +
  "        </div>\n" +
  "        <div>\n" +
  "            <p style=\"margin-left: 10px\">Title</p>\n" +
  "        </div>\n" +
  "        <div>\n" +
  "            <p style=\"margin-left: 10px\">Extension</p>\n" +
  "        </div>\n" +
  "        <div></div>\n" +
  "    </div>"
)
