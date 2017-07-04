var Product = require('../models/product'); 

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://i.ebayimg.com/images/g/ec8AAOSwJSJXG4VK/s-l300.jpg',
        title: 'Programming Shirt',
        description: 'A programming shirt that expresses you ability to code in BASIC!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://img0.etsystatic.com/057/1/8507134/il_340x270.758926152_58es.jpg',
        title: 'Programming Shirt',
        description: 'Awesome shirt!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.getdigital.de/images/produkte/t4/t4_nullpointer.jpg',
        title: 'Programming Shirt',
        description: 'Art thou Mad!',
        price: 15
    }),
    new Product({
        imagePath: 'https://res.cloudinary.com/teepublic/image/private/s--Z2QCbZ6b--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1448585404/production/designs/124979_1.jpg',
        title: 'Programming Shirt',
        description: 'Awesome!!!',
        price: 30
    }),
    new Product({
        imagePath: 'https://rlv.zcache.com/codings_in_my_dna_white_text_t_shirt-r31130b5f9dd64f7a91ff9cbea7fc1d90_k2g9m_324.jpg',
        title: 'Programming Shirt',
        description: 'In my DNA!',
        price: 25
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/c7/0a/3e/c70a3ed9d7de8a3c09e158321d05a742.jpg',
        title: 'Programming Shirt',
        description: 'Flow-chart shirt!!',
        price: 19
    }),
];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
             exit();
        }
    }); 
}

function exit(){
     mongoose.disconnect();
}

