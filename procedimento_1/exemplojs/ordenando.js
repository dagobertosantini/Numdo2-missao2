function swap(itens, posicao1, posicao2){
    var temp = itens[posicao1];
    itens[posicao1] = itens[posicao2];
    itens[posicao2] = temp;

}

function shuffle(itens){
    for(var i = itens.length - 1; i >= 1; i--){
        var j = Math.floor(Math.random() * (i + 1))
        swap(itens,j,i);
    }
}

function bubble_sort(itens){
    var comp = itens.length;
    for (var i = 0; i < comp;i++){
        for(var j = 0; j < comp - i - 1; j++){
            if(itens[j] > itens[j+1]){
                swap(itens,j,j+1)
            }
        }
    }
}

function selection_sort(itens){
    var comp = itens.length;
    for (var i = 0; i < comp; i++){
        var k = i;
        for(var j = i+1; j < comp; j++){
            if(itens[j] < itens[k]){
                k = j;
            }
        }
        if(k != i){
            swap(itens,i,k)
        }
    }
}

function quick_sort(itens, pos_ini, pos_fin){
    var inicial = pos_ini;
    var final = pos_fin;
    var media = Math.floor((inicial + final) / 2);

    while(inicial < final){
        while(itens[inicial] < itens[media]){
            inicial++;
        }
        while(itens[final] > itens[media]){
            final--;
        }
        if(inicial <= final){
            swap(itens,inicial,final);
            inicial++;
            final--;
        }
    }

    if(final > inicial){
        quick_sort(itens, pos_ini, final)
    }

    if(inicial < final){
        quick_sort(itens, inicial, pos_fin)
    }
}