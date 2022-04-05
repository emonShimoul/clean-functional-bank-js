function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '15px';
}

const players = document.getElementsByClassName('player');

for(const player of players){
    setPlayerStyle(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'yellow';
    // });
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h4 class="player-name">New Player</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat sit distinctio aperiam incidunt dolorem molestiae corrupti odio eos, assumenda omnis rerum nisi neque soluta sed hic similique modi quam?</p>
    `;
    playersContainer.appendChild(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'yellow';
    // });
}

document.getElementById('players').addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() == 'div'){
        e.target.style.backgroundColor = 'yellow';
    }
    else{
        e.target.parentNode.style.backgroundColor = 'yellow';
    }
})