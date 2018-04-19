// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron')

$('.open-add-modal').click(() => {
  $('#add-modal').addClass('is-active')
})

$('.close-add-modal').click(() => {
  $('#add-modal').removeClass('is-active')
})

$('#add-button').click(() => {
  let newItemURL = $('#item-input').val()
  if(newItemURL) {
    $('#item-input').prop('disabled', true)
    $('#add-button').addClass('is-loading')
    $('.close-add-modal').addClass('is-disabled')
    ipcRenderer.send('new-item', newItemURL)
  }
})

ipcRenderer.on('new-item-success', (e, item) => {
  console.log(item)

  $('#add-modal').removeClass('is-active')
  $('#item-input').prop('disabled', false).val('')
  $('#add-button').removeClass('is-loading')
  $('.close-add-modal').removeClass('is-disabled')
})

$('#item-input').keyup((e) => {
  if(e.key === 'Enter') $('#add-button').click()
})
