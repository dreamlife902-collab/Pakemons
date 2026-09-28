import pokemons from './pokemons.js';

const a1 = document.getElementById('pokemon-list');
const inp = document.getElementById('inp');

function rend(l1) {
    if (!a1) return;

    if (l1.length === 0) {
        a1.innerHTML = '<div class="notresult">Not Found</div>';
        return;
    }

    a1.innerHTML = l1.map(nimadr => `
        <div class="card">
            <div class="raqam">
                <span class="s1">${nimadr.num}</span>
            </div>
            <h3>${nimadr.name}</h3>
            <img class="i1" src="${nimadr.img.replace(/^http:/, 'https:')}" alt="${nimadr.name}" loading="lazy">
            <h3 class="bg">${nimadr.type.join(' / ')}</h3>
            <p>Candy count: ${nimadr.candy_count}</p>
            <p>${nimadr.weight}</p>
            <p class="col">${nimadr.weaknesses.join(', ')}</p>
            <div class="start">
                <span class="s2">${nimadr.spawn_time}</span>
            </div>
        </div>
    `).join('');
}

function updateList() {
    const search = inp.value.toLowerCase().trim();
    const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search)
    );

    rend(filtered);
}

inp.addEventListener('input', updateList);

updateList();