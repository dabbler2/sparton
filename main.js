const createForm = document.querySelector('form')
createForm.addEventListener('submit', e => {
	e.preventDefault()
	const title = document.getElementById('card_content').value
	localStorage.setItem(title,0)
	alert('카드 추가 완료')
	location.reload()
})

const cards = document.getElementById('cards')
for(let i=0;i<localStorage.length;++i){
	const card = document.createElement('div')
	const title = localStorage.key(i)
	card.classList.add('bucket')
	card.classList.add('img3')
	card.classList.add('center')
	if(+localStorage.getItem(title)) card.classList.add('done')
	card.innerHTML = title
	const removeButton = document.createElement('button')
	removeButton.innerHTML = 'X'
	removeButton.addEventListener('click', e => {
		const remove = confirm('카드를 삭제합니다.')
		if(remove){
			card.remove()
			localStorage.removeItem(title)
		}
	})
	card.addEventListener('click', e => {
		if(e.target.tagName==='DIV'){
			card.classList.toggle('done')
			localStorage.setItem(title,1-(+localStorage.getItem(title)))
		}
	})
	card.appendChild(removeButton)
	
	cards.appendChild(card)
}