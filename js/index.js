const list = document.querySelector('.drop-list');
const lists = document.querySelectorAll('.list-item');
const divs = document.querySelectorAll('.right>div')

for(let i =0;i<lists.length;i++) {
    lists[i].onclick = function (){
        for(let j = 0;j < lists.length;j++) {
            lists[j].classList = 'list-item'
            
         }
         lists[i].className = 'list-item active';
        for(let h = 0;h< lists.length;h++) {
            divs[h].style.display = 'none';
        }
         divs[i].style.display = 'block';
    }
}

