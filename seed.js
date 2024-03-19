const moongoose = require("mongoose")
const Product = require("./model/Product")

const dummy_data = [
    {
        name:"i phone 15",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
    {
        name:"macbook",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
    {
        name:"apple watch",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
    {
        name:"apple earpods",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
    {
        name:"apple airtag",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
    {
        name:"apple tv",
        price: 1500000,
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores dicta neque, dolorum sed minus nesciunt impedit id assumenda totam distinctio expedita commodi nulla eligendi corrupti, sunt velit eos aspernatur."
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(async()=>{
    await Product.create(dummy_data)
})
