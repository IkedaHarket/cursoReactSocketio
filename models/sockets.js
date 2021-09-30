
class Sockets{

    constructor(io){
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents(){
        this.io.on('connection', socket =>{
    
            socket.on('mensaje-cliente',(data)=>{
                console.log(data);
                this.io.emit('mensaje-from-server',data);
            })
        

        });
    }

}

module.exports = Sockets;