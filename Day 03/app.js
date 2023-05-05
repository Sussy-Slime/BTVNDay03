//Bai 1
/*class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name, Created) {
        this.created = Created;
    }
}

let rabbit = new Rabbit("White Rabbit", "1/1/2021");
alert(rabbit.name);
*/

//Bai2
/*class Clock {
    constructor({ template}) {
        this.template = template;
    }

render(){
    let date = new Date();
    
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

    console.log(output);
}
stop(){
    clearInterval(this.timer);
}

start() {
    this.render();
    this.timer = setTimeout(() => this.render(), 1000);
    }  
}

class Clock2 extends Clock {
    constructor({ template}) {
        this.template = template;
    }

render(){
    let date = new Date();
    
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let ticks = date.getTicks();
    if (ticks < 1000) ticks = '0' + ticks;

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs)
    .replace('mili', ticks);

    console.log(output);
}
stop(){
    clearInterval(this.timer);
}

start() {
    this.render();
    this.timer = setTimeout(() => this.render(), 1000);
    }  
}
*/

//Bai 3
/*class PhanSo {
    constructor(TuSo, MauSo){
    this.tu = TuSo
    this.mau = MauSo
    }
}
class PhanSo2 extends PhanSo{
    constructor(TuSo, MauSo){
        this.tu = TuSo
        this.mau = MauSo
    }

    Cong(){
        let ketquaTu = this.tu* PhanSo.this.mau + PhanSo.this.tu* this.mau;
        let ketquaMau = this.mau* PhanSo.this.mau
        let Tong = ketquaTu/ketquaMau
    }

    Tru(){
        let ketquaTu = this.tu* PhanSo.this.mau - PhanSo.this.tu* this.mau;
        let ketquaMau = this.mau* PhanSo.this.mau
        let Hieu = ketquaTu/ketquaMau
    }
    
    Nhan(){
        let ketquaTu = this.tu* PhanSo.this.tu
        let ketquaMau = this.mau* PhanSo.this.mau
        let Tich = ketquaTu/ketquaMau
    }

    Chia(){
        let ketquaTu = this.tu* PhanSo.this.mau
        let ketquaMau = this.mau* PhanSo.this.tu
        let Thuong = ketquaTu/ketquaMau
    }
}
*/