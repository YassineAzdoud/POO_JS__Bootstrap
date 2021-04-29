class Phone {
  constructor(color, weight, brand) {
   this.color = color;
   this.weight = weight;
   this.brand = brand;
  }
  phoneColor() {
   return `The phone is ${this.color}`
  }
  phoneWeight() {
   return `With a weight ${this.weight}`
  } 
  phoneBrand() {
   return` produced by ${this.brand}`
  }
 }
 class PhonePlus extends Phone {
  constructor(color, weight, brand, price) {
    super(color, weight, brand);
    this.price = price;
  }
  phonePrice() {
    return` At a cost ${this.price}`
   }
  phoneCategory(){
    if(this.price > 1500){
      return`Within the luxury category`
    }else if(this.price < 1500 && this.price > 1000){
      return`Within the middle category`
    }else if(this.price < 1000){
      return`In the cheap category`
    }
  }
}
var Phone1 = new PhonePlus("red",3,"apple",980);
var Phone2 = new PhonePlus("black",3,"apple",1380);
var Phone3 = new PhonePlus("gold",3,"apple",2000);
console.log(Phone1.phoneColor(),Phone1.phoneWeight(),Phone1.phoneBrand(),Phone1.phonePrice(),Phone1.phoneCategory());
console.log(Phone2.phoneColor(),Phone2.phoneWeight(),Phone2.phoneBrand(),Phone2.phonePrice(),Phone2.phoneCategory());
console.log(Phone3.phoneColor(),Phone3.phoneWeight(),Phone3.phoneBrand(),Phone3.phonePrice(),Phone3.phoneCategory());