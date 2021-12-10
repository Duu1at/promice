// ==============Promise==========
// console.log('request data ...')


// const p=new Promise((resolve,reject)=>{ //reso;
//     setInterval(()=>{
// console.log('preparing data ...')
// const backendData={
//     server:'asdf',
//     port:200,
//     status:"200 -server in npt "
// }
// // resolve(backendData)
// reject(backendData)
//     },2000)
// })


// p
// .then((data)=>console.log('OK',data))
// .catch((err)=>{
//     console.log('ERROR',err)

// })
// .finally((data)=>console.log('finnaly answer'))

// =========виды запросов==========
// Get  (отправляем данные в бек)
// Post (отправляем данные ,изменение)
// put patch (редактирование данных изменение)
// delete (удаление данных)

// виды HTTP  статусов==========Hyper text transmition protocol
// 200 OK- правидные все!
// 300 -перенаправдение
// 400 - ошибка во фронтенде - неправылный запрос
// 500-ошибка сервера



// =====c==fetch======Async=========Await=======
// const search=async()=>{
//     let url='http://127.0.0.1:5500/index.html'
//     let request=await fetch(url)
//     let response=await request.json()
//     console.log(response)
// }

// =====================

const API = 'https://api.giphy.com/v1/gifs/search?api_key='

const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'

const secondStr = '&limit=25&q='

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

const searchGiphy = async (e) => {
    e.preventDefault()
    let text = input.value
    let url = API + KEY + secondStr + text
    let request = await fetch(url)
    let response = await request.json()
  
    input.value=''
    output.innerHTML=''
    renderGiphy(response.data)
}
const renderGiphy = (data) => {
    data.forEach(el => {
        let div = document.createElement('div')

        let iframe = document.createElement('iframe')
        iframe.className='iframe'
     
        let h3 = document.createElement('h3')
        h3.className='h3'
      
        iframe.src =el.embed_url
        h3.innerHTML = el.title
        output.append(div)
        div.append(h3,iframe)

    });
}

btn.addEventListener('click', searchGiphy)