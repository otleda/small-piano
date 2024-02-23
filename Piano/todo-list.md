## TO-D0 LIST 
 -  Pegar as teclas do teclado do piano, e adicionar para cada uma delas suas notas correspondente. 
 
 - criar uma ação, que quando clicar ou tocar em uma tecla expecifica do keyboard (teclado do computador), terá de tocar a sua nota, soando o som dela ( C C# D D# E F F# G G# A A# B C8) 
    
    > [!TIP] 
    > OBS: vamos adicionar o modo touch, para dispositivos que usa a própria tela para clicar.

1. [x] Pegaremos as teclas com metodo nativo do JS ```querySelectorAll()```

2. [x] Adicionaremos eventos ambos para o mouse, teclado e o touch, com o ```addEventListener('type', fn)```. criando uma lógica de quando a ação for acionada, pegaremos a **keyCode**
