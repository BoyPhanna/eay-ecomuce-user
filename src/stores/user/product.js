
import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('user-product', {
  state:()=>({
    list:[
      {
        name:'ម្ជូរគ្រឿង',
        imageUrl:'https://soracambodia83273053.files.wordpress.com/2020/10/92.jpg',
        quantity:10,
        about:'ស្រស់មាត់ បាត់នឿយ',
        status:'open',
        price:5,
      },
      {
        name:'លៀសហាល',
        imageUrl:'https://i.ytimg.com/vi/_UJJ0ttezNo/mqdefault.jpg',
        quantity:10,
        about:'ឆ្ងាញ់គ្មានពីរ',
        status:'open',
        price:5,
      },
      {
        name:'មាន់ដុត',
        imageUrl:'https://pppkhmer.sgp1.digitaloceanspaces.com/image/main/field/image/roast-chicken.jpg',
        quantity:10,
        about:'មាន់ស្រែ ១០០%',
        status:'open',
        price:5,
      },
      {
        name:'គោដុត',
        imageUrl:'https://images.deliveryhero.io/image/fd-kh/LH/nkzi-hero.jpg?width=480&height=360&quality=45',
        quantity:10,
        about:'គោសាច់ដុំ ហាត់ប្រាណជាប្រចាំ',
        status:'open',
        price:5,
      },
      {
        name:'ត្រីបំពង',
        imageUrl:'https://i.ytimg.com/vi/hDNjx-Z1j5s/maxresdefault.jpg',
        quantity:10,
        about:'ត្រីមានសំណាង សាច់ទន់',
        status:'open',
        price:5,
      },
      {
        name:'សាច់គោអាំង',
        imageUrl:'https://i.ytimg.com/vi/i7-3I_ZvtKg/maxresdefault.jpg',
        quantity:10,
        about:'គោខ្មែរ ឆ្ងាញ់លើសពីការគិត',
        status:'open',
        price:5,
      },
    ],
    loaded:false
  }),
  actions:{
    filterProducts (searchName){
      return this.list.filter(product => product.name.includes(searchName))
    }
  }
})
