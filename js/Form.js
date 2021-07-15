class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(550, 10);

        var input = createInput("name");
        input.position(550, 200);

        var button = createButton("Play");
        button.position(600,300);

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Welcome "+name);
            greeting.position(550, 200);

        })

        



    }
}