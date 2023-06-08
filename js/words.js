const footer = document.getElementsByTagName('footer')[0]
const observer = new IntersectionObserver((val) => {
    setTimeout(addItem, 300);
});
observer.observe(footer);

const box = document.getElementsByClassName('row')[0];
let num = Math.floor(Math.random()*(window.words.length-20));
function addItem() {
    for (let i = num; i < num + 10; i++) {
        let node = document.createElement("div");
        let node1 = document.createElement("div");
        let node11 = document.createElement("div");
        node11.className = 'myfront';
        let node111 = document.createElement("h3");
        node111.innerText = window.words[i]["单词"];
        let node112 = document.createElement("h4");
        node112.innerText = window.words[i]["音标"];
        node11.appendChild(node111);
        node11.appendChild(node112);
        let node12 = document.createElement("div");
        node12.className = 'myback';
        let node121 = document.createElement("h3");
        node121.innerText = window.words[i]["单词"];
        let node122 = document.createElement("p");
        node122.innerHTML = '';
        if(window.words[i]["词性1"].length!=0){
            node122.innerHTML += window.words[i]["词性1"]+ ' : ' +window.words[i]["词义1"] + '<br />';
        }
        if(window.words[i]["词性2"].length!=0){
            node122.innerHTML += window.words[i]["词性2"]+ ' : ' +window.words[i]["词义2"] + '<br />';
        }
        if(window.words[i]["词性3"].length!=0){
            node122.innerHTML += window.words[i]["词性3"]+ ' : ' +window.words[i]["词义3"] + '<br />';
        }
        node12.appendChild(node121);
        node12.appendChild(node122);
        node1.appendChild(node11);
        node1.appendChild(node12);
        node1.className = 'mycard';
        node.appendChild(node1);
        node.className = 'col-lg-4 col-md-6 col-sm-12 mt-2';
        box.appendChild(node);
    }
    num = (num + 10)%(window.words.length);
}