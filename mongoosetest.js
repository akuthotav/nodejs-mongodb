const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin123@cluster0.c2r0jib.mongodb.net/CapOneDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));